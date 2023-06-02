import { TOGGLE_UPLOAD } from '../actionTypes/actionTypes';

export const toggleUpload = (data) => {
	return {
		type: TOGGLE_UPLOAD,
		payload: data,
	};
};
