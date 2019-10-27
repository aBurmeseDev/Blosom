import React, { Component } from 'react';

import { Row, Col, Button } from 'reactstrap';
import grubhub from '../logos/grubhub.png';
import chownow from '../logos/chownow.png';
import ubereats from '../logos/ubereats.png';
import doordash from '../logos/doordash.png';
export default class Order extends Component {
  render() {
    return (
      <div className='OrderInfo'>
        <div id='order-body'>
          <h3>order online</h3>
          <div style={{ height: '24px' }} />

          <Row>
            <Col xs='12' md='3'>
              <Button
                className='orderBtn'
                outline
                color='light'
                href='https://www.ubereats.com/en-US/'
              >
                <img
                  src={ubereats}
                  alt='order UberEats'
                  style={{ height: '1rem' }}
                />
              </Button>
            </Col>
            <Col xs='12' md='3'>
              <Button
                className='orderBtn'
                outline
                color='light'
                href='https://get.chownow.com/'
              >
                <img
                  src={chownow}
                  alt='order ChowNow'
                  style={{ height: '2.95rem' }}
                />
              </Button>
            </Col>
            <Col xs='12' md='3'>
              <Button
                className='orderBtn'
                outline
                color='light'
                href='https://www.grubhub.com/'
              >
                <img
                  src={grubhub}
                  alt='order GrubHub'
                  style={{ height: '2.95rem' }}
                />
              </Button>
            </Col>
            <Col xs='12' md='3'>
              <Button
                className='orderBtn'
                outline
                color='light'
                href='https://www.doordash.com/'
              >
                <img
                  src={doordash}
                  alt='order DoorDash'
                  style={{ height: '2rem' }}
                />
              </Button>
            </Col>
            {/* <Col xs='12' md='3'>
              <Button outline color='info'>
                DOORDASH
              </Button>
            </Col> */}
          </Row>
        </div>
        <div id='deliver-body'>
          <h3>delivering areas</h3>
          <Row>
            <Col xs='12' md='2' />
            <Col xs='12' md='2'>
              <h6>Within 0.5 mile</h6> <strong>FREE</strong>
            </Col>
            <Col xs='12' md='2'>
              <h6>Within 1 mile</h6>
              <p>Free w/ MInimum Purchase over $30 or $1.50 under $30</p>
            </Col>
            <Col xs='12' md='2'>
              <h6>Within 3 mile</h6>
              <p>$3 w/ MInimum Purchase over $35</p>
            </Col>
            <Col xs='12' md='2'>
              <h6>Over 3 mile</h6>
              <p>Please call us and inquire within.</p>
            </Col>
            <Col xs='12' md='2' />
          </Row>
        </div>
      </div>
    );
  }
}
