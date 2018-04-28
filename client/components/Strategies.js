import React from 'react';
import {Route, Switch} from 'react-router-dom';
import StrategiesPanelGroup from './StrategiesPanelGroup';
import Strategy from './Strategy';

const Strategies = () => (
  <Switch>
    <Route path='/strategies/:name' component={Strategy} />
    <Route path='/' component={StrategiesPanelGroup} />
  </Switch>
);

export default Strategies

