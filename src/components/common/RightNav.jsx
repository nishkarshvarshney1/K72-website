import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

const RightNav = ({ setToBigNav, setToAgence, setToProjects }) => {
    const containerRef = useRef()
    useGSAP(() => {
        gsap.from(containerRef.current.children, {
            delay: 0.1,
            yPercent: -100,
            duration: 0.5,
            stagger: -0.2
        })
        gsap.to(containerRef.current, {
            zIndex: 0,
            yPercent: -100,
            duration: 0.5,
            scrollTrigger: {
                trigger: document.body,
                start: () => window.innerHeight * 0.25,
                toggleActions: 'play none none reverse'
            }
        })
    })
    return (
        <div ref={containerRef} className='flex text-xl font-light tracking-wider uppercase z-10 text-white items-start fixed right-0 top-0'>
            <div onClick={() => setToProjects(true)} className='bg-black w-70 h-13 flex items-end relative group cursor-pointer'>
                <span className='px-3 group-hover:text-black relative z-1'>projets</span>
                <div className='size-full bg-(--green) absolute scale-y-0 transition group-hover:scale-y-100 origin-top'></div>
            </div>
            <div onClick={() => setToAgence(true)} className='bg-black w-100 h-21 flex items-end relative group cursor-pointer'>
                <span className='px-3 group-hover:text-black relative z-1'>agence</span>
                <div className='size-full bg-(--green) absolute scale-y-0 transition group-hover:scale-y-100 origin-top'></div>
            </div>
            <div onClick={() => setToBigNav(true)} className='relative z-2 group'>
                <div className=' relative w-57 bg-black h-30 text-white group-hover:text-black transition duration-150 px-3 flex items-end cursor-pointer'>
                    <div className='absolute top-5 right-8'>
                        <hr className='w-12 border mb-1 relative z-1' />
                        <hr className='w-6.5 border relative z-1' />
                    </div>
                    <span className='relative z-2'> menu </span>
                </div>
                <div className='w-full origin-top scale-y-0 transition group-hover:scale-y-100 bg-(--green) h-full text-black py-5 px-8 flex flex-col items-end cursor-pointer absolute top-0 left-0'>
                </div>
            </div>
        </div>
    )
}

export default RightNav
