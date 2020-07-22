import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const addPitcher = (
  state = [
    {
      pitcherList: [
        'Maud Nelson',
        'Ila Borders',
        'Don Newcombe',
        'CC Sabathia',
      ],
      newPitcher: '',
    },
  ],
  action
) => {
  if (action.type === 'ADD_PITCHER') {
    return [
      ...state,
      {
        pitcherList: action.payload.pitcherList,
        newPitcher: action.payload.newPitcher,
      },
    ];
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({ addPitcher }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
