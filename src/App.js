import './App.css'
import { Home } from './Pages'
import { Routes, Route } from 'react-router'
import React from 'react'
import { useState } from 'react'

const App = () => {

  const [players, setPlayers] = useState([])
  const [map, setMap] = useState("")
  const [roles, setRoles] = useState("")
  const [teams, setTeams] = useState("")




  return (
    <Routes>
      <Route path='*' element={<Home players={players} map={map} roles={roles} teams={teams}/>} />
    </Routes>
  )
}
export default App
