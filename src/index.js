import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    , document.getElementById('root'));
