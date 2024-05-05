import qs from 'qs';

import { publicApi } from '@/core/utils/axios';

type ExampleData = {
  id: string;
  name: string;
};

type CreateExamplePayLoad = {
  name: string;
};

type ExamplePaginationPayload = {
  limit?: number;
  page?: number;
  sort?: string;
  filter?: string;
  search?: string;
};

const examplePrefix = '/example';

export const createExample = (
  data: CreateExamplePayLoad,
): ApiResponse<ApiSuccessData<ExampleData>> =>
  api.post(`${examplePrefix}/`, data);

export const getExampleById = (
  id: string,
): ApiResponse<ApiSuccessData<ExampleData>> =>
  api.get(`${examplePrefix}/${id}`);

// get with pagination
export const getExamples = (
  data: ExamplePaginationPayload,
): ApiResponse<ApiSuccessPaginatedData<ExampleData>> =>
  api.get(`${examplePrefix}?${qs.stringify(data)}`);
