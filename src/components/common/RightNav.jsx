import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import React, { useRef } from 'react'

const RightNav = ({setToBigNav}) => {
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
    <div className='flex text-xl font-light tracking-wider uppercase text-white items-start absolute right-0 top-0'>
      <div className='bg-black w-70 h-13 flex items-end px-3'>Projets (17)</div>
      <div className='bg-black w-100 h-21 flex items-end px-3'>Agence</div>
      <div onClick={() => setToBigNav(true)} onMouseEnter={menuHoverAnimation} onMouseLeave={menuHoverLeave} className='relative z-2 group'>
            <div className=' relative w-57 bg-black h-30 text-white group-hover:text-black transition duration-150 px-3 flex items-end cursor-pointer'>
                <div className='absolute top-5 right-8'>
                    <hr className='w-12 border mb-1 relative z-1' />
                <hr className='w-6.5 border relative z-1' />
                </div>
                <span className='relative z-2'> menu </span>
            </div>
            <div ref={menuHoverRef} className='w-full origin-top scale-y-0 bg-(--green) h-full text-black py-5 px-8 flex flex-col items-end cursor-pointer absolute top-0 left-0'>
            </div>
        </div>
    </div>
  )
}

export default RightNav
