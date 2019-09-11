import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import handroll from '../handroll.jpg';
export default class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <img id='opener' src={handroll} />
      </div>
    );
  }
}
