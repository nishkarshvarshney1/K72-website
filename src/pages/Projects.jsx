import React from 'react'
import Logo from '../components/Logo';
import ProjectCard from '../components/projects/ProjectCard';

const Projects = ({ setToHome }) => {
  const productImages = [
    
  ]
  return (
    <div className=''>
      <Logo setToHome={setToHome} />
      <div>
        <h1 className='text-[13.5vw]/[0.7] mt-[36vh] pl-3'>PROJETS <sup className='text-4xl'>17</sup></h1>
        <div className='px-3 flex flex-col gap-3'>
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  )
}

export default Projects
