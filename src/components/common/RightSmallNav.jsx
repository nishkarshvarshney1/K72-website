import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import React, { useRef } from 'react'

const RightSmallNav = ({ setToBigNav }) => {
    const menuHoverRef = useRef()
    const { contextSafe } = useGSAP()
    const menuHoverAnimation = contextSafe(() => {
        gsap.to(menuHoverRef.current, {
            scaleY: 1,
            duration: 0.15,
        })
    })
    const menuHoverLeave = contextSafe(() => {
        gsap.to(menuHoverRef.current, {
            scaleY: 0,
            duration: 0.15
        })
    })
    return (
        <div onClick={() => setToBigNav(true)} onMouseEnter={menuHoverAnimation} onMouseLeave={menuHoverLeave} className='fixed right-0 top-0 z-2 group'>
            <div className='w-57 bg-black h-12.5 text-white group-hover:text-black transition duration-150 py-5 px-8 flex flex-col items-end cursor-pointer'>
                <hr className='w-12 border mb-1 relative z-1' />
                <hr className='w-6.5 border relative z-1' />
            </div>
            <div ref={menuHoverRef} className='w-full origin-top scale-y-0 bg-(--green) h-full text-black py-5 px-8 flex flex-col items-end cursor-pointer absolute top-0 left-0'>
            </div>
        </div>
    )
}

export default RightSmallNav
