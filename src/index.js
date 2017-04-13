import ReactDOM from 'react-dom';
import React from 'react';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import store from './store';

import Root from './containers/root';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Root store={ store } routing={ routes }
    history={ history }
  />,
  document.getElementById('app')
);
