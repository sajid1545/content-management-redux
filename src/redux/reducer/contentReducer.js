import { ADD_CONTENT, GET_CONTENT, TOGGLE_LOADING } from '../actionTypes/actionTypes';

const initialState = {
	contents: [],
	historyCart: [],
	loading: false,
};

const contentReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CONTENT:
			return {
				...state,
				contents: [...state.contents, action.payload],
			};

		case GET_CONTENT:
			return {
				...state,
				contents: action.payload,
			};

		case TOGGLE_LOADING:
			return {
				...state,
				loading: action.payload,
			};

		default:
			return state;
	}
};

export default contentReducer;
