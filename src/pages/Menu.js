import React, { Component } from 'react';

import { Row, Col, Button } from 'reactstrap';

export default class Menu extends Component {
  render() {
    return (
      <div className='Menu'>
        <div id='menu-body'>
          <h3>popular dishes</h3>
          <div style={{ height: '24px' }} />
          <Row>
            <Col xs='12' md='3'>
              <h5>noodle</h5>
              <p>Zaru Soba</p>
              <p>Udon Soup</p>
              <p>Miso Ramen</p>

              <p>Chashu Ramen</p>

              <p>Shrimp Miso Soup</p>

              <p>Seafood Udon Soup</p>
            </Col>
            <Col xs='12' md='3'>
              <h5>sushi & sashimi</h5>
              <p>Zaru Soba</p>
              <p>Udon Soup</p>
              <p>Miso Ramen</p>

              <p>Chashu Ramen</p>

              <p>Shrimp Miso Soup</p>

              <p>Seafood Udon Soup</p>
            </Col>
            <Col xs='12' md='3'>
              <h5>bento lunch</h5>
              <p>Zaru Soba</p>
              <p>Udon Soup</p>
              <p>Miso Ramen</p>

              <p>Chashu Ramen</p>

              <p>Shrimp Miso Soup</p>

              <p>Seafood Udon Soup</p>
            </Col>
            <Col xs='12' md='3'>
              <h5>specialty roll</h5>
              <p>Zaru Soba</p>
              <p>Udon Soup</p>
              <p>Miso Ramen</p>

              <p>Chashu Ramen</p>

              <p>Shrimp Miso Soup</p>

              <p>Seafood Udon Soup</p>
            </Col>
          </Row>
          {/* <div style={{ height: '90px' }} />
          <Row>
            <Col xs='12' md='3'>
              <h5>salad</h5>
              <p>Zaru Soba</p>
              <p>Udon Soup</p>
              <p>Miso Ramen</p>

              <p>Chashu Ramen</p>

              <p>Shrimp Miso Soup</p>

              <p>Seafood Udon Soup</p>
            </Col>
            <Col xs='12' md='3'>
              <h5>side</h5>
              <p>Zaru Soba</p>
              <p>Udon Soup</p>
              <p>Miso Ramen</p>

              <p>Chashu Ramen</p>

              <p>Shrimp Miso Soup</p>

              <p>Seafood Udon Soup</p>
            </Col>
            <Col xs='12' md='3'>
              <h5>drink</h5>
              <p>Zaru Soba</p>
              <p>Udon Soup</p>
              <p>Miso Ramen</p>

              <p>Chashu Ramen</p>

              <p>Shrimp Miso Soup</p>

              <p>Seafood Udon Soup</p>
            </Col>
            <Col xs='12' md='3'>
              <h5>dessert</h5>
              <p>Zaru Soba</p>
              <p>Udon Soup</p>
              <p>Miso Ramen</p>

              <p>Chashu Ramen</p>

              <p>Shrimp Miso Soup</p>

              <p>Seafood Udon Soup</p>
            </Col>
          </Row> */}
          <Button color='light'>Full Menu</Button>
        </div>
      </div>
    );
  }
}
