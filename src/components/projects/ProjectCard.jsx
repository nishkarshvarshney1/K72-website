import React from 'react'

const ProjectCard = ({images}) => {
    return (
        <>
            <div className='cursor-pointer w-full group relative overflow-hidden hover:rounded-4xl transition-all'>
                <img className='object-cover object-center' src={images.image1} alt="" />
                <div className='absolute inset-0 z-1 bg-black/20 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center'>
                    <div className='uppercase border-2 w-fit text-6xl/[0.7] text-white border-white px-5 pt-3 rounded-full '>view project</div>
                </div>
            </div>
            {images.image2 ? (
                <div className='cursor-pointer w-full group relative overflow-hidden hover:rounded-4xl transition-all'>
                <img className='object-center object-cover' src={images.image2} alt="" />
                <div className='absolute inset-0 z-1 bg-black/20 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center'>
                    <div className='uppercase border-2 w-fit text-6xl/[0.7] text-white border-white px-5 pt-3 rounded-full '>view project</div>
                </div>
            </div>
            ): null}
        </>
    )
}

export default ProjectCard
