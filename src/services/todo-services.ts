import { AxiosResponse } from 'axios';

import { ApiClient } from './api-clients';
import { TFetchSingleTodoPayload, TTodo } from '@interfaces/todo-interfaces';

export const getSingleTodo = async (payload: TFetchSingleTodoPayload) => {
  const response: AxiosResponse<TTodo> = await ApiClient.get(`/todos/${payload.id}`);
  return response.data;
};
