import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
	// baseQuery: fetchBaseQuery({ baseUrl: 'https://content-server-gamma.vercel.app/api/v1' }),
	tagTypes: ['Content', 'User'],
	endpoints: () => ({}),
});
