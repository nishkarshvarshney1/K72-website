

const RightSmallNav = ({ setToBigNav }) => {
    return (
        <div onClick={() => setToBigNav(true)} className='fixed right-0 top-0 z-2 group'>
            <div className='w-57 bg-black h-12.5 text-white group-hover:text-black transition duration-150 py-5 px-8 flex flex-col items-end cursor-pointer'>
                <hr className='w-12 border mb-1 relative z-1' />
                <hr className='w-6.5 border relative z-1' />
            </div>
            <div className='w-full origin-top scale-y-0 group-hover:scale-y-100 transition bg-(--green) h-full text-black py-5 px-8 flex flex-col items-end cursor-pointer absolute top-0 left-0'>
            </div>
        </div>
    )
}

export default RightSmallNav
