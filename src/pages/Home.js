import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import salmon from '../menu_items/Blosom Signature Roll.jpg';
import Carousel from './Carousel';

export default class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <Carousel />
        <img id='opener' src={salmon} />
      </div>
    );
  }
}
