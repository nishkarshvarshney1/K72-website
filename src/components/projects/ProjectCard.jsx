import React from 'react'

const ProjectCard = () => {
    return (
        <div className='flex gap-3 h-100'>
            <div className='cursor-pointer group relative overflow-hidden hover:rounded-4xl transition-all object-cover object-center'>
                <img src="/images/projects/PJC_SiteK72_Thumbnail_1280x960.jpg" alt="" />
                <div className='absolute inset-0 z-1 bg-black/20 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center'>
                    <div className='uppercase border-2 w-fit text-6xl/[0.7] text-white border-white px-5 pt-3 rounded-full '>view project</div>
                </div>
            </div>
            <div className='cursor-pointer group relative overflow-hidden hover:rounded-4xl transition-all'>
                <img src="/images/projects/Thumbnail (1).png" alt="" />
                <div className='absolute inset-0 z-1 bg-black/20 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center'>
                    <div className='uppercase border-2 w-fit text-6xl/[0.7] text-white border-white px-5 pt-3 rounded-full '>view project</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
