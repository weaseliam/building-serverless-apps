import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';

import App from './components/App';
import reducer from './reducers/appReducer';

import 'bootstrap/dist/css/bootstrap.css';

const history = createHistory();

const store = createStore(reducer, undefined, compose(
  applyMiddleware(routerMiddleware(history)),
  window.devToolsExtension ?
    window.devToolsExtension() :
    f => f
));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'));
