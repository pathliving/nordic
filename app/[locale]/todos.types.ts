export type TTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TTodosReducer = {
  data: TTodo[] | null;
  isLoading?: boolean;
  errors?: string;
};

export type TTodosState = {
  todos: TTodosReducer;
};

export const TODOS = 'todos';
export type TODOS = typeof TODOS;

export const GET_ALL_TODOS = `${TODOS}/getTodosAction`;
export type GET_ALL_TODOS = typeof GET_ALL_TODOS; // TODO: vscode can't show exports - https://github.com/microsoft/TypeScript/issues/37816
