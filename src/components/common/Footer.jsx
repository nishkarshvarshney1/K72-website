import { Globe } from 'lucide-react';
import React from 'react'

const Footer = () => {
  return (
    <div className='h-130 bg-black w-full text-white flex flex-col justify-between relative uppercase p-3'>
        <div className='flex justify-between items-center text-7xl/[0.7]'>
            <div className='flex gap-2 '>
                        <div className='border-2 border-white pt-3.5  px-5 rounded-full'>FB</div>
                        <div className='border-2 border-white pt-3.5  px-5 rounded-full'>IG</div>
                        <div className='border-2 border-white pt-3.5 px-5 rounded-full'>IN</div>
                        <div className='border-2 border-white pt-3.5  px-5 rounded-full'>BE</div>
                    </div>
            <h2 className='border-2 border-white pt-3.5  px-5 rounded-full'>Contact</h2>
        </div>
      <div className='grid grid-cols-3 bg-black text-white items-center px-3 py-2'>
                    <div className='flex items-center gap-3'>
                        <Globe className='size-9' strokeWidth={1} />
                        <span className='text-2xl'>MONTREAL_time</span>
                    </div>
                    <div className='flex gap-5 justify-self-center uppercase items-center text-base whitespace-nowrap'>
                        <h3>privacy policy</h3>
                        <h3>privacy notice</h3>
                        <h3>ethics report</h3>
                        <h3>consent choices</h3>
                    </div>
                    <h2 className='justify-self-end'>back to top</h2>
                </div>
    </div>
  )
}

export default Footer
