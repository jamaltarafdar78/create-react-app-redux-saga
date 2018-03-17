import {
    all,
    call,
    put, 
    takeEvery,
    throttle
} from 'redux-saga/effects';

import { delay } from 'redux-saga';
import { getTodos } from './services/todo-services';
import { loadTodos, updateCurrent } from './actions/sync-actions';
import * as AsyncActions from './actions/async-actions';

export function* getTodosFromApi() {
    const todos = yield call(getTodos);

    console.log(`recieved ${JSON.stringify(todos)}`);

    return yield put(loadTodos(todos));
}

export function* retryGetTodosAfter5Secs(){
    yield call(delay, 5000);

    console.log('retrying to get Todos!');
    yield call(getTodosFromApi);
}

export function* getTodosWithRetry(){
    try {
        console.log('trying to get Todos!');
        yield call(getTodosFromApi);
    }
    catch(e) {
        console.log('failed to get Todos, retrying in 5secs!');
        yield call(retryGetTodosAfter5Secs);
    }
}

function* updateCurrentReducer({payload}){
    yield put(updateCurrent(payload))
}

function* watchUpdateCurrentThrottled() {
    console.log('watching for UPDATE_CURRENT_THROTTLED');

    yield throttle(
        2000,
        AsyncActions.UPDATE_CURRENT_THROTTLED,
        updateCurrentReducer
    )   
}

function* watchGetTodosFromService() {
    console.log('watching for GET_TODOS_FROM_SERVICE')
    yield takeEvery(
        AsyncActions.GET_TODOS_FROM_SERVICE, 
        getTodosWithRetry
    );
}

function* helloSaga() {
    console.info('Saga middleware running!');
}

export default function* sagas() {
    yield all([
        helloSaga(),
        watchGetTodosFromService(),
        watchUpdateCurrentThrottled()
    ])
}