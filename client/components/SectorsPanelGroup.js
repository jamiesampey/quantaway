import React from 'react';
import { PanelGroup } from 'react-bootstrap';
import SectorPanel from './SectorPanel';

class SectorsPanelGroup extends React.Component {

  constructor() {
    super();
    this.sectorNames = ['energy', 'health-care', 'financials'];
  }

  sectorDisplayName(sectorName) {
    return sectorName.split('-').map((part) => {
      return `${part.charAt(0).toUpperCase()}${part.slice(1)}`
    }).join(' ');
  }

  componentWillMount() {
    let initSectorPerfArrays = {};
    this.sectorNames.forEach((sectorName) => {
      initSectorPerfArrays[sectorName] = [];
    });

    this.setState({
      sectorPerfStats: initSectorPerfArrays
    });
  }

  componentDidMount() {
    fetch('/companies/sectors')
      .then(res => res.json())
      .then(data => {
        // console.info(`raw sectors response is: ${JSON.stringify(data)}`);
        let updatedSectorPerfStats = this.state.sectorPerfStats;

        for (var prop in data) {
          this.sectorNames.forEach((sectorName) => {
            console.info(`pushing perf stat data[${prop}][${this.sectorDisplayName(sectorName)}] = ${data[prop][this.sectorDisplayName(sectorName)]}`);
            updatedSectorPerfStats[sectorName].push(data[prop][this.sectorDisplayName(sectorName)]);
          });
        }

        console.info(`updating state with perf stats: \n${JSON.stringify(updatedSectorPerfStats)}`);

        this.setState({
          sectorPerfStats: updatedSectorPerfStats
        });
      });
  }

  render() {
    return (
      <PanelGroup accordion id='sectors-panel-group'>
        {
          this.sectorNames.map((sectorName, i) => {
            return (
              <SectorPanel
                key={i}
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