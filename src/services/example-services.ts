import { AxiosResponse } from 'axios';
import { ApiClient } from './api-clients';
import { TTodo } from '../interfaces/common-interfaces';

export const getSingleTodo = async () => {
  const response: AxiosResponse<TTodo> = await ApiClient.get('/todos/1');
  return response.data;
};
