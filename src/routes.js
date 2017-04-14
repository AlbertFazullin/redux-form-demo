import React from 'react';
import { Route, IndexRoute } from 'react-router';

import MainContainer from './containers/Main';
import StepOne from './containers/StepOne';
import StepTwo from './containers/StepTwo';
import StepThree from './containers/StepThree';

export default (
    <Route path="/">
      <IndexRoute component={ MainContainer } />
      <Route path="/step-1" component={ StepOne } />
      <Route path="/step-2" component={ StepTwo } />
      <Route path="/step-3" component={ StepThree } />
    </Route>
);
