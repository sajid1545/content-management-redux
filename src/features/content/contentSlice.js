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
		addToHistoryCart: (state, action) => {
			const selectedContent = state.historyCart.find(
				(content) => content._id === action.payload._id
			);
			const remainingContents = state.historyCart.filter(
				(content) => content._id !== action.payload._id
			);

			if (!selectedContent) {
				const updatedContent = { ...action.payload, quantity: 1 };
				state.historyCart = remainingContents;
				state.historyCart.push(updatedContent);
			} else {
				selectedContent.quantity++;
				state.historyCart = remainingContents;
				state.historyCart.push(selectedContent);
			}
		},
	},
});

export const { toggleUploadFilter, toggleTagFilters, addToHistoryCart } = contentSlice.actions;
export default contentSlice.reducer;
