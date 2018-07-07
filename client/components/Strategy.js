import React from 'react';
import {Button, Col, ControlLabel, Form, FormControl, FormGroup} from 'react-bootstrap';

export default class Strategy extends React.Component {

  constructor() {
    super();
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.saveForm = this.saveForm.bind(this);
  }

  componentWillMount() {
    this.setState({
      name: this.props.match.params.name,
      description: '',
      entry: '',
      exit: '',
    });
  }

  handleFieldChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  saveForm(e) {
    console.log(`Saving strategy component state: ${JSON.stringify(this.state)}`);
  }

  render() {
    return (
      <Form horizontal>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Name
          </Col>
          <Col sm={10}>
            <FormControl
              id='name'
              type="text"
              placeholder='Enter strategy name'
              value={this.state.name}
              onChange={this.handleFieldChange}
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Description
          </Col>
          <Col sm={10}>
            <FormControl
              id='description'
              type="text"
              placeholder='Enter strategy description'
              value={this.state.description}
              onChange={this.handleFieldChange}
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Entry
          </Col>
          <Col sm={10}>
            <FormControl
              id='entry'
              type="text"
              placeholder='Enter entry conditions'
              value={this.state.entry}
              onChange={this.handleFieldChange}
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Exit
          </Col>
          <Col sm={10}>
            <FormControl
              id='exit'
              type="text"
              placeholder='Enter exit conditions'
              value={this.state.exit}
              onChange={this.handleFieldChange}
            />
          </Col>
        </FormGroup>
          <Button bsStyle='primary' onClick={this.saveForm}>Save</Button>
      </Form>
    );
  }
}
