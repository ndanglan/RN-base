import { Text, View } from 'react-native';
import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TFetchSingleTodoPayload } from '@interfaces/todo-interfaces';
import { fetchSingleTodoAction } from '@stores/actions/todo-actions';
import { TRootState } from '@stores/reducers';
import { createLoadingSelector } from '@stores/helpers';
import { ETodoActions } from '@stores/actions/todo-actions/constants';

const Home = () => {
  const dispatch = useDispatch();
  const { todo } = useSelector((state: TRootState) => state.todoStore);
  const todoLoading = useSelector((state: TRootState) => createLoadingSelector(state, ETodoActions.FETCH_SINGLE_TODO));
  const fetchTodo = useCallback(
    (payload: TFetchSingleTodoPayload) => {
      dispatch(fetchSingleTodoAction(payload));
    },
    [dispatch],
  );

  useEffect(() => {
    fetchTodo({ id: 1 });
  }, [fetchTodo]);

  return <View>{todoLoading ? <Text>Loading</Text> : <Text>{JSON.stringify(todo)}</Text>}</View>;
};

export default Home;
