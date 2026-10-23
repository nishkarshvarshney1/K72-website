import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import React, { useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const StairTransition = (props) => {
    const stairRef = useRef(null)
    const { pathname } = useLocation()
    const navigate = useNavigate()
    useGSAP(() => {
        const target = props.toAgence ? '/agence'
                     : props.toProjects ? '/projects'
                     : props.toHome ? '/'
                     : null
        if (!target) return

        gsap.timeline({
            onComplete: () => {
                navigate(target)
                props.setToAgence(false)   
                props.setToProjects(false)
                props.setToHome(false)
            },
        }).to(stairRef.current.children, { height: '100%', duration: 0.5, stagger: -0.05 })
    }, [props.toProjects, props.toAgence, props.toHome])

    useGSAP(() => {
        const stairs = stairRef.current.children
        gsap.timeline()
            .set(stairs, { height: '100%', y: 0 })
            .to(stairs, { y: '100%', duration: 0.5, stagger: -0.05 })
            .set(stairs, { height: 0, y: 0 })
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
