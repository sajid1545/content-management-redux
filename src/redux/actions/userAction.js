import { ADD_USER, TOGGLE_LOGIN_LOADING } from '../actionTypes/actionTypes';

export const addUser = (data) => {
	return {
		type: ADD_USER,
		payload: data,
	};
};

export const toggleLoginLoading = (data) => {
	return {
		type: TOGGLE_LOGIN_LOADING,
		payload: data,  
	};
};
