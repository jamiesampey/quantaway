import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Strategies from './Strategies';
import Strategy from './Strategy';

const StrategiesRoute = () => (
  <Switch>
    <Route path='/strategies/:name' component={Strategy} />
    <Route path='/' component={Strategies} />
  </Switch>
);

export default StrategiesRoute

