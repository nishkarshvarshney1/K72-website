import React from 'react'
import Logo from '../components/Logo';

const Projects = ({setToHome}) => {
  return (
    <div className=''>
      <Logo setToHome={setToHome}/>
      <div>
        <h1 className='text-[13.5vw] mt-[36vh] pl-3'>PROJETS <sup className='text-4xl'>17</sup></h1>
      </div>
    </div>
  )
}

export default Projects
