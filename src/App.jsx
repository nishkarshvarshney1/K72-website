import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Agents from './pages/Agents';
import LocomotiveScroll from 'locomotive-scroll';
import StairTransition from './components/StairTransition';

const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll()
    return () => locomotiveScroll.destroy()
  }, [])
  return (
    <div>
      <StairTransition />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/agence' element={<Agents />} />
      </Routes>
    </div>
  )
}

export default App
