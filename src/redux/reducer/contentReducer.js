import {
	ADD_CONTENT,
	ADD_TO_HISTORY_CART,
	GET_CONTENT,
	TOGGLE_LOADING,
} from '../actionTypes/actionTypes';

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

		case ADD_TO_HISTORY_CART:
			const selectedContent = state.historyCart.find(
				(content) => content._id === action.payload._id
			);

			if (selectedContent) {
				const newCart = state.historyCart.filter((content) => content._id !== action.payload._id);
				selectedContent.quantity = selectedContent.quantity + 1;

				return {
					...state,
					historyCart: [...newCart, selectedContent],
				};
			}

			return {
				...state,
				historyCart: [...state.historyCart, { ...action.payload, quantity: 1 }],
			};

		default:
			return state;
	}
};

export default contentReducer;
