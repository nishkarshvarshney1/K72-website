import React, { useRef, useState } from 'react'
import Logo from '../components/Logo';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RightNav from '../components/common/RightNav';
import RightSmallNav from '../components/common/RightSmallNav';
import StairTransition from '../components/StairTransition';
import FullScreenNav from '../components/common/FullScreenNav';
import Footer from '../components/common/Footer';
import Marquee from '../components/Agents/Marquee';

gsap.registerPlugin(ScrollTrigger)

const Agents = ({ setToHome, setToProjects, setToBigNav, toBigNav, toHome, toProjects, toAgence }) => {
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const [bgColor, setBgColor] = useState('white')
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

  useGSAP(() => {
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
    ScrollTrigger.create({
        trigger: '.gsapPin1',
        start: 'top top',
        end: '+=100%',
        pin: true,
        pinSpacing: false
      })
    ScrollTrigger.create({
        trigger: '.gsapPin2',
        start: 'top top',
        end: '+=100%',
        pin: true,
        pinSpacing: false
      })
    ScrollTrigger.create({
        trigger: '.gsapPin3',
        start: 'top top',
        end: '+=100%',
        pin: true,
        pinSpacing: false
      })
    gsap.timeline()
      .from('.js-ref', {
        delay: 0.5,
        duration: 0.5,
        yPercent: -150,
        stagger: 0.1,
      })
      .from(imageDivRef.current, {
        opacity: 0,
        width: 0,
        duration: 1,
        ease: 'expo.out'
      }, '-=0.3')
  })
  return (
    <div className={`bg-${bgColor} text-${bgColor === 'white' ? 'black' : 'white'} transition duration-500`}>
      {toBigNav && <FullScreenNav setToBigNav={setToBigNav} />}
      <Logo setToHome={setToHome} fill={toBigNav || toAgence || toHome || toProjects ? 'white' : 'black'} />
      <RightSmallNav setToBigNav={setToBigNav} />
      <RightNav setToBigNav={setToBigNav} setToProjects={setToProjects} />
      <div ref={imageDivRef} className='rounded-2xl h-73 w-55  absolute top-66 left-112 -z-1 overflow-hidden '>
        <img ref={imageRef} className="size-full object-cover object-center" alt="" />
      </div>
      <div className='pt-20 overflow-hidden text-[20vw]/[0.6] mt-[45vh] uppercase text-center'>
        <h1 className='js-ref'>Soixan7e</h1>
        <div className='pt-20 overflow-hidden'>
          <h1 className='js-ref'>Douze</h1>
        </div>
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
      <Marquee setBgColor={setBgColor}/>
      <footer>
          <div className='gsapPin1 group cursor-pointer h-screen w-full rounded-4xl flex items-center justify-center relative text-white'>
            <img className='size-full group-hover:scale-105 duration-400 transition object-cover object-center' src="/images/projects/thumbnailimage_opto.jpg" alt="" />
            <div className='flex flex-col text-center absolute'>
              <h4 className='text-[2vw]'>Opto-Réseau</h4>
              <h1 className='text-[5vw] group-hover:underline'>We see you like no other</h1>
            </div>
          </div>
          <div className='gsapPin2 group cursor-pointer h-screen w-full rounded-4xl flex items-center justify-center relative text-white'>
            <img className='size-full group-hover:scale-105 duration-400 transition object-cover object-center' src="/images/projects/chalaxeur-thumbnail_img.jpg" alt="" />
            <div className='flex flex-col text-center absolute'>
              <h4 className='text-[2vw]'>Lamajeure</h4>
              <h1 className='text-[5vw] group-hover:underline'>Lamajeure</h1>
            </div>
          </div>
          <div className='gsapPin3 group cursor-pointer h-screen w-full rounded-4xl flex items-center justify-center relative text-white'>
            <img className='size-full group-hover:scale-105 duration-400 transition object-cover object-center' src="/images/projects/Fruite_thumbnail_bbq.jpg" alt="" />
            <div className='flex flex-col text-center absolute'>
              <h4 className='text-[2vw]'>Lessonde</h4>
              <h1 className='text-[5vw] group-hover:underline'>Fruité</h1>
            </div>
          </div>
      </footer>
      <Footer />
    </div>
  )
}

export default Agents
