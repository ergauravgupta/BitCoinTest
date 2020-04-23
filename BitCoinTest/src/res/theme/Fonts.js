'use strict';

const Fonts = {
	regular: (s = 12) => {
		return {
			fontSize: s,
			fontFamily: 'Roboto-Regular',
			fontWeight: 'normal'
		};
	},
	medium: (s = 12) => {
		return {
			fontSize: s,
			fontFamily: 'Roboto-Medium',
			fontWeight: '500'
		};
	},
	bold: (s = 12) => {
		return {
			fontSize: s,
			fontFamily: 'Roboto-Bold',
			fontWeight: 'bold'
		};
	},
	light: (s = 12) => {
		return {
			fontFamily: 'Roboto-Light',
			fontWeight: 'normal',
			fontSize: s
		};
	},
	black: (s = 12) => {
		return {
			fontFamily: 'Roboto-Black',
			fontWeight: 'normal',
			fontSize: s
		};
	}
};

module.exports = {
	...Fonts
};
