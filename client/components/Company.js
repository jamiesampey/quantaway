import React from 'react';
import {Col, ControlLabel, Form, FormControl, FormGroup} from 'react-bootstrap';

export default class Company extends React.Component {

  componentWillMount() {
    this.symbol = this.props.match.params.symbol;
    console.log(`set this.symbol to ${this.symbol}`);
  }

  componentDidMount() {
    fetch(`/api/companies/${this.symbol}/perf`)
      .then(res => res.json())
      .then(data => {
        console.info(`got company data: ${JSON.stringify(data)}`);
      });
  }

  render() {
    return (
      <Form horizontal>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Company
          </Col>
          <Col sm={10}>
            <FormControl type="text" readOnly="readonly" value={this.symbol}/>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
