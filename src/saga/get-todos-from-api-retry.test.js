import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import * as Services from '../services/todo-services';
import { getTodosWithRetry, getTodosFromApi, retryGetTodosAfter5Secs} from '.';
import { delay } from 'redux-saga';
import {call} from 'redux-saga/effects';

test('getTodosWithRetry retries to get todos after 5 secs if error from service', async () => {
    const error = new Error("getTodos failed!");

    return expectSaga( getTodosWithRetry )
        .provide([
            [   call(getTodosFromApi), 
                throwError(error)
            ]
        ])
        .call(retryGetTodosAfter5Secs)
        .silentRun();
});

test('getTodosWithRetry does NOT retry to get todos if success from service', async () => {
    const todos = ["todos1", "todos2"];

    return expectSaga( getTodosWithRetry )
        .provide([
            [   call(getTodosFromApi), 
                todos
            ]
        ])
        .not.call(retryGetTodosAfter5Secs)
        .silentRun();
});
