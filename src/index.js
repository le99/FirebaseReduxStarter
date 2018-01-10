import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import firebase from 'firebase/app';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

import {
  AVAILABLE_FEATURES
} from './actions/types';
import App from './components/App';

const USE_REDUX_DEV_TOOLS = true;

let store;
if(USE_REDUX_DEV_TOOLS){
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(reducers, {},
    composeEnhancers(
      applyMiddleware(reduxThunk)
  ));
}
else {
  store = createStore(reducers, {}, applyMiddleware(reduxThunk));
}

fetch('/__/firebase/init.json').then(response => {
  firebase.initializeApp(response.json());
  let app = firebase.app();
  let features = ['auth', 'database', 'messaging', 'storage']
    .filter(feature => typeof app[feature] === 'function');

  store.dispatch({type: AVAILABLE_FEATURES ,payload: features})
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('.container')
  );
});
