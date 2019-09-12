import React, { Component } from 'react';
import './App.css';

import { Router, Switch } from 'react-router-dom';
// Pages
import NavBar from './pages/Navbar';
import Home from './pages/Home';
import Order from './pages/Order';
import About from './pages/About';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <Home />
        <Order />
        <About />
      </div>
    );
  }
}
export default App;
