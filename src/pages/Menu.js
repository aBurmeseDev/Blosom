import React, { Component } from 'react';

import { Row, Col } from 'reactstrap';

export default class Menu extends Component {
  render() {
    return (
      <div className='Menu'>
        <div id='menu-body'>
          <h3>menu</h3>
          <div style={{ height: '24px' }} />
          <Row>
            <Col xs='12' md='3'>
              <h4>noodle</h4>
              <span>Zaru Soba</span> <br />
              <span>Udon Soup</span> <br />
              <span>Miso Ramen</span>
              <br />
              <span>Chashu Ramen</span>
              <br />
              <span>Shrimp Miso Soup</span>
              <br />
              <span>Seafood Udon Soup</span>
            </Col>
            <Col xs='12' md='3'>
              <h4>sushi & sashimi</h4>
              <span>Zaru Soba</span> <br />
              <span>Udon Soup</span> <br />
              <span>Miso Ramen</span>
              <br />
              <span>Chashu Ramen</span>
              <br />
              <span>Shrimp Miso Soup</span>
              <br />
              <span>Seafood Udon Soup</span>
            </Col>
            <Col xs='12' md='3'>
              <h4>bento lunch</h4>
              <span>Zaru Soba</span> <br />
              <span>Udon Soup</span> <br />
              <span>Miso Ramen</span>
              <br />
              <span>Chashu Ramen</span>
              <br />
              <span>Shrimp Miso Soup</span>
              <br />
              <span>Seafood Udon Soup</span>
            </Col>
            <Col xs='12' md='3'>
              <h4>specialty roll</h4>
              <span>Zaru Soba</span> <br />
              <span>Udon Soup</span> <br />
              <span>Miso Ramen</span>
              <br />
              <span>Chashu Ramen</span>
              <br />
              <span>Shrimp Miso Soup</span>
              <br />
              <span>Seafood Udon Soup</span>
            </Col>
          </Row>
          <div style={{ height: '90px' }} />
          <Row>
            <Col xs='12' md='3'>
              <h4>salad</h4>
              <span>Zaru Soba</span> <br />
              <span>Udon Soup</span> <br />
              <span>Miso Ramen</span>
              <br />
              <span>Chashu Ramen</span>
              <br />
              <span>Shrimp Miso Soup</span>
              <br />
              <span>Seafood Udon Soup</span>
            </Col>
            <Col xs='12' md='3'>
              <h4>side</h4>
              <span>Zaru Soba</span> <br />
              <span>Udon Soup</span> <br />
              <span>Miso Ramen</span>
              <br />
              <span>Chashu Ramen</span>
              <br />
              <span>Shrimp Miso Soup</span>
              <br />
              <span>Seafood Udon Soup</span>
            </Col>
            <Col xs='12' md='3'>
              <h4>drink</h4>
              <span>Zaru Soba</span> <br />
              <span>Udon Soup</span> <br />
              <span>Miso Ramen</span>
              <br />
              <span>Chashu Ramen</span>
              <br />
              <span>Shrimp Miso Soup</span>
              <br />
              <span>Seafood Udon Soup</span>
            </Col>
            <Col xs='12' md='3'>
              <h4>dessert</h4>
              <span>Zaru Soba</span> <br />
              <span>Udon Soup</span> <br />
              <span>Miso Ramen</span>
              <br />
              <span>Chashu Ramen</span>
              <br />
              <span>Shrimp Miso Soup</span>
              <br />
              <span>Seafood Udon Soup</span>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
