import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './_reducers/applicationContext';

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store = {createStoreWithMiddleWare(reducers)}>
        <App />
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();
