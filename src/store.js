import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/todo';
import createSagaMiddleware from 'redux-saga';
import sagas from './saga';

export const sagaMiddleware = createSagaMiddleware();

export default createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);

