import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const Home = ({ setToAgence, setToProjects, toAgence, toProjects }) => {

    const videoRef = useRef()
    const videoRef2 = useRef()
    const menuHoverRef = useRef()

    useGSAP(() => {
        const video = videoRef.current
        if (!video) return

        if (toAgence || toProjects) {
            video.pause()
            gsap.to(video, {
                scale: 1.2,
                duration: 0.5,
                ease: 'power2.inOut',
            })
        }
    }, [toAgence, toProjects])

    useGSAP(() => {
        videoRef.current.pause()
        gsap.from(videoRef.current, {
            scale: 1.2,
            duration: 0.8,
            ease: 'power2.inOut',
            onComplete: () => videoRef.current.play()
        })
        videoRef2.current.pause()
        gsap.from(videoRef2.current, {
            duration: 0.8,
            ease: 'power2.inOut',
            onComplete: () => videoRef2.current.play()
        })
    })

    const { contextSafe } = useGSAP()
    const menuHoverAnimation = contextSafe(()=>{
        gsap.to(menuHoverRef.current, {
            scaleY: 1,
            duration: 0.15,
            color: 'black'
        })
    })
    const menuHoverLeave = contextSafe(()=>{
        gsap.to(menuHoverRef.current, {
            scaleY: 0,
            duration: 0.15
        })
    })
    return (
        <div className='h-screen overflow-hidden relative'>
            <video ref={videoRef} className='size-full fixed top-0 left-0 object-cover object-center -z-1' autoPlay muted loop src="69496b2d.mp4"></video>
            <div className='flex justify-between items-start'>
                <Logo fill='white' />
                <div onMouseEnter={menuHoverAnimation} onMouseLeave={menuHoverLeave} className='relative group'>
                    <div className='w-57 bg-black h-12.5 text-white group-hover:text-black transition duration-150 py-5 px-8 flex flex-col items-end cursor-pointer'>
                        <hr className='w-12 border mb-1 relative z-1' />
                        <hr className='w-6.5 border relative z-1' />
                    </div>
                    <div ref={menuHoverRef} className='w-full origin-top scale-y-0 bg-(--green) h-full text-black py-5 px-8 flex flex-col items-end cursor-pointer absolute top-0 left-0'>
                    </div>
                </div>
            </div>
            <div className='uppercase flex items-center h-screen flex-col text-[9.5vw]/[0.43] font-light text-white -translate-y-7'>
                <span>L'étincelle</span><br />
                <div className='flex'>
                    <span>qui</span>
                    <div className='rounded-full h-[10vw] w-[15vw] -translate-y-10 object-cover'><video ref={videoRef2} autoPlay loop muted src="69496b2d.mp4" className='rounded-full'></video></div>
                    <span>génère</span>
                </div> <br />
                <span className='-translate-y-20'>La créativité</span>
            </div>
            <div className='text-white absolute bottom-40 right-5 w-70 text-sm'>K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</div>
            <footer className=' absolute mb-3 text-white bottom-0 left-0 text-8xl uppercase flex gap-5 items-center justify-center w-full'>
                <div onClick={() => setToProjects(true)} className='cursor-pointer border-3 border-white rounded-full leading-[0.7] pt-5 px-7 hover:text-(--green) hover:border-(--green) transition'>Projets</div>
                <div onClick={() => setToAgence(true)} className='cursor-pointer border-3 border-white rounded-full leading-[0.7] pt-5 px-7 hover:text-(--green) hover:border-(--green) transition'>Agence</div>
            </footer>
        </div>
    )
}

export default Home
