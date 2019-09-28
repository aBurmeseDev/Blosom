import React, { Component } from 'react';

import { Row, Col } from 'reactstrap';

import img1 from '../menu_items/Avocado Roll.jpg';

export default class Gallery extends Component {
  render() {
    return (
      <div className='Gallery'>
        <div id='gallery-body'>
          <Row>
            <Col xs='12' md='2'>
              <img src={img1} className='gallery-img' />
            </Col>
            <Col xs='12' md='2'>
              <img src={img1} className='gallery-img' />
            </Col>
            <Col xs='12' md='2'>
              <img src={img1} className='gallery-img' />
            </Col>
            <Col xs='12' md='2'>
              <img src={img1} className='gallery-img' />
            </Col>
            <Col xs='12' md='2'>
              <img src={img1} className='gallery-img' />
            </Col>
            <Col xs='12' md='2'>
              <img src={img1} className='gallery-img' />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
