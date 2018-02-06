import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Companies from './Companies';
import BackTest from './BackTest';
import Positions from './Positions';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Positions}/>
      <Route exact path='/positions' component={Positions}/>
      <Route exact path='/backtest' component={BackTest}/>
      <Route path='/companies' component={Companies}/>
    </Switch>
  </main>
);

export default Main