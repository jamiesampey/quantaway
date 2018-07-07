import React from 'react';
import { Table, Panel } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class Sector extends React.Component {

  componentWillMount() {
    this.setState({
      companies: []
    });

    fetch(`/api/companies/${this.props.sectorName}`)
      .then(res => res.json())
      .then(data => {
        this.setState({companies: data});
      });
  }

  colorizedPerfStat(stat) {
    if (stat) {
      let statColor = parseInt(stat.replace('%', '')) >= 0 ? 'green' : 'red';
      return (<span style={{color: statColor}}>{stat}</span>);
    } else {
      return "";
    }
  }

  render() {
    return (
      <Panel eventKey={this.props.eventKey}>
        <Panel.Heading style={{padding: '0 15px 0 15px'}}>
          <Panel.Title toggle>
            <Table style={{background: 'transparent', margin: '0'}}>
              <thead>
                <tr>
                  <td style={{width: '300px'}}>{this.props.sectorDisplayName}</td>
                  <td style={{width: '150px', float: 'left', whiteSpace: 'nowrap'}}>5-day: {this.colorizedPerfStat(this.props.fiveDayPerf)}</td>
                  <td style={{width: '150px', float: 'left', whiteSpace: 'nowrap'}}>3-month: {this.colorizedPerfStat(this.props.threeMonthPerf)}</td>
                  <td style={{width: '150px', float: 'left', whiteSpace: 'nowrap'}}>1-year: {this.colorizedPerfStat(this.props.oneYearPerf)}</td>
                </tr>
              </thead>
            </Table>
          </Panel.Title>
        </Panel.Heading>
        <Panel.Body collapsible style={{paddingTop: 0, paddingBottom: 0, paddingRight: 0}}>
          <Table striped hover style={{margin: 0}}>
            <tbody style={{display: 'block', height: '200px', overflowY: 'auto'}}>
            {
              this.state.companies.map((co, i) => {
                return (
                  <tr key={i}>
                    <td><Link to={`/companies/${co.symbol}`}>{co.symbol}</Link></td>
                    <td style={{whiteSpace: 'nowrap'}}><Link to={`/companies/${co.symbol}`}>{co.company}</Link></td>
                    <td style={{whiteSpace: 'nowrap', width: '99%'}}>{co.industry}</td>
                  </tr>
                );
              })
            }
            </tbody>
          </Table>
        </Panel.Body>
      </Panel>
    )
  }
}