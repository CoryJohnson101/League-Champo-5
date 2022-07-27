import './App.css'
import { Home } from './Pages'
import { Routes, Route } from 'react-router'
import React from 'react'

const App = () => {
  return (
    <Routes>
      <Route path='*' element={<Home />} />
    </Routes>
  )
}
export default App
