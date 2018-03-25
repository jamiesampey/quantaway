import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = () => (
  <header>
    <Navbar fluid>
      <Navbar.Header>
        <LinkContainer to='/'>
          <Navbar.Brand>QuantAway</Navbar.Brand>
        </LinkContainer>
      </Navbar.Header>
      <Nav>
        <LinkContainer to='/positions'>
          <NavItem eventKey={1}>Positions</NavItem>
        </LinkContainer>
        <LinkContainer to='/backtest'>
          <NavItem eventKey={2}>Back Test</NavItem>
        </LinkContainer>
        <LinkContainer to='/companies'>
          <NavItem eventKey={3}>Companies</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  </header>
);

export default Header