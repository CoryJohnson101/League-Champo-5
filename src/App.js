import './App.css';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
