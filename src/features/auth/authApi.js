import { apiSlice } from '../api/apiSlice';

const authApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		register: builder.mutation({
			query: (data) => ({
				url: '/register',
				body: data,
				method: 'POST',
			}),
			// invalidatesTags: ['User'],
		}),
	}),
});

export const { useRegisterMutation } = authApi;
