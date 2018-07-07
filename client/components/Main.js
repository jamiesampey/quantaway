import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CompaniesRoute from './CompaniesRoute';
import BackTest from './BackTest';
import StrategiesRoute from './StrategiesRoute';

const Main = () => (
  <main>
    <Switch>
      <Route path='/strategies' component={StrategiesRoute}/>
      <Route path='/backtest' component={BackTest}/>
      <Route path='/companies' component={CompaniesRoute}/>
    </Switch>
  </main>
);

export default Main