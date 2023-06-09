import {
	ADD_CONTENT,
	ADD_TO_HISTORY_CART,
	DELETE_CONTENT,
	GET_CONTENT,
	TOGGLE_LOADING,
	UPDATE_CONTENT,
} from '../actionTypes/actionTypes';

const initialState = {
	contents: [],
	historyCart: [],
	loading: false,
};

const contentReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CONTENT:
			return {
				...state,
				contents: action.payload,
			};

		case ADD_CONTENT:
			return {
				...state,
				contents: [...state.contents, action.payload],
			};

		case UPDATE_CONTENT:
			const restProducts = state.contents.filter((content) => content._id !== action.payload._id);
			return {
				...state,
				contents: [restProducts, action.payload],
			};

		case DELETE_CONTENT:
			return {
				...state,
				contents: state.contents.filter((content) => content._id !== action.payload),
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
