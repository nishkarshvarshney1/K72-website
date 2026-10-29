import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Marquee = ({ setBgColor }) => {
    const containerRef = useRef()
    useGSAP(() => {
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'top -70%',
            onToggle: (self) => setBgColor(self.isActive ? 'black' : 'white')
        })
    })
    return (
        <div className='flex items-center justify-center'>
            <div ref={containerRef} className='h-screen w-2/5 rounded-3xl overflow-hidden mt-100'>
                <img className='size-full' src="/blank.jpg" alt="" />
                <div className='text-(--green) text-5xl absolute top-0 left-0 bg-red-200'>AMBRE</div>
            </div>
        </div>
    )
}

export default Marquee
