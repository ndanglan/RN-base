import { TFetchSingleTodoPayload, TTodo } from '@interfaces/todo-interfaces';
import { ETodoActions } from './constants';

export type TFetchSingleTodoAction = {
  type: ETodoActions.FETCH_SINGLE_TODO;
  payload: TFetchSingleTodoPayload;
  cb?: (payload: TTodo) => void;
};
