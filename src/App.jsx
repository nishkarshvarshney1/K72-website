import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Agents from './pages/Agents';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/agence' element={<Agents />} />
      </Routes>
    </div>
  )
}

export default App
