import { Headline as HeadlineProps } from '@/interface'
import { c } from '@/utils/c'
import { eudo_sans } from '@/utils/font'
import React from 'react'

export const Headline = ({ l, className }: { l: HeadlineProps, className?: string }) => {
  return (
    <div className={c('relative h-fit w-fit mx-auto mb-16', className as string)}>
      <div style={eudo_sans.style} className='text-xl md:text-5xl font-semibold centerH z-10 text-white'>{l.tagline}</div>
      <div style={eudo_sans.style} className='leading-0 font-semibold centerH -mt-5 md:-mt-28 text-6xl md:text-[10rem] z-0 text-white/5'>{"<"}{l.title}{"/>"}</div>
    </div>
  )
}
