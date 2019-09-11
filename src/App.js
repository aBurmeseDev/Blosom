import React from 'react';
import './App.css';

import { Router, Switch } from 'react-router-dom';
// Pages
import NavBar from './pages/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
