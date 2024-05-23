import axios, { AxiosResponse } from 'axios';
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getTodosErrorAction, getTodosSuccessAction } from './todos.slice';
import { GET_ALL_TODOS, TTodo } from './todos.types';

function* fetchTodosSaga(): SagaIterator<void> {
  // console.log({ env: process.env });

  try {
    const response: AxiosResponse<TTodo[]> = yield call(() =>
      // axios.get('https://jsonplaceholder.typicode.com/todos')
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/todos`)
    );
    yield put(getTodosSuccessAction(response.data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(getTodosErrorAction(error.message));
    } else {
      // console.log('Unexpected error', error);
    }
  }
}

export function* watchGetTodos() {
  yield takeLatest(GET_ALL_TODOS, fetchTodosSaga);
}
