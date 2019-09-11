import React from 'react';
import './App.css';

import { Router, Switch } from 'react-router-dom';
// Pages
import NavBar from './pages/Navbar';
import Home from './pages/Home';
import Order from './pages/Order';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Home />
      <Order />
    </div>
  );
}

export default App;
