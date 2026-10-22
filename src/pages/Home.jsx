import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='h-screen'>
            <video className='size-full fixed top-0 left-0 object-cover object-center -z-1' loop src="69496b2d.mp4"></video>
            <div className='flex justify-between items-start'>
                <Link className='p-3' to='/'><svg className='w-30 h-auto' xmlns="http://www.w3.org/2000/svg" width="103" height="44" viewBox="0 0 103 44">
                    <path fill='white' fill-rule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                </svg>
                </Link>
                <div className='w-57 bg-black h-12.5'></div>
            </div>
            <div className='uppercase flex items-center h-screen flex-col text-[10vw]/[0.43] font-light text-white -translate-y-7'>
                <span>L'étincelle</span><br />
                <div className='flex'>
                    <span>qui</span>
                    <div className='rounded-full h-30 w-70 overflow-hidden'><video src="69496b2d.mp4"></video></div>
                    <span>génère</span>
                </div> <br />
                <span>La créativité</span>
            </div>
            <footer className=' absolute mb-3 text-white bottom-0 left-0 text-8xl uppercase flex gap-5 items-center justify-center w-full'>
                <Link to='/projects'><div className='border-3 border-white rounded-full leading-[0.7] pt-5 px-7 hover:text-(--green) hover:border-(--green) transition'>Projets</div></Link>
                <Link to='/agence'><div className='border-3 border-white rounded-full leading-[0.7] pt-5 px-7 hover:text-(--green) hover:border-(--green) transition'>Agence</div></Link>
            </footer>
        </div>
    )
}

export default Home
