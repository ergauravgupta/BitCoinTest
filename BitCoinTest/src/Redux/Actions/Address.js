import { AsyncStorage } from 'react-native';
import * as ActionTypes from '../Constants/ActionTypes';
import { APIClient, API_URL } from '../../Networking';

const addressData = object => {
	return {
		type: ActionTypes.ADDRESS,
		payload: object
	};
};

const addressHasError = bool => {
	return {
		type: ActionTypes.ADDRESS_HAS_ERROR,
		hasError: bool
	};
};

const addressIsLoading = bool => {
	return {
		type: ActionTypes.ADDRESS_IS_LOADING,
		isLoading: bool
	};
};

const getBitCoinDetail = address => {
	return dispatch => {
		dispatch(addressIsLoading(true));

		APIClient.get(`${API_URL.ADDRESS}${address}`)
			.then(res => {
				dispatch(addressIsLoading(false));

				if (res.data) {
					dispatch(addressHasError(false));
					dispatch(addressData(res));
					AsyncStorage.setItem('address', JSON.stringify(res.data));
				}
			})
			.catch(e => {
				dispatch(addressIsLoading(false));
				dispatch(addressHasError(true));
			});
	};
};

module.exports = {
	addressData,
	addressHasError,
	addressIsLoading,
	getBitCoinDetail
};
