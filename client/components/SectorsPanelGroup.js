import React from 'react';
import { PanelGroup } from 'react-bootstrap';
import Sector from './SectorPanel';

class SectorsPanelGroup extends React.Component {

  componentWillMount() {
    this.setState({
      sectorNames: ['energy', 'healthcare', 'financial']
    });
  }

  render() {
    return (
      <PanelGroup accordion id="accordion-controlled-example">
        {
          this.state.sectorNames.map((sectorName, i) => {
            return (
              <Sector name={sectorName} key={i}/>
            )
          })
        }
      </PanelGroup>
    )
  }
}

export default SectorsPanelGroup