import { TTodo } from '@interfaces/todo-interfaces';
import { ETodoActions } from '../actions/todo-actions/constants';

type TTodoState = {
  todo?: TTodo;
};

const initialState = {
  todo: undefined,
};

export const todoReducer = (state = initialState, action: { type: string; payload: any }): TTodoState => {
  switch (action.type) {
    case ETodoActions.FETCH_SINGLE_TODO_SUCCESS:
      return {
        ...state,
        todo: action.payload,
      };
    default:
      return state;
  }
};
