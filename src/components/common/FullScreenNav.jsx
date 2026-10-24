import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { X } from 'lucide-react';
import React, { useRef } from 'react'

const FullScreenNav = ({ setToBigNav }) => {
    const navBgRef = useRef()
    const xRef = useRef()
    const menuRef = useRef()
    useGSAP(() => {
        gsap.timeline()
        .from(navBgRef.current.children, {
            height: 0,
            duration: 0.3,
            stagger: -0.06
        })
        .from(menuRef.current.children, {
            opacity: 0,
            x: 30,
            stagger: 0.1
        })
        .from(xRef.current, {
            x: '100%',
            duration: 0.5,
            ease: 'power3.out'
        }, '<-0.5')
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
                <div><X ref={xRef} onClick={() => setToBigNav(false)} viewBox="5 5 14 14" className='hover:text-(--green) size-30 justify-self-end text-white cursor-pointer' strokeWidth={0.5} /></div>
                <div ref={menuRef} className='text-white text-[8vw]/[0.78] mb-20'>
                    <div className='w-full bg-black border-gray-400 border-t flex justify-center items-center pt-[1.5vw]'>PROJETS</div>
                    <div className='w-full bg-black border-gray-400 border-t flex justify-center items-center pt-[1.5vw]'>AGENCE</div>
                    <div className='w-full bg-black border-gray-400 border-t flex justify-center items-center pt-[1.5vw]'>CONTACT</div>
                    <div className='w-full bg-black border-gray-400 border-t border-b flex justify-center items-center pt-[1.5vw]'>BLOGUE</div>
                </div>
                <div className='grid grid-cols-3 bg-black text-white items-center'>
                    <div>
                        <span>MONTREAL_time</span>
                    </div>
                    <div className='flex gap-5 uppercase items-center'>
                        <h3>privacy policy</h3>
                        <h3>privacy notice</h3>
                        <h3>ethics report</h3>
                        <h3>consent choices</h3>
                    </div>
                    <div className='flex gap-2 justify-self-end'>
                        <div>FB</div>
                        <div>FB</div>
                        <div>FB</div>
                        <div>FB</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav
