import { todoReducer } from './todos.slice';
import { TTodosState } from './todos.types';

export type StateType = {
  todos: TTodosState;
};

const rootReducers = {
  todos: todoReducer,
};

export default rootReducers;
