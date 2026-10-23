import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom';

const StairTransition = () => {
    const stairRef = useRef(null)
    const { pathname } = useLocation()
    useGSAP(() => {
        gsap.timeline()
            .to(stairRef.current.children, {
                display: 'flex'
            }, 'start')
            .from(stairRef.current.children, {
                height: 0,
                duration: 0.5,
                stagger: -0.05
            }, 'start')
            .to(stairRef.current.children, {
                y: '100%',
                duration: 0.5,
                stagger: -0.05
            })
            .to(stairRef.current.children, {
                display: 'none',
            })
            .to(stairRef.current.children, {
                y: '0%'
            })
    }, [pathname])
    return (
        <div ref={stairRef} className='h-screen w-full fixed top-0 left-0 z-999 flex pointer-events-none'>
            <div className=' h-full w-1/5 bg-black'></div>
            <div className=' h-full w-1/5 bg-black'></div>
            <div className=' h-full w-1/5 bg-black'></div>
            <div className=' h-full w-1/5 bg-black'></div>
            <div className=' h-full w-1/5 bg-black'></div>
        </div>
    )
}

export default StairTransition
