import React, { useRef } from 'react'
import Logo from '../components/Logo';
import ProjectCard from '../components/projects/ProjectCard';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RightNav from '../components/common/RightNav';
import RightSmallNav from '../components/common/RightSmallNav';
import FullScreenNav from '../components/common/FullScreenNav';

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ setToHome, setToBigNav, toBigNav, setToAgence }) => {
  const productImages = [
    {
      image1: '/images/projects/PME-MTL_Thumbnail.jpg',
      image2: '/images/projects/Thumbnail (1).png',
    },
    {
      image1: '/images/projects/thumbnailimage_opto.jpg',
      image2: '/images/projects/100temps_Thumbnail.jpg',
    },
    {
      image1: '/images/projects/BEST_site_Thumbnail.jpg',
      image2: '/images/projects/CF_thumbnail.jpg',
    },
    {
      image1: '/images/projects/chalaxeur-thumbnail_img.jpg',
      image2: '/images/projects/crisis24_behance_1920X1200_cartes.jpg',
    },
    {
      image1: '/images/projects/Fruite_thumbnail_bbq.jpg',
      image2: '/images/projects/OKA_thumbnail.jpg',
    },
    {
      image1: '/images/projects/opto_thumbnail2.jpg',
      image2: '/images/projects/PJC_SiteK72_Thumbnail_1280x960.jpg',
    },
    {
      image1: '/images/projects/thumbnailimage_atable2.jpg',
      image2: '/images/projects/thumbnailimage_OSM.jpg',
    },
    {
      image1: '/images/projects/thumbnailimage_shelton.jpg',
      image2: '/images/projects/thumbnailimage_SollioAg.jpg',
    },
    {
      image1: '/images/projects/WS---K72.ca---Thumbnail.jpg',
    }
  ]
  return (
    <div className='relative'>
      {toBigNav && <FullScreenNav setToBigNav={setToBigNav} />}
      <div className='flex justify-between items-start'>
        <Logo setToHome={setToHome} />
      <RightSmallNav setToBigNav={setToBigNav}/>
      </div>
      <RightNav setToBigNav={setToBigNav} setToAgence={setToAgence}/>
      <div>
        <h1 className='text-[13.5vw]/[0.7] mt-[36vh] pl-3'>PROJETS <sup className='text-4xl'>17</sup></h1>
        <div id='container' className='px-3 flex flex-col gap-3'>
          {productImages.map((e, idx) => {
            return <div key={idx} className='product-row grid grid-cols-2 gap-3'>
              <ProjectCard images={e} />
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects
