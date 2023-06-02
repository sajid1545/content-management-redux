import { TOGGLE_TAG, TOGGLE_UPLOAD } from '../actionTypes/actionTypes';

export const toggleUpload = (data) => {
	return {
		type: TOGGLE_UPLOAD,
		payload: data,
	};
};

export const toggleTag = (data) => {
	return {
		type: TOGGLE_TAG,
		payload: data,
	};
};
