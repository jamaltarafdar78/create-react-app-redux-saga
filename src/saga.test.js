import sinon from 'sinon';
import * as Services from './services/todo-services';
import { runSaga } from 'redux-saga';
import {getTodosFromApi} from './saga';
import {LOAD_TODOS} from './actions/sync-actions';

test('test SUCCESSFUL service call to getTodos DISPATCHES synchronous LOAD_TODOS action', async () => {
    const dispatched = [];
    const todos = ['todo1', 'todo2'];
    
    sinon.stub(Services, 'getTodos').callsFake(() => todos);

    const saga = await runSaga(
        {
            dispatch: action  => dispatched.push(action)
        },
        getTodosFromApi
    );

    expect(dispatched).toEqual(
        [{type: LOAD_TODOS, payload: todos}]
    )
})
