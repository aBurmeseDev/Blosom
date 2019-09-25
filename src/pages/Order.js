import React, { Component } from 'react';

import { Row, Col, Button } from 'reactstrap';

export default class Order extends Component {
  render() {
    return (
      <div className='OrderInfo'>
        <div id='order-body'>
          <Row>
            <Col xs='12' md='4'>
              <Button outline color='info'>
                DOORDASH
              </Button>
            </Col>
            <Col xs='12' md='4'>
              <Button outline color='info'>
                ChowNow
              </Button>
            </Col>
            <Col xs='12' md='4'>
              <Button outline color='info' href='https://www.grubhub.com/'>
                GRUBHUB
              </Button>
            </Col>
          </Row>
        </div>
        <div id='deliver-body'>
          <h4 id='order'>Delivering Areas</h4>
          <Row>
            <Col xs='12' md='2' />
            <Col xs='12' md='2'>
              <h5>Within 0.5 mile</h5> <strong>FREE</strong>
            </Col>
            <Col xs='12' md='2'>
              <h5>Within 1 mile</h5>
              <p>Free w/ MInimum Purchase over $30 or $1.50 under $30</p>
            </Col>
            <Col xs='12' md='2'>
              <h5>Within 3 mile</h5>
              <p>$3 w/ MInimum Purchase over $35</p>
            </Col>
            <Col xs='12' md='2'>
              <h5>Over 3 mile</h5>
              <p>Please call us and inquire within.</p>
            </Col>
            <Col xs='12' md='2' />
          </Row>
        </div>
      </div>
    );
  }
}
