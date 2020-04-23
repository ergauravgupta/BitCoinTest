import * as ActionTypes from '../Constants/ActionTypes';

const initialState = {
	hasError: false,
	isLoading: false,
	addressData: null
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ActionTypes.ADDRESS_HAS_ERROR:
			return Object.assign({}, state, {
				hasError: action.hasError
			});
		case ActionTypes.ADDRESS_IS_LOADING:
			return Object.assign({}, state, {
				isLoading: action.isLoading
			});
		case ActionTypes.ADDRESS:
			return Object.assign({}, state, {
				addressData: payload.data
			});
		default:
			return state;
	}
};
