import React from 'react';
import { PanelGroup } from 'react-bootstrap';
import SectorPanel from './SectorPanel';

import { SectorNames } from '../../common/Constants';

class SectorsPanelGroup extends React.Component {

  componentWillMount() {
    let initSectorPerfArrays = {};
    SectorNames.forEach((sectorName) => {
      initSectorPerfArrays[sectorName] = [];
    });

    this.setState({
      sectorPerfStats: initSectorPerfArrays,
    });
  }

  componentDidMount() {
    fetch('/companies/sectors')
      .then(res => res.json())
      .then(data => {
        let updatedSectorPerfStats = this.state.sectorPerfStats;

        for (var prop in data) {
          SectorNames.forEach((sectorName) => {
            updatedSectorPerfStats[sectorName].push(data[prop][this.sectorDisplayName(sectorName)]);
          });
        }

        this.setState({
          sectorPerfStats: updatedSectorPerfStats
        });
      });
  }

  sectorDisplayName(sectorName) {
    return sectorName.split('-').map((part) => {
      return `${part.charAt(0).toUpperCase()}${part.slice(1)}`
    }).join(' ');
  }

  render() {
    return (
      <PanelGroup accordion id='sectors-panel-group' defaultActiveKey='0'>
        {
          SectorNames.map((sectorName, i) => {
            return (
              <SectorPanel
                key={i}
                eventKey={i.toString()}
                sectorName={sectorName}
                sectorDisplayName={this.sectorDisplayName(sectorName)}
                fiveDayPerf={this.state.sectorPerfStats[sectorName][0]}
                threeMonthPerf={this.state.sectorPerfStats[sectorName][1]}
                oneYearPerf={this.state.sectorPerfStats[sectorName][2]}
              />
            )
          })
        }
      </PanelGroup>
    )
  }
}

export default SectorsPanelGroup