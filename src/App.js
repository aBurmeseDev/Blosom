import React from 'react';
import './App.css';

import { Router, Switch } from 'react-router-dom';
// Pages
import NavBar from './pages/Navbar';

function App() {
  return (
    <div className='App'>
      <NavBar />
    </div>
  );
}

export default App;
