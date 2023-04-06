import React, { LegacyRef, RefObject, useRef, useState } from 'react'
import { Hero } from './hero'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Nav } from '@/interface'
import { Projects } from './projects'
import { Techs } from './techs'
import { Socials } from './socials'
import { About } from './about'
import { Contact } from './contact'
import { Achievements } from './achievements'
import { ActionSection } from './action'
import { Footer } from '@/components/footer'

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const projectRef = useRef<HTMLDivElement>(null)
  const techsRef = useRef<HTMLDivElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)

  const nav: Nav[] = [
    { name: 'hero', ref: heroRef },
    { name: 'projects', ref: projectRef },
    { name: 'Techs', ref: techsRef },
    { name: 'Socials', ref: socialRef }
  ]

  const [height, setHeight] = useState<number>()
  const [isMin, setIsMin] = useState<boolean>(false)
  console.log("from index", height)
  return (
    <div className='relative w-screen bg-primary overflow-y-scroll overflow-x-hidden px-5'>
      <Header items={nav} />
      <Image className='mt-14 mx-auto' src="/headline.svg" height={99} width={681} alt='Headline' />
      <Hero ref={heroRef} />
      <div ref={projectRef}>
        <Projects setHeight={setHeight} />
      </div>
      <div ref={techsRef}>
        <Techs />
      </div>
      <div ref={socialRef}>
        <Socials />
      </div>
      <div ref={socialRef}>
        <About />
      </div>
      <Contact height={height!} isMin={isMin} setIsMin={setIsMin} />
      <Achievements />
      <ActionSection setIsMin={setIsMin} />
      <Footer />
    </div>
  )
}

