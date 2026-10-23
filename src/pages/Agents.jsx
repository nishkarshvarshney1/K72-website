import React, { useRef } from 'react'
import Logo from '../components/Logo';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const Agents = ({setToHome}) => {
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    'images/Carl_480x640.jpg',
    'images/Olivier_480x640.jpg',
    'images/ChantalG_480x640.jpg',
    'images/Michele_480X640.jpg',
    'images/MEL_480X640.jpg',
    'images/CAMILLE_480X640_2.jpg',
    'images/MEGGIE_480X640_2.jpg',
    'images/joel_480X640_3.jpg'
  ]

  useGSAP(()=>{
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 31.3%',
        end: 'top -105%',
        pin: true,
        scrub: 2,
        onUpdate: (e) => {
          let imageIndex = Math.round(imageArray.length * e.progress)
          if (imageIndex < imageArray.length) {
            imageRef.current.src = imageArray[imageIndex]
          } else {
            imageIndex = imageArray.length - 1
          }
        }
      }
    })
  })
  return (
    <div>
      <Logo setToHome={setToHome}/>
      <div ref={imageDivRef} className='rounded-2xl h-73  absolute top-66 left-112 -z-1 overflow-hidden '>
        <img ref={imageRef} className="size-full object-cover object-center" alt="" />
      </div>
      <div className='text-[20vw]/[0.85] mt-[50vh] uppercase text-center'>
        Soixan7e
        Douze
      </div>
      <div className='flex justify-end'>
        <p className='text-[3.8vw]/none w-[60%] pr-10'>Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
      </div>
      <div>
        <div className='grid grid-cols-3 mt-50 mb-40 text-xl px-40 w-full gap-20'>
          <span>Expertise</span>
          <div>
            <h3>Stratégie</h3>
            <h3>Publicité</h3>
            <h3>Branding</h3>
            <h3>Design</h3>
            <h3>Contenu</h3>
          </div>
        </div>
        <div className='grid grid-cols-3 px-40 text-xl gap-20'>
          <p>Nos projets_ naissent dans l’humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.</p>
          <p>Notre création_ bouillonne dans un environnement où le talent a le goût d’exploser. Où on se sent libre d’être la meilleure version de soi-même.</p>
          <p>Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage participe à bâtir une agence dont on est fiers.</p>
        </div>
      </div>
    </div>
  )
}

export default Agents
