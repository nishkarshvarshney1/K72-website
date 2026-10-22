import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const Home = () => {
    return (
        <div className='h-screen overflow-hidden relative'>
            <video className='size-full fixed top-0 left-0 object-cover object-center -z-1' autoPlay muted loop src="69496b2d.mp4"></video>
            <div className='flex justify-between items-start'>
                <Logo />
                <div className='w-57 bg-black h-12.5 text-white py-5 px-8 flex flex-col items-end cursor-pointer'>
                    <hr className='w-12 border mb-1'/>
                    <hr className='w-6.5 border'/>
                </div>
            </div>
            <div className='uppercase flex items-center h-screen flex-col text-[9.5vw]/[0.43] font-light text-white -translate-y-7'>
                <span>L'étincelle</span><br />
                <div className='flex'>
                    <span>qui</span>
                    <div className='rounded-full h-[10vw] w-[15vw] -translate-y-10 object-center object-cover'><video autoPlay loop muted src="69496b2d.mp4" className='rounded-full'></video></div>
                    <span>génère</span>
                </div> <br />
                <span className='-translate-y-14'>La créativité</span>
            </div>
            <div className='text-white absolute bottom-40 right-5 w-70 text-sm'>K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</div>
            <footer className=' absolute mb-3 text-white bottom-0 left-0 text-8xl uppercase flex gap-5 items-center justify-center w-full'>
                <Link to='/projects'><div className='border-3 border-white rounded-full leading-[0.7] pt-5 px-7 hover:text-(--green) hover:border-(--green) transition'>Projets</div></Link>
                <Link to='/agence'><div className='border-3 border-white rounded-full leading-[0.7] pt-5 px-7 hover:text-(--green) hover:border-(--green) transition'>Agence</div></Link>
            </footer>
        </div>
    )
}

export default Home
