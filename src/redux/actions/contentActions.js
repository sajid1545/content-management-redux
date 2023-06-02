import { ADD_CONTENT } from '../actionTypes/actionTypes';

export const addContent = (content) => {
	return {
		type: ADD_CONTENT,
		payload: content,
	};
};
