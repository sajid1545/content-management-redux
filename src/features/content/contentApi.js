import Cookies from 'js-cookie';
import { apiSlice } from './../api/apiSlice';

const contentApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getContent: builder.query({
			query: (toggleFilter) => ({
				url: `/content?sort=${toggleFilter}`,
				headers: {
					authorization: `Bearer ${Cookies.get('user-token')}`,
				},
			}),
		}),
	}),
});

export const { useGetContentQuery } = contentApi;
