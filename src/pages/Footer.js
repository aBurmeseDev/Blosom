import React, { Component } from 'react';

import { Row, Col } from 'reactstrap';

export default class Foot extends Component {
  render() {
    return (
      <div className='Footer'>
        <div id='about-body'>
          <Row>
            <Col xs='12' md='4'>
              <h4>location</h4>
              <span>
                735 E. 12th st. suite #411 <br /> Los Angeles, CA 90021
              </span>
            </Col>
            <Col xs='12' md='4'>
              <h4>hours</h4>
              <span>M-F 9:00am - 5:00pm</span> <br />
              Sat 7:30am - 12:30pm
            </Col>
            <Col xs='12' md='4'>
              <h4>contact</h4>
              <span>T: 213 746 4642</span> <br />
              <a
                href='https://www.facebook.com/Blosom-Bento-194429073910986/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-facebook fa-2x' />
              </a>
              <a
                href='https://www.yelp.com/biz/blosom-bento-los-angeles'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-yelp fa-2x' />
              </a>
            </Col>
          </Row>
        </div>
        &copy; 2019 Blosom
      </div>
    );
  }
}
