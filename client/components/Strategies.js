import React from 'react';
import StrategiesPanelGroup from './StrategiesPanelGroup';
import Strategy from './Strategy';
import {Route, Switch} from 'react-router';

const Strategies = () => (
  <Switch>
    <Route path='/strategies/:stratName' component={Strategy}/>
    <Route path='/' component={StrategiesPanelGroup}/>
  </Switch>
);

export default Strategies

