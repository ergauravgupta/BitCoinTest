import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, SafeAreaView, Linking } from 'react-native';
import { connect } from 'react-redux';

import { Title, Button, Loader } from './CommonComponent';
import { AddressActions } from '../Redux/Actions';
import { Colors } from '../res/theme';

class HomeScene extends Component {
	constructor(props) {
		super(props);
		this.state = { address: '1DEP8i3QJCsomS4BSMY2RpU1upv62aGvhD' };
		this.handleDeepLink = this.handleDeepLink.bind(this);
	}
	componentDidMount() {
		Linking.addEventListener('url', e => this.handleDeepLink(e.url));
		Linking.getInitialURL()
			.then(this.handleDeepLink)
			.catch(e => {});
	}

	handleDeepLink = url => {
		if (url) {
			const pathComp = url.substr(url.lastIndexOf('/') + 1);
			switch (pathComp) {
				default:
					this.setState({ address: pathComp });
					break;
			}
		}
	};

	render() {
		let { hasError, isLoading } = this.props;
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<View style={styles.mainContainer}>
					<Title>Bitcoin Address</Title>
					<TextInput
						style={{
							height: 50,
							width: '100%',
							marginVertical: 20,
							borderColor: Colors.TEXT_COLOR,
							borderWidth: 1,
							borderRadius: 10,
							color: Colors.TEXT_COLOR,
							fontSize: 16
						}}
						value={this.state.address}
						onChangeText={address => this.setState({ address })}
					></TextInput>
					<Button
						label={'Submit'}
						style={{ width: '100%' }}
						onPress={() => {
							!!this.state.address && this.props.getBitCoinDetail(this.state.address);
						}}
					/>
					{!!this.props.address && (
						<View style={{ width: '100%', paddingTop: 20 }}>
							<Title>{`Total Received: ${this.props.address.total_received}`}</Title>
							<Title>{`Total Sent:: ${this.props.address.total_sent}`}</Title>
							<Title>{`Current Balance:: ${this.props.address.balance}`}</Title>
						</View>
					)}
					<Title textStyle={{ color: 'red' }}>{hasError ? 'Not found detail' : ''}</Title>
				</View>

				<Loader loading={isLoading} />
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		paddingHorizontal: 20,
		paddingTop: 20,
		alignItems: 'center'
	}
});

const mapStateToProps = state => {
	return {
		hasError: state.address.hasError,
		isLoading: state.address.isLoading,
		address: state.address.addressData
	};
};

const mapDispatchToProps = {
	getBitCoinDetail: AddressActions.getBitCoinDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScene);
