import React from 'react';
import { Table, Panel } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class SectorPanel extends React.Component {

  componentWillMount() {
    this.setState({
      companies: []
    });
  }

  componentDidMount() {
    fetch(`/companies/${this.props.sectorName}`)
      .then(res => res.json())
      .then(data => {
        this.setState({companies: data});
      });
  }

  render() {
    return (
      <Panel eventKey={this.props.key}>
        <Panel.Heading>
          <Panel.Title toggle>
            {`${this.props.sectorDisplayName} -- 5-day: ${this.props.fiveDayPerf}, 3-month: ${this.props.threeMonthPerf}, 1-year: ${this.props.oneYearPerf}`}
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
                    <td style={{width: '99%'}}>{co.name}</td>
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