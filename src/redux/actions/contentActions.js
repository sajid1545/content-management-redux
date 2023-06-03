import {
	ADD_CONTENT,
	ADD_TO_HISTORY_CART,
	DELETE_CONTENT,
	GET_CONTENT,
	TOGGLE_LOADING,
	UPDATE_CONTENT,
} from '../actionTypes/actionTypes';

export const getContent = (content) => {
	return {
		type: GET_CONTENT,
		payload: content,
	};
};

export const addContent = (content) => {
	return {
		type: ADD_CONTENT,
		payload: content,
	};
};

export const updateContent = (content) => {
	return {
		type: UPDATE_CONTENT,
		payload: content,
	};
};

export const deleteContent = (id) => {
	return {
		type: DELETE_CONTENT,
		payload: id,
	};
};

export const toggleLoading = (data) => {
	return {
		type: TOGGLE_LOADING,
		payload: data,
	};
};

export const addToHistoryCart = (data) => {
	return {
		type: ADD_TO_HISTORY_CART,
		payload: data,
	};
};
