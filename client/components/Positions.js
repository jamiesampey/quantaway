import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllPositions from './AllPositions';
import Position from './Position';

const Positions = () => (
  <div>
    <h2>Looking at positions</h2>
    <Switch>
      <Route path='/positions/:symbol' component={Position}></Route>
      <Route path='/' component={AllPositions}></Route>
    </Switch>
  </div>
);

export default Positions