'use strict';

import Actions from './Actions';
import Reducers from './Reducers';
import store from './Store/configureStore';
import ReduxTypes from './Constants/ActionTypes';

module.exports = {
	...Actions,
	Reducers,
	store,
	ReduxTypes
};
