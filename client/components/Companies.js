import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sectors from './SectorsPanelGroup';
import Company from './Company';

const Companies = () => (
  <Switch>
    <Route path='/companies/:symbol' component={Company} />
    <Route path='/' component={Sectors} />
  </Switch>
);

export default Companies