import {BaseQueryFn} from '@reduxjs/toolkit/query/react';
import axios, {AxiosRequestConfig, AxiosError} from 'axios';

const AxiosService = axios.create();

const axiosBaseQuery =
  (
    {baseUrl}: {baseUrl: string} = {baseUrl: ''},
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
      headers?: AxiosRequestConfig['headers'];
    },
    any,
    AxiosError
  > =>
  async ({url, method, data, params, headers}) => {
    try {
      const result = await AxiosService({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return {...result.data};
    } catch (axiosError) {
      return {axiosError};
    }
  };

export default axiosBaseQuery;
