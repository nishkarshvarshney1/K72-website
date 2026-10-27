import React, { useEffect, useRef, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Agents from './pages/Agents';
import LocomotiveScroll from 'locomotive-scroll';
import StairTransition from './components/StairTransition';

const App = () => {
  const [toProjects, setToProjects] = useState(false)
  const [toAgence, setToAgence] = useState(false)
  const [toHome, setToHome] = useState(false)
  const [toBigNav, setToBigNav] = useState(false)
  console.log(toAgence)
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll()
    return () => locomotiveScroll.destroy()
  }, [])
  return (
    <div>
      <StairTransition toAgence={toAgence} toProjects={toProjects} setToAgence={setToAgence} setToProjects={setToProjects} 
      setToHome={setToHome} toHome={toHome}/>
      <Routes>
        <Route path='/' element={<Home toBigNav={toBigNav} setToBigNav={setToBigNav} setToProjects={setToProjects} setToAgence={setToAgence} setToHome={setToHome} toAgence={toAgence} toProjects={toProjects}/>} />
        <Route path='/projects' element={<Projects setToProjects={setToProjects} setToAgence={setToAgence} setToHome={setToHome} setToBigNav={setToBigNav} toBigNav={toBigNav}/>} />
        <Route path='/agence' element={<Agents setToAgence={setToAgence} setToProjects={setToProjects} setToHome={setToHome}/>} />
      </Routes>
    </div>
  )
}

export default App
