import { apiSlice } from '../api/apiSlice';

const authApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		register: builder.mutation({
			query: (data) => ({
				url: '/auth/register',
				body: data,
				method: 'POST',
			}),
			invalidatesTags: ['User'],
		}),
		login: builder.mutation({
			query: (data) => ({
				url: '/auth/login',
				body: data,
				method: 'POST',
			}),
			invalidatesTags: ['User'],
		}),
	}),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
