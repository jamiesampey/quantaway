import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class Sector extends React.Component {

  componentWillMount() {
    this.setState({
      companies: []
    });
  }

  componentDidMount() {
    fetch(`/companies/${this.props.name}`)
      .then(res => res.json())
      .then(data => {
        this.setState({companies: data});
      });
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>{this.props.name}</th>
          </tr>
        </thead>
        <tbody>
          <Table striped hover>
            <thead>
            <tr>
              <th>Symbol</th>
              <th>Name</th>
            </tr>
            </thead>
            <tbody>
            {
              this.state.companies.map((co, i) => {
                return (
                  <tr>
                    <td><Link to={`/companies/${co.symbol}`}>{co.symbol}</Link></td>
                    <td>{co.name}</td>
                  </tr>
                );
              })
            }
            </tbody>
          </Table>
        </tbody>
      </Table>
    )
  }
}