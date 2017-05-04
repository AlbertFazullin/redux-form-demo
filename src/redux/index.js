import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth';
import user from './userDuck';
import common from './common';
import { reducer as formReducer } from 'redux-form';
import { loadingBarReducer } from 'react-redux-loading-bar';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  loadingBar: loadingBarReducer,

  auth: combineReducers({ ...auth }),

  gh: combineReducers({ ...user }),

  common: combineReducers({ ...common }),
});
