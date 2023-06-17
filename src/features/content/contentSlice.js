import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	historyCart: [],
	tagFilters: [],
	uploadFilters: '',
};

const contentSlice = createSlice({
	name: 'content',
	initialState,
	reducers: {
		toggleUploadFilter: (state, action) => {
			state.uploadFilters = action.payload;
		},
		toggleTagFilters: (state, action) => {
			const selectedTag = state.tagFilters.find((tag) => tag === action.payload);
			const remainingTags = state.tagFilters.filter((tag) => tag !== action.payload);

			if (!selectedTag) {
				state.tagFilters = remainingTags;
				state.tagFilters.push(action.payload);
			} else {
				state.tagFilters = remainingTags;
			}
		},
	},
});

export const { toggleUploadFilter, toggleTagFilters } = contentSlice.actions;
export default contentSlice.reducer;
