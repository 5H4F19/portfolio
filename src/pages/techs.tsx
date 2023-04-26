import { Headline } from '@/components/Headline'
import { TechProps, Tool } from '@/interface'
import { eudo_sans } from '@/utils/font'
import Image from 'next/image'
import React from 'react'


const design_tools: Tool[] = [
  { name: 'figma', image: '/figma.svg' },
  { name: 'adobe Xd', image: '/xd.svg' },
  { name: 'illustrator', image: '/ai.svg' },
  { name: 'blender', image: '/blender.svg' }
]
const front_tools: Tool[] = [
  { name: 'react Js', image: '/react.svg' },
  { name: 'vue Js', image: '/vue.svg' },
  { name: 'next Js', image: '/next.svg' },
  { name: 'nuxt Js', image: '/nuxt.svg' },
  { name: 'vite', image: '/vite.svg' }
]
const back_tools: Tool[] = [
  { name: 'node Js', image: '/node.svg' },
  { name: 'express Js', image: '/express.svg' },
  { name: 'nest Js', image: '/nest.svg' },
  { name: 'spring boot', image: '/spring_boot.svg' }
]

const techInfos: TechProps[] = [
  {
    title: 'Design',
    image: {
      url: '/design.svg',
      h: 33,
      w: 33
    },
    description: 'Skilled in designing intuitive and visually appealing digital interfaces',
    tools: design_tools
  },
  {
    title: 'Front-End',
    image: {
      url: '/frontend.svg',
      h: 33,
      w: 45.12
    },
    description: 'Experienced in creating engaging and functional client-side web applications',
    tools: front_tools
  },
  {
    title: 'Back-End',
    image: {
      url: '/backend.svg',
      h: 33,
      w: 33
    },
    description: 'Experienced in building powerful and scalable server-side web applications',
    tools: back_tools
  }
]

export const Techs = () => {
  return (
    <div className='w-[90vw] mx-auto mt-44'>
      <Headline className="mb-5 mx-auto" l={{ title: "Techs", tagline: "Quality tools, quality results" }} />
      <div className='grid w-f[90vw] md:grid-cols-3 gap-10 max-w-5xl mx-auto'>
        {techInfos?.map(({ title, image, description, tools }, idx) => (
          <Tech
            key={title}
            title={title}
            image={image}
            description={description}
            tools={tools}
          />
        ))}
      </div>
    </div>
  )
}

export const Tech = ({ title, image, description, tools }: TechProps) => {
  return (
    <div className='space-y-3'>
      <Image className='my-4' src={image.url} height={image.h} width={image.w} alt='' />
      <div style={eudo_sans.style} className="text-2xl font-medium text-white leading-none">
        {title}
      </div>
      <div style={eudo_sans.style} className="text-sm text-[#7A83A8]">
        {description}
      </div>
      <Tools tools={tools} />
    </div>
  )
}

const Tools = ({ tools }: { tools: Tool[] }) => {
  return (
    <div className='flex gap-3 flex-wrap'>
      {tools?.map(tool => (
        <div key={tool.name} className='center gap-2 px-4 py-1 border border-[#46518A] rounded-full'>
          <Image src={tool.image} height={16} width={16} alt='' />
          <div style={eudo_sans.style} className='text-white text-sm capitalize'>
            {tool.name}
          </div>
        </div>
      ))}
    </div>
  )
}
