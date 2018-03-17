import sinon from 'sinon';
import * as Services from '../services/todo-services';
import { runSaga } from 'redux-saga';
import {getTodosFromApi} from '.';
import {LOAD_TODOS} from '../actions/sync-actions';
import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers/todo';
import createSagaMiddleware from 'redux-saga';

test('test SUCCESSFUL service call to getTodosFromApi ULTIMATELY causes successful update to state', async () => {
    const todos = ['todo1', 'todo2'];

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        reducer,
        applyMiddleware(sagaMiddleware)
    );
    
    sinon.stub(Services, 'getTodos').callsFake(() => todos);

    const saga = await runSaga(
        {
            dispatch: action  => store.dispatch(action),
            getState: () => store.getState()
        },
        getTodosFromApi
    );

    expect(store.getState()).toEqual(
        {
            todos,
            currentTodo: ''
        }
    )
})
