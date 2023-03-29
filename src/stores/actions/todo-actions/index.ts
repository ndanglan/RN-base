import { TFetchSingleTodoPayload, TTodo } from '@interfaces/todo-interfaces';
import { ETodoActions } from './constants';
import { TFetchSingleTodoAction } from './types';

export const fetchSingleTodoAction = (payload: TFetchSingleTodoPayload, cb?: () => void): TFetchSingleTodoAction => {
  return {
    type: ETodoActions.FETCH_SINGLE_TODO,
    payload,
    cb,
  };
};

export const fetchSingleTodoRequestAction = () => {
  return {
    type: ETodoActions.FETCH_SINGLE_TODO_REQUEST,
  };
};

export const fetchSingleTodoSuccessAction = (payload: TTodo) => {
  return {
    type: ETodoActions.FETCH_SINGLE_TODO_SUCCESS,
    payload,
  };
};

export const fetchSingleTodoFailureAction = (payload: any) => {
  return {
    type: ETodoActions.FETCH_SINGLE_TODO_FAILURE,
    payload,
  };
};
