import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import { GET_ALL_TODOS, TODOS, TTodo, TTodosState } from './todos.types';

const todosInitialState: TTodosState = {
  todos: {
    data: null,
    isLoading: false,
    errors: '',
  },
};

export const todosSlice = createSlice({
  name: TODOS,
  initialState: todosInitialState,
  reducers: {
    getTodoAction: (state) => {
      state.todos.isLoading = true;
      state.todos.errors = '';
    },
    getTodosSuccessAction: (
      state,
      { payload: todos }: PayloadAction<TTodo[]>
    ) => {
      state.todos.isLoading = false;
      state.todos.data = todos;
    },
    getTodosErrorAction: (state, { payload: error }: PayloadAction<string>) => {
      state.todos.isLoading = false;
      state.todos.errors = error;
    },
  },
});

export const getTodosAction = createAction(GET_ALL_TODOS);
export const { getTodoAction, getTodosSuccessAction, getTodosErrorAction } =
  todosSlice.actions;
// export default todosSlice.reducer;
export const todoReducer = todosSlice.reducer;

// TODO: remove
// export function todoReducer(state = todosInitialState, action) {
//   switch (action.type) {
//     case 'getTodoAction':
//       console.log('111');
//       return {
//         ...state,
//       };
//     case 'getTodosSuccessAction':
//       console.log('222');
//       return {
//         ...state,
//       };
//     case 'getTodosErrorAction':
//       console.log('333');
//       return {
//         ...state,
//       };
//     default:
//       return state;
//   }
// }
