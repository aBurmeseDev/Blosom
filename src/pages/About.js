import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

export default class About extends Component {
  render() {
    return (
      <div className='About'>
        <div id='about-body' />
        <Row>
          <Col xs='12' md='4'>
            <h4>location</h4>
            <span>Santa Monica Blvd</span>
          </Col>
          <Col xs='12' md='4'>
            <h4>hours</h4>
            <span>M-F 11am-5pm</span>
          </Col>
          <Col xs='12' md='4'>
            <h4>contact</h4>
            <span>626-628-5356</span>
          </Col>
        </Row>
      </div>
    );
  }
}
