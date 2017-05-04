import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth';
import user from './userDuck';
import common from './common';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,

  auth: combineReducers({ ...auth }),

  gh: combineReducers({ ...user }),

  common: combineReducers({ ...common }),
});
