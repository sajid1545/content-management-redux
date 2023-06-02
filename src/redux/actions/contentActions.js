import { ADD_CONTENT, GET_CONTENT, TOGGLE_LOADING } from '../actionTypes/actionTypes';

export const addContent = (content) => {
	return {
		type: ADD_CONTENT,
		payload: content,
	};
};

export const getContent = (content) => {
	return {
		type: GET_CONTENT,
		payload: content,
	};
};

export const toggleLoading = (data) => {
	return {
		type: TOGGLE_LOADING,
		payload: data,
	};
};
