import React, { Component } from 'react';

import { Container, Row, Col, Button } from 'reactstrap';

export default class Order extends Component {
  render() {
    return (
      <div className='OrderInfo'>
        <h5 id='order'>Delivery Areas</h5>
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
      </div>
    );
  }
}
