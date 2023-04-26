import { Headline } from '@/components/Headline'
import { eudo_sans } from '@/utils/font'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const About = () => {
  return (
    <div className='mt-44'>
      <Headline className="mb-5 mx-auto" l={{ title: "About", tagline: "A glimpse into my world" }} />
      <div className='max-w-5xl mx-auto'>
        <div style={eudo_sans.style} className='text-[#434B70] font-semibold text-3xl'>
          Hi, i am
        </div>
        <div style={eudo_sans.style} className='text-4xl font-light text-white'>
          Shafiqul <span className='font-semibold'>Islam</span>
        </div>
        <div style={eudo_sans.style} className='text-[#7A83A8] text-lg mt-2'>
          I am a versatile professional with a multifaceted skill set encompassing &nbsp;
          <span className='bg-[url("/rash_design.svg")] bg-no-repeat bg-top'>
            design
          </span>,
          front-end and back-end &nbsp;
          <span className='bg-[url("/rash_development.svg")] bg-no-repeat bg-top'>
            development
          </span>
          . As a key member of a software agency called &apos;Multicone&apos;,
          I take pride in delivering impactful solutions that meet the highest technical standards.
          You can learn more about our work at <Link className='text-cyan-500' href="https://multicone.io/">multicone.io</Link>.
          Additionally, I freelance on Fiverr to continuously expand my skill set and stay at the forefront of the industry.
        </div>
        <Image className='mx-auto my-10' src="/mine.svg" width={913 * 1.3} height={685 * 1.3} alt='' />
      </div>
    </div>
  )
}

