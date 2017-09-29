import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import thunk from 'redux-thunk';

import App from './components/App';
import reducer from './reducer';

import 'bootstrap/dist/css/bootstrap.css';

const history = createHistory();

const store = createStore(reducer, undefined, compose(
  applyMiddleware(
    routerMiddleware(history),
    thunk
  ),
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
