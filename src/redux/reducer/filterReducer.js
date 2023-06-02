import { TOGGLE_UPLOAD } from '../actionTypes/actionTypes';

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

		default:
			return state;
	}
};

export default filterReducer;
