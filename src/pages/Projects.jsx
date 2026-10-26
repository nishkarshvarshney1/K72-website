import React from 'react'
import Logo from '../components/Logo';
import ProjectCard from '../components/projects/ProjectCard';

const Projects = ({ setToHome }) => {
  const productImages = [
    {
      image1: 'public/images/projects/PME-MTL_Thumbnail.jpg',
      image2: 'public/images/projects/Thumbnail (1).png',
    },
    {
      image1: 'public/images/projects/thumbnailimage_opto.jpg',
      image2: 'public/images/projects/100temps_Thumbnail.jpg',
    },
    {
      image1: 'public/images/projects/BEST_site_Thumbnail.jpg',
      image2: 'public/images/projects/CF_thumbnail.jpg',
    },
    {
      image1: 'public/images/projects/chalaxeur-thumbnail_img.jpg',
      image2: 'public/images/projects/crisis24_behance_1920X1200_cartes.jpg',
    },
    {
      image1: 'public/images/projects/Fruite_thumbnail_bbq.jpg',
      image2: 'public/images/projects/OKA_thumbnail.jpg',
    },
    {
      image1: 'public/images/projects/opto_thumbnail2.jpg',
      image2: 'public/images/projects/PJC_SiteK72_Thumbnail_1280x960.jpg',
    },
    {
      image1: 'public/images/projects/thumbnailimage_atable2.jpg',
      image2: 'public/images/projects/thumbnailimage_OSM.jpg',
    },
    {
      image1: 'public/images/projects/thumbnailimage_shelton.jpg',
      image2: 'public/images/projects/thumbnailimage_SollioAg.jpg',
    },
    {
      image1: 'public/images/projects/WS---K72.ca---Thumbnail.jpg',
    }
  ]
  return (
    <div className=''>
      <Logo setToHome={setToHome} />
      <div>
        <h1 className='text-[13.5vw]/[0.7] mt-[36vh] pl-3'>PROJETS <sup className='text-4xl'>17</sup></h1>
        <div className='px-3 flex flex-col gap-3'>
          {productImages.map((e, idx)=>{
            return <ProjectCard key={idx} images={e}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects
