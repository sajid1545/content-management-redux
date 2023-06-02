import { ADD_CONTENT, GET_CONTENT } from '../actionTypes/actionTypes';

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
