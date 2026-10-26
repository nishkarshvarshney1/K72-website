import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Globe, X } from 'lucide-react';
import React, { useRef, useState } from 'react'

const FullScreenNav = ({ setToBigNav }) => {
    const navBgRef = useRef()
    const xRef = useRef()
    const menuRef = useRef()
    const movingRef = useRef()
    const footerRef = useRef()
    const tlLol = gsap.timeline()
    useGSAP(() => {
        tlLol.from(navBgRef.current.children, {
            height: 0,
            duration: 0.3,
            stagger: -0.06
        })
        tlLol.from(footerRef.current, {
            opacity: 0
        })
        tlLol.from(menuRef.current.children, {
            opacity: 0,
            rotationX: 30,
            stagger: 0.1
        }, '<-0.2')
        tlLol.from(xRef.current, {
            x: '100%',
            duration: 0.5,
            ease: 'power3.out'
        }, '<-0.5')
    })
    const { contextSafe } = useGSAP()
    const hoverAnimation = contextSafe(() => {
        const tl = gsap.timeline()
        tl.to('.js-hover', {
            scaleY: 1,
            duration: 0.2,
        })
    })
    const hoverAnimationLeave = contextSafe(() => {
        const tl = gsap.timeline()
        tl.to('.js-hover', {
            scaleY: 0,
            duration: 0.2,
        })
    })
    const closeAnimation = contextSafe(() => {
        tlLol.pause()
        const tl = gsap.timeline({
            onComplete: () => setToBigNav(false)
        })
        tl.to(menuRef.current.children, {
            opacity: 0,
            duration: 0
        })
        tl.to(footerRef.current, {
            opacity: 0,
            duration: 0
        })
        tl.to(xRef.current, {
            x: '100%',
            duration: 0.5,
            ease: 'power3.out'
        })
        tl.to(navBgRef.current.children, {
            height: 0,
            duration: 0.3,
            stagger: -0.06
        }, '<')
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
            <div id="pageNav" className='absolute z-1 top-0 h-full w-full flex flex-col justify-between'>
                <div><X ref={xRef} onClick={closeAnimation} viewBox="5 5 14 14" className='hover:text-(--green) size-30 justify-self-end text-white cursor-pointer' strokeWidth={0.5} /></div>
                <div ref={menuRef} className='text-white text-[8vw]/[0.78] mb-20'>
                    <div onMouseEnter={hoverAnimation} onMouseLeave={hoverAnimationLeave} className='cursor-pointer group w-full bg-black border-gray-400 border-t flex justify-center items-center pt-[1.5vw] relative'>
                        PROJETS
                        <div className='js-hover origin-top bg-(--green) absolute top-0 left-0 w-full h-full scale-y-0 '>
                        </div>
                        <div ref={movingRef} className='absolute top-0 left-0 h-full w-full flex items-center whitespace-nowrap gap-8 text-black leading-none opacity-1 group-hover:opacity-100 transition'>
                            <h1 className='pt-[1.5vw]'>SEE EVERYTHING</h1>
                            <img className='rounded-full w-60 object-cover shrink-0 h-[80%]' src="/images/fullscreennav/PJC_SiteK72_Thumbnail_640x290.jpg" alt="" />
                            <h1 className='pt-[1.5vw]'>SEE EVERYTHING</h1>
                            <img className='rounded-full w-60 object-cover shrink-0 h-[80%]' src="/images/fullscreennav/Thumbnail.png" alt="" />
                        </div>
                    </div>
                    <div className='w-full bg-black border-gray-400 border-t flex justify-center items-center pt-[1.5vw]'>AGENCE</div>
                    <div className='w-full bg-black border-gray-400 border-t flex justify-center items-center pt-[1.5vw]'>CONTACT</div>
                    <div className='w-full bg-black border-gray-400 border-t border-b flex justify-center items-center pt-[1.5vw]'>BLOGUE</div>
                </div>
                <div ref={footerRef} className='grid grid-cols-3 bg-black text-white items-center px-3 py-2'>
                    <div className='flex items-center gap-3'>
                        <Globe className='size-9' strokeWidth={1} />
                        <span className='text-2xl'>MONTREAL_time</span>
                    </div>
                    <div className='flex gap-5 uppercase items-center text-xs whitespace-nowrap'>
                        <h3>privacy policy</h3>
                        <h3>privacy notice</h3>
                        <h3>ethics report</h3>
                        <h3>consent choices</h3>
                    </div>
                    <div className='flex gap-2 justify-self-end text-4xl/[0.7]'>
                        <div className='border-2 border-white pt-2  px-3 rounded-full'>FB</div>
                        <div className='border-2 border-white pt-2  px-3 rounded-full'>IG</div>
                        <div className='border-2 border-white pt-2 px-3 rounded-full'>IN</div>
                        <div className='border-2 border-white pt-2  px-3 rounded-full'>BE</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav
