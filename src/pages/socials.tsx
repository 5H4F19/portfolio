import { Headline } from '@/components/Headline'
import { Social, } from '@/interface'
import { c } from '@/utils/c'
import { eudo_sans } from '@/utils/font'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ISocials } from '.'



export const Socials = ({ socials: a }: { socials: ISocials }) => {

  const socials: Social[] = [
    { name: 'github', image: '/github.svg', url: a.github },
    { name: 'linkedin', image: '/linkedin.svg', url: a.linkedin },
    { name: 'fiverr', image: '/fiverr.svg', url: a.fiverr },
    { name: 'facebook', image: '/facebook.svg', url: a.facebook },
    { name: 'instagram', image: '/instagram.svg', url: a.insta },
    { name: 'whatsApp', image: 'whatsapp.svg', url: a.whatsapp }
  ]

  return (
    <div className='mt-44'>
      <Headline className="mb-5 mx-auto" l={{ title: "Socials", tagline: "Stay connected" }} />
      <div className='max-w-[60rem] grid items-center justify-center md:grid-cols-3 gap-y-6 mx-auto'>
        {socials?.map(site => (
          <Social tool={site} />
        ))}
      </div>
    </div>
  )
}

const Social = ({ tool }: { tool: Social }) => {
  const { name, image, url } = tool
  return (
    <Link href={url} style={{ height: 156, width: 297, ...eudo_sans.style }}
      className={c('cursor-pointer transition-all duration-500 focus:scale-100 hover:scale-105',
        'text-[#BDC9FF] capitalize text-4xl font-medium drop-shadow-2xl shadow-[#46518A]',
        'flex items-center relative bg-[#1C2139] overflow-hidden border border-[#46518A] w-64 px-3 py-1 rounded-2xl h-24')}>
      {name}
      <Image className='absolute -bottom-10  -right-5 opacity-50' src="/abstract.svg" height={156} width={134} alt='' />
      <div style={{ height: 110, width: 110 }} className='border p-4 bg-[#1C2139] border-[#46518A] absolute -bottom-5 -right-5 rounded-full '>
        <Image src={image} height={63} width={63} alt='image' />
      </div>
    </Link>
  )
}
