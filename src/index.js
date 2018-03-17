import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { Provider } from 'react-redux';
import { GET_TODOS_FROM_SERVICE } from './actions/async-actions';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);


store.dispatch({type: GET_TODOS_FROM_SERVICE});


registerServiceWorker();
