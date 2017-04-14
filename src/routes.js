import React from 'react';
import { Route, IndexRoute } from 'react-router';

import MainContainer from './containers/Main';
import StepOne from './containers/StepOne';
import StepTwo from './containers/StepTwo';

export default (
    <Route path="/">
      <IndexRoute component={ MainContainer } />
      <Route path="/step-1" component={ StepOne } />
      <Route path="/step-2" component={ StepTwo } />
    </Route>
);
