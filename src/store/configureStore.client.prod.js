import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

import rootReducer from '../reducers';

const initialState = window.__INITIAL_STATE__;

const saga = createSagaMiddleware();

const enhancer = compose(
    applyMiddleware(saga)
);

const store = createStore(rootReducer, initialState, enhancer);

export default store;

saga.run(rootSaga);
