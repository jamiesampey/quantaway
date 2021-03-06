import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sectors from './Sectors';
import Company from './Company';

const CompaniesRoute = () => (
  <Switch>
    <Route path='/companies/:symbol' component={Company} />
    <Route path='/' component={Sectors} />
  </Switch>
);

export default CompaniesRoute