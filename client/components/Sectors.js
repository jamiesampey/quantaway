import React from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';
import Sector from './Sector';

class Sectors extends React.Component {

  render() {
    return (
      <PanelGroup accordion id="accordion-controlled-example">
        <Panel eventKey='1'>
          <Panel.Heading>
            <Panel.Title toggle>Energy</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible><Sector name='energy'/></Panel.Body>
        </Panel>
        <Panel eventKey='2'>
          <Panel.Heading>
            <Panel.Title toggle>Healthcare</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible><Sector name='healthcare'/></Panel.Body>
        </Panel>
        <Panel eventKey='3'>
          <Panel.Heading>
            <Panel.Title toggle>Financial</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible><Sector name='financial'/></Panel.Body>
        </Panel>
      </PanelGroup>
    )
  }
}

export default Sectors