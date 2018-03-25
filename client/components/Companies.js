import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SectorsPanelGroup from './SectorsPanelGroup';
import Company from './Company';

const Companies = () => (
  <Switch>
    <Route path='/companies/:symbol' component={Company} />
    <Route path='/' component={SectorsPanelGroup} />
  </Switch>
);

export default Companies