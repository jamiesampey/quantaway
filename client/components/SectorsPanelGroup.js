import React from 'react';
import { PanelGroup } from 'react-bootstrap';
import SectorPanel from './SectorPanel';

class SectorsPanelGroup extends React.Component {

  componentWillMount() {
    this.setState({
      sectorNames: ['energy', 'healthcare', 'financial']
    });
  }

  render() {
    return (
      <PanelGroup accordion id='sectors-panel-group'>
        {
          this.state.sectorNames.map((sectorName, i) => {
            return (
              <SectorPanel sectorName={sectorName} key={i}/>
            )
          })
        }
      </PanelGroup>
    )
  }
}

export default SectorsPanelGroup