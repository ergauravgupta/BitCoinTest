import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '../../res/theme';
import PropTypes from 'prop-types';

class Title extends Component {
	render() {
		return (
			<View style={[styles.container, this.props.style]}>
				<Text style={[styles.text, this.props.textStyle]}>{this.props.children}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		width: '100%'
	},
	text: {
		color: Colors.TEXT_COLOR,
		textAlign: 'left',
		fontSize: 15
	}
});

export default Title;
