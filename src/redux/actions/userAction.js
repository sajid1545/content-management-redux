import { ADD_USER, LOAD_USER, LOGOUT, TOGGLE_LOGIN_LOADING } from '../actionTypes/actionTypes';

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

export const loadUser = (data) => {
	return {
		type: LOAD_USER,
		payload: data,
	};
};

export const logOut = () => {
	return {
		type: LOGOUT,
	};
};
