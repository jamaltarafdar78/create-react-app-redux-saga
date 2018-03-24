import {
    applyMiddleware,
    combineReducers,
    createStore } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import sagas from './saga';
import {composeWithDevTools} from 'redux-devtools-extension';

const aggReducer = combineReducers(reducers);

export const sagaMiddleware = createSagaMiddleware();

export default createStore(
    aggReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )  
);

sagaMiddleware.run(sagas);

