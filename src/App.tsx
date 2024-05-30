import React from 'react'
import CharactersPage from './views/CharactersPage'
import CharacterPage from './views/CharacterPage'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CharactersPage/>} />
      <Route path="/:id" element={<CharacterPage/>} />
    </Routes>
  )
}

export default App

