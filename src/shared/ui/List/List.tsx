import { ReactNode } from 'react';
import { TTodo, TTodosReducer } from '../../../../app/[lang]/todos.types';

export default function List({ data }: TTodosReducer): ReactNode {
  return (
    <ul>{data?.map((todo: TTodo) => <li key={todo.id}>{todo.title}</li>)}</ul>
  );
}
