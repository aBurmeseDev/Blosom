import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

export default class About extends Component {
  render() {
    return (
      <div className='About'>
        <div id='about-body'>
          <Row>
            <Col xs='12' md='4' style={{ paddingTop: '12px' }}>
              <h5>location</h5>
              <span>
                735 E. 12th st. suite #411 <br /> Los Angeles, CA 90021
              </span>
            </Col>
            <Col xs='12' md='4' style={{ paddingTop: '12px' }}>
              <h5>hours</h5>
              <span>M-F 9:00am - 5:00pm</span> <br />
              Sat 7:30am - 12:30pm
            </Col>
            <Col xs='12' md='4' style={{ paddingTop: '12px' }}>
              <h5>contact</h5>
              <span>T: 213 746 4642</span> <br />
              <a href='https://www.facebook.com/pages/category/Fast-Food-Restaurant/Blosom-Bento-194429073910986/'>
                <i className='fab fa-facebook fa-2x' />
              </a>
              <a href='https://www.yelp.com/biz/blosom-bento-los-angeles'>
                <i className='fab fa-yelp fa-2x' />
              </a>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
