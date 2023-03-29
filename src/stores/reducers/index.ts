import { combineReducers } from 'redux';

import { todoReducer } from './todo-reducers';

const rootReducer = combineReducers({
  todoStore: todoReducer,
});
export type TRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
