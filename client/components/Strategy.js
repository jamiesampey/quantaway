import React from 'react';
import {Col, ControlLabel, Form, FormControl, FormGroup} from 'react-bootstrap';

export default class Strategy extends React.Component {

  componentWillMount() {
    this.stratName = this.props.match.params.name;
  }

  render() {
    return (
      <Form horizontal>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Name
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeHolder='Enter strategy name' />
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
