import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

export default class About extends Component {
  render() {
    return (
      <div className='About'>
        <div id='about-body'>
          <Row>
            <Col xs='12' md='4' style={{ paddingTop: '12px' }}>
              <h4>location</h4>
              <span>
                735 E. 12th st. suite #411 <br /> Los Angeles, CA 90021
              </span>
            </Col>
            <Col xs='12' md='4' style={{ paddingTop: '12px' }}>
              <h4>hours</h4>
              <span>M-F 9:00am - 5:00pm</span> <br />
              Sat 7:30am - 12:30pm
            </Col>
            <Col xs='12' md='4' style={{ paddingTop: '12px' }}>
              <h4>contact</h4>
              <span>T: 213 746 4642</span> <br />
              <a href='#'>
                <i className='fab fa-facebook fa-2x' />
              </a>
              <a href='#'>
                <i className='fab fa-yelp fa-2x' />
              </a>
            </Col>
          </Row>
        </div>
        {/* <div id='deliver-body'>
          <h5 id='order'>Delivering Areas</h5>
          <Row>
            <Col xs='12' md='3'>
              <h6>Within 0.5 mile</h6> <strong>FREE</strong>
            </Col>
            <Col xs='12' md='3'>
              <h6>Within 1 mile</h6>
            </Col>
            <Col xs='12' md='3'>
              <h6>Within 3 mile</h6>
            </Col>
            <Col xs='12' md='3'>
              <h6>Over mile</h6>
            </Col>
          </Row>
        </div> */}
      </div>
    );
  }
}
