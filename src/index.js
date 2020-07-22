import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const addPitcher = (
  state = ['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia'],

  action
) => {
  if (action.type === 'ADD_PITCHER') {
    return [
      ...state,
      {
        pitcherList: action.payload.pitcherList,
      },
    ];
  }
  return state;
};

const addCatcher = (
  state = ['Roy Campanella', 'Elston Howard', 'Kenji Jojima'],

  action
) => {
  if (action.type === 'ADD_CATCHER') {
    return [
      ...state,
      {
        catcherList: action.payload.catcherList,
      },
    ];
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({ addPitcher, addCatcher }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
