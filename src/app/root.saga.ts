import { all } from 'redux-saga/effects';
import { watchGetTodos } from './todos.saga';

export default function* rootSaga() {
  yield all([
    // fork(watchGetTodos),
    watchGetTodos(),
  ]);
}
