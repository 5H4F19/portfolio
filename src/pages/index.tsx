import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Nav } from '@/interface'
import { Footer } from '@/components/footer'
import Head from 'next/head'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Techs from '@/components/techs'
import Socials from '@/components/socials'
import About from '@/components/about'
import Contact from '@/components/contact'
import Achievements from '@/components/achievements'
import ActionSection from '@/components/action'



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
    let response = await fetch(`https://portfolio-ashy-ten-44.vercel.app/api/projects`);
    let response2 = await fetch(`https://portfolio-ashy-ten-44.vercel.app/api/socials`);
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
      <Hero />
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

