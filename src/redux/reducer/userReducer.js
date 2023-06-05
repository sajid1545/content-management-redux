import { ADD_USER, TOGGLE_LOGIN_LOADING } from '../actionTypes/actionTypes';

const initialState = {
	auth: {},
	loginLoading: false,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER:
			return {
				...state,
				auth: action.payload,
			};

		case TOGGLE_LOGIN_LOADING:
			return {
				...state,
				loginLoading: action.payload,
			};

		default:
			return state;
	}
};

export default userReducer;
