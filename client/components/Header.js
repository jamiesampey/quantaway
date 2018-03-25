import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = () => (
  <header>
    <Navbar fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/'>QuantAway</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1}>
          <Link to='/positions'>Positions</Link>
        </NavItem>
        <NavItem eventKey={2}>
          <Link to='/backtest'>Back Test</Link>
        </NavItem>
        <NavItem eventKey={3}>
          <Link to='/companies'>Companies</Link>
        </NavItem>
      </Nav>
    </Navbar>
  </header>
);

export default Header