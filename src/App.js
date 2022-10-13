import "./App.css"
import { Home } from "./Pages"
import { Routes, Route } from "react-router"
import React from "react"
import { useState } from "react"

const App = () => {
  const [players] = useState([])
  const [map] = useState("")
  const [roles] = useState("")
  const [teams] = useState("")

  return (
    <Routes>
      <Route
        path='*'
        element={
          <Home players={players} map={map} roles={roles} teams={teams} />
        }
      />
    </Routes>
  )
}
export default App
