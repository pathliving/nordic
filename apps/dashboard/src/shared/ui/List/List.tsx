import { TTodo, TTodosReducer } from '@/app/todos.types';
import { ReactNode } from 'react';

export default function List({ data }: TTodosReducer): ReactNode {
  return (
    <ul>
      {data?.map((todo: TTodo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
