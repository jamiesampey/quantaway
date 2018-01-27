import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className='navbar navbar-toggleable-md navbar-dark bg-faded'>
      <Link to='/' className='navbar-brand'>QuantAway</Link>
      <div className='navbar-nav mr-auto'>
        <Link className='nav-item nav-link' to='/positions'>Positions</Link>
        <Link className='nav-item nav-link' to='/backtest'>Back Test</Link>
      </div>
    </nav>
  </header>
);

export default Header