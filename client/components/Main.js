import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Positions from './Positions';
import BackTest from './BackTest';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Positions}/>
      <Route path='/positions' component={Positions}/>
      <Route exact path='/backtest' component={BackTest}/>
    </Switch>
  </main>
);

export default Main