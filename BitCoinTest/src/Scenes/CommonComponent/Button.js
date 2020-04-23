import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { Colors } from '../../res/theme';

class Button extends Component {
	render() {
		const { label, onPress } = this.props;
		return (
			<TouchableOpacity
				activeOpacity={1}
				style={[styles.container, this.props.style]}
				onPress={onPress}
				disabled={!!this.props.disabled}
			>
				<Text style={[styles.text, this.props.textStyle]}>{label}</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 49,
		alignSelf: 'center',
		borderRadius: 5,
		backgroundColor: '#FFCC01',
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		color: 'white',
		fontSize: 20,
		textAlign: 'center'
	}
});

Button.propTypes = {
	label: PropTypes.string,
	onPress: PropTypes.func
};

Button.defaultProps = {
	label: 'Submit',
	onPress: () => null
};

export default Button;
