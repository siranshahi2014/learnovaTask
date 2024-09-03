import {createApi, retry} from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './root';

const baseUrl = 'http://localhost:3000';

const baseQuery = retry(
  axiosBaseQuery({
    baseUrl,
  }),
  {
    maxRetries: 1,
  },
);

export const symboleApi = createApi({
  reducerPath: 'symbolApi',
  baseQuery,
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
