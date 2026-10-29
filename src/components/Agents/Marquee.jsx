import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Marquee = ({ setBgColor }) => {
    const containerRef = useRef()
    const moveLeftRef = useRef()
    const moveRightRef = useRef()
    useGSAP(() => {
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'top -70%',
            onToggle: (self) => setBgColor(self.isActive ? 'black' : 'white')
        })
        gsap.to(moveLeftRef.current, {
            xPercent: -50,
            duration: 10,
            repeat: -1,
            ease: 'none'
        })
        gsap.to(moveRightRef.current, {
            xPercent: 50,
            duration: 10,
            repeat: -1,
            ease: 'none'
        })
    })
    return (
        <div className='relative mt-100'>
            <div ref={containerRef} className='h-screen relative z-1 w-2/5 m-auto rounded-3xl overflow-hidden'>
                <img className='size-full' src="/blank.jpg" alt="" />
            </div>
            <div ref={moveLeftRef} className='text-(--green) text-[10vw]/[0.7] absolute top-[30%] flex whitespace-nowrap '>
                {[1,2].map((n)=>{
                    return <span key={n} className='w-screen'>AMBRE</span>
                })}
            </div>
            <div ref={moveRightRef} className='text-(--green) z-2 text-[10vw]/[0.7] absolute -left-full bottom-[30%] flex whitespace-nowrap '>
                {[1,2].map((n)=>{
                    return <span key={n} className='w-screen'>KERLEAU <span className='text-3xl uppercase text-white'>Account Manager</span></span>
                })}
            </div>
        </div>
    )
}

export default Marquee
