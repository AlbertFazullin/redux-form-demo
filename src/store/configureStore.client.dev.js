import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';
import { loadingBarMiddleware } from 'react-redux-loading-bar';

import rootSaga from '../sagas';

import rootReducer from '../redux';

const initialState = window.__INITIAL_STATE__;

const saga = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({});

const enhancer = composeEnhancers(
  applyMiddleware(saga, loadingBarMiddleware({
    promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE'],
  }))
);

const store = createStore(rootReducer, initialState, enhancer);

if (module.hot) {
  module.hot.accept('../redux', () =>
    store.replaceReducer(rootReducer)
  );
}

export default store;

saga.run(rootSaga);
