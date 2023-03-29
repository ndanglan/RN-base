import { combineReducers } from 'redux';

import { todoReducer } from './todo-reducers';
import { loadingReducer } from './loading-reducers';

const rootReducer = combineReducers({
  todoStore: todoReducer,
  loadingStore: loadingReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
