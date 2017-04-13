import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import filters from './filters';
import jobs from './jobs';
import auth from './auth';
import common from './common';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,

  auth: combineReducers({ ...auth }),

  common: combineReducers({ ...common }),

  jobs: combineReducers({ ...jobs, ...filters }),
});
