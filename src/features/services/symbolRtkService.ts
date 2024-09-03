import {createApi} from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './root';

export const symboleApi = createApi({
  reducerPath: 'symbolApi',
  baseQuery: axiosBaseQuery,
  tagTypes: ['Symbols'],
  endpoints: builder => ({
    getSymbols: builder.query<any, void>({
      query: () => ({
        url: `/symbols`,
        method: 'GET',
      }),
      providesTags: ['Symbols'],
      transformResponse: (responseData: any) => responseData,
    }),
  }),
});

export const {useGetSymbolsQuery} = symboleApi;
