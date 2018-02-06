import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sectors from './Sectors';
import Company from './Company';

const Companies = () => (
  <div>
    <Switch>
      <Route path='/companies/:symbol' component={Company}></Route>
      <Route path='/' component={Sectors}></Route>
    </Switch>
  </div>
);

export default Companies