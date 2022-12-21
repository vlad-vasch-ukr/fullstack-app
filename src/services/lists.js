import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const listsApi = createApi({
  reducerPath: 'listsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API,
  }),
  tagTypes: ['Lists'],
  endpoints: (build) => ({
    fetchLists: build.query({
      query: () => ({
        url: '/lists',
      }),
      providesTags: ['Lists'],
    }),
    fetchListById: build.query({
      query: (id) => ({
        url: `/lists/details/${id}`,
      }),
    }),
    deleteListById: build.mutation({
      query: (id) => ({
        url: `/lists/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Lists'],
    }),
    postList: build.query({
      query: () => ({
        url: '/lists',
        method: 'post',
      }),
    }),
  }),
});

export const {
  useDeleteListByIdMutation,
  useFetchListByIdQuery,
  useLazyPostListQuery,
  useFetchListsQuery,
} = listsApi;
