import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './userDuck';
import { reducer as formReducer } from 'redux-form';
import { loadingBarReducer } from 'react-redux-loading-bar';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  loadingBar: loadingBarReducer,

  gh: combineReducers({ ...user }),
});
