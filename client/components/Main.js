import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Companies from './Companies';
import BackTest from './BackTest';
import Strategies from './Strategies';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Strategies}/>
      <Route exact path='/strategies' component={Strategies}/>
      <Route exact path='/backtest' component={BackTest}/>
      <Route path='/companies' component={Companies}/>
    </Switch>
  </main>
);

export default Main