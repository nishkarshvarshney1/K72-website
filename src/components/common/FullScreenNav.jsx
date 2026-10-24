import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import React, { useRef } from 'react'

const FullScreenNav = () => {
    const navBgRef = useRef()
    useGSAP(()=>{
        gsap.from(navBgRef.current.children, {
            height: 0,
            duration: 0.3,
            stagger: -0.06
        })
    })
  return (
    <div className='h-screen w-full fixed top-0 z-999'>
      <div ref={navBgRef} className='h-full w-full flex'>
        <div className='bg-black w-1/5 h-full'></div>
        <div className='bg-black w-1/5 h-full'></div>
        <div className='bg-black w-1/5 h-full'></div>
        <div className='bg-black w-1/5 h-full'></div>
        <div className='bg-black w-1/5 h-full'></div>
      </div>
    </div>
  )
}

export default FullScreenNav
