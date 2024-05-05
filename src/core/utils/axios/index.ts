import type { AxiosError } from 'axios';
import axios from 'axios';


const baseURL = 'https://api.coingecko.com/api/v3';

export const handleError = (error: AxiosError) => {
  const errorObjects: {
    error: string | string[];
    status: number;
    message: string;
  } = { status: -1, message: '', error: '' };
  if (error.response?.data) {
    const data: any = error.response?.data || {
      statusCode: 500,
      message: 'error',
      error: 'Get an error',
    };
    errorObjects.status = data.statusCode;
    errorObjects.message = data.message;
    errorObjects.error = data.error;
  } else {
    errorObjects.status = error.status || 500;
    errorObjects.message = error.message;
    errorObjects.error = error.message;
  }
  // Something happened in setting up the request that triggered an Error
  return errorObjects;
};

// for public api
export const publicApi = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'x-cg-demo-api-key': 'CG-wmQmhumArEsE3Ekw1PoGsyxi'
  },
});

publicApi.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => Promise.reject(handleError(error)),
);

