import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Sector from './Sector';

const Sectors = () => (
  <div>
    <h2>Companies by Sector</h2>
    <Grid>
      <Row className="show-grid">
        <Col>
          <Sector name='energy'/>
        </Col>
        <Col>
          <Sector name='financial'/>
        </Col>
        <Col>
          <Sector name='healthcare'/>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Sectors