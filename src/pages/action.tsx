import { baloo, cursive, eudo_sans } from '@/utils/font'
import React from 'react'

export const ActionSection = ({ setIsMin }: { setIsMin: (f: boolean) => void }) => {
  return (
    <div className='w-fit mx-auto h-[50vh] flex-col center space-y-8'>
      <div style={cursive.style} className='text-white text-5xl text-center mx-auto'>Interested in talking?</div>
      <div
        onClick={() => setIsMin(false)}
        className="relative group w-fit mx-auto hover:scale-105 focus:scale-100 transition-all duration-300 cursor-pointer">
        <div className="absolute -inset-1 bg-gradient-to-r bg-[#3E4980] rounded-lg blur-2xl"></div>
        <div className="relative px-8 py-3 bg-[#3E4980] rounded-2xl">
          <p style={baloo.style} className="text-white">Let&apos;s talk</p>
        </div>
      </div>
    </div>
  )
}

