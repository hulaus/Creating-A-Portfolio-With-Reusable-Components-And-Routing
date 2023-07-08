import logo from './assets/logo.svg';
import './App.css';
import Header from './components/Header';
import Profile from './pages/Profile';
import React from 'react';
import Projects from './pages/Projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header logo={logo} />
     <Routes>
      <Route
      path='/'
      element = { < Profile
      userName= 'Hulaus' />} />
      <Route path='/projects' 
      element={<Projects userName='Hulaus' />} />
     </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
