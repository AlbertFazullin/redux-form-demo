import React from 'react';
import { Route, IndexRoute } from 'react-router';

import MainContainer from './containers/Main';

export default (
    <Route path="/">
      <IndexRoute component={ MainContainer } />
    </Route>
);
