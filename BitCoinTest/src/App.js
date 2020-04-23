'use';

import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import AppNavigation from './Navigation/AppNavigation';

import { Provider } from 'react-redux';
import { store } from './Redux';

console.disableYellowBox = true;
console.reportErrorsAsExceptions = false;

export default class App extends Component {
	constructor(props) {
		super(props);
		this.reduxStore = store();
	}
	render() {
		return (
			<Provider store={this.reduxStore}>
				<AppNavigation />
			</Provider>
		);
	}
}
