import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import salmon from '../menu_items/Blosom Signature Roll.jpg';
export default class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <img id='opener' src={salmon} />
      </div>
    );
  }
}
