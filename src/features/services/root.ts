import {fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:3000';
export const axiosBaseQuery = fetchBaseQuery({baseUrl});

export default axiosBaseQuery;
