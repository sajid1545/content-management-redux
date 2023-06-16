import { ADD_USER, LOAD_USER, LOGOUT, TOGGLE_LOGIN_LOADING } from '../actionTypes/actionTypes';

const initialState = {
	auth: {},
	loginLoading: false,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_USER: {
			return {
				...state,
				auth: action.payload,
			};
		}

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

		case LOGOUT:
			return {
				...state,
				auth: {},
			};

		default:
			return state;
	}
};

export default userReducer;
