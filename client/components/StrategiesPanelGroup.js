import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class StrategiesPanelGroup extends React.Component {
  render() {
    return (
      <LinkContainer to='/strategies/new'>
        <Button bsStyle='primary'>New Strategy</Button>
      </LinkContainer>
    )
  }
}