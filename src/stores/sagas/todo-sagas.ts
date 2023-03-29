import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import { ETodoActions } from '../actions/todo-actions/constants';
import { TFetchSingleTodoAction } from '../actions/todo-actions/types';
import {
  fetchSingleTodoFailureAction,
  fetchSingleTodoRequestAction,
  fetchSingleTodoSuccessAction,
} from '../actions/todo-actions';
import { TTodo } from '@interfaces/todo-interfaces';
import { getSingleTodo } from '@services/todo-services';

function* fetchSingleTodoSaga({ payload, cb }: TFetchSingleTodoAction) {
  try {
    yield put(fetchSingleTodoRequestAction());
    const response: TTodo = yield call(getSingleTodo, payload);

    yield put(fetchSingleTodoSuccessAction(response));
    cb?.(response);
  } catch (error) {
    yield put(fetchSingleTodoFailureAction(error));
  }
}

function* watchOnTodo() {
  yield takeLatest(ETodoActions.FETCH_SINGLE_TODO, fetchSingleTodoSaga);
}

export default function* todoSaga() {
  yield all([fork(watchOnTodo)]);
}
