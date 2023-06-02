import { TOGGLE_TAG, TOGGLE_UPLOAD } from '../actionTypes/actionTypes';

const initialState = {
	filters: {
		uploadFilters: '',
		tagFilters: [],
	},
};

const filterReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_UPLOAD:
			return {
				...state,
				filters: {
					...state.filters,
					uploadFilters: action.payload,
				},
			};

		case TOGGLE_TAG:
			if (!state.filters.tagFilters.includes(action.payload))
				return {
					...state,
					filters: {
						...state.filters,
						tagFilters: [...state.filters.tagFilters, action.payload],
					},
				};
			return {
				...state,
				filters: {
					...state.filters,
					tagFilters: state.filters.tagFilters.filter((tag) => tag !== action.payload),
				},
			};

		default:
			return state;
	}
};

export default filterReducer;
