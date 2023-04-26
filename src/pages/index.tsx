import React, { LegacyRef, RefObject, useRef, useState } from 'react'
import { Hero } from './hero'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Nav } from '@/interface'
import Projects from './projects'
import { Techs } from './techs'
import { Socials } from './socials'
import { About } from './about'
import { Contact } from './contact'
import { Achievements } from './achievements'
import { ActionSection } from './action'
import { Footer } from '@/components/footer'
import Head from 'next/head'


export type Props = {
  projects?: IProjects[]
  socials?: ISocials
}

export type IProjects = {
  _id: string;
  title: string;
  desc: string;
  url: string;
  href: string;
}
export type ISocials = {
  _id: string;
  linkedin: string;
  github: string;
  fiverr: string;
  facebook: string;
  insta: string;
  whatsapp: string;
}

export async function getServerSideProps() {
  try {
    let response = await fetch('http://localhost:3000/api/projects');
    let response2 = await fetch('http://localhost:3000/api/socials');
    let projects = await response.json();
    let socials = await response2.json();

    return {
      props: {
        projects: JSON.parse(JSON.stringify(projects)),
        socials: JSON.parse(JSON.stringify(socials))
      },
    };
  } catch (e: any) {
    console.error(e);
  }
}




export default function Home(props: Props) {
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
      <Head>
        <title>Shafiq S.</title>
      </Head>
      <Header items={nav} />
      <Image className='mt-14 mx-auto' src="/headline.svg" height={99} width={681} alt='Headline' />
      <Hero ref={heroRef} />
      <div ref={projectRef}>
        <Projects projects={props.projects!} setHeight={setHeight} />
      </div>
      <div ref={techsRef}>
        <Techs />
      </div>
      <div ref={socialRef}>
        <Socials socials={props.socials!} />
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

