import React, { Component } from 'react';

// styling
const homeStyle = {
  width: '100%',
  height: '500px'
};
export default class Home extends Component {
  render() {
    return (
      <div style={homeStyle} className='Home'>
        <h4>this is home page</h4>
      </div>
    );
  }
}
