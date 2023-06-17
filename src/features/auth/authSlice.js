import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	auth: {},
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
});

export default authSlice.reducer;
