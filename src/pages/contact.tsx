import { c } from '@/utils/c'
import { eudo_sans } from '@/utils/font'
import Image from 'next/image'
import React, { useState } from 'react'

export const Contact = ({ height, isMin, setIsMin }: { height: number, isMin: boolean, setIsMin: (b: boolean) => void }) => {
  return (
    <>
      <div className={c(height < 20 && !isMin ? "opacity-100 right-5 bottom-5" : "opacity-0 -right-96 -bottom-96",
        'fixed transition-all duration-500 w-[90vw] md:w-96 rounded-2xl p-5 z-50',
        "bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-2xl overflow-hidden bg-opacity-40 border border-[#46518A]")}>
        <div className='flex items-center justify-between text-white my-3'>
          <div className='absolute top-0 left-20 h-24 w-24 bg-white/50 rounded-lg blur-3xl'></div>
          <h3 style={eudo_sans.style} className='font-semibold text-xl'>Contact</h3>
          <div
            onClick={() => { setIsMin(true) }}
            className='cursor-pointer py-2'
          >
            <Image src="/minimize.svg" width={24} height={3} alt='' />
          </div>
        </div>
        <div className='space-y-2'>
          <div>
            <label style={eudo_sans.style} className='text-white font-medium text-sm'>Name</label>
            <input style={eudo_sans.style} className='w-full border text-white bg-transparent border-secondery rounded-xl px-3 py-2 font-medium text-md outline-none' />
          </div>
          <div>
            <label style={eudo_sans.style} className='text-white font-medium text-sm'>Email</label>
            <input style={eudo_sans.style} className='w-full border text-white bg-transparent border-secondery rounded-xl px-3 py-2 font-medium text-md outline-none' />
          </div>
          <div>
            <label style={eudo_sans.style} className='text-white font-medium text-sm'>Message</label>
            <textarea style={eudo_sans.style} rows={4} className='w-full text-white border bg-transparent border-secondery rounded-xl px-3 py-2 font-medium text-md outline-none' />
          </div>
          <div
            style={eudo_sans.style}
            className='text-white text-center hover:scale-[102%] focus:scale-100 z-10 px-5 cursor-pointer py-2.5 bg-[#1C2139] from-primary to-secondery/50 hover:px-8 transition-all duration-500 rounded-xl capitalize'
            onClick={() => { }}>
            Send mail
          </div>
        </div>
      </div>
      <div
        onClick={() => { setIsMin(false) }}
        className={c(height < 20 && isMin ? "opacity-100 right-5 bottom-5" : "opacity-0 -right-96 -bottom-96",
          'fixed h-16 w-16 center rounded-full bg-red-500 transition-all cursor-pointer duration-500')}>
        <Image src="/msg.svg" width={30} height={35.58} alt='' />
      </div>
    </>
  )
}

