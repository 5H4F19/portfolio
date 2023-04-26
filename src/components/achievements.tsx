import { Headline } from '@/components/Headline'
import { eudo_sans } from '@/utils/font';
import Image from 'next/image';
import React from 'react'

const Achievements = () => {
  return (
    <div className='mt-44'>
      <Headline className="mb-14" l={{ title: "Awards", tagline: "Celebrating my successes" }} />
      <div className='max-w-4xl mx-auto'>
        <div className='bg-[url("/timeline.svg")] bg-no-repeat w-fit mx-auto bg-contain h-80 px-10 flex flex-col justify-between'>
          <div className='flex items-center -translate-y-7'>
            <Image src="/award.svg" height={80} width={80} alt='' />
            <div>
              <div style={eudo_sans.style} className='text-lg md:text-3xl font-semibold text-white capitalize'>education category award</div>
              <div style={eudo_sans.style} className='text-sm md:text-lg font-semibold text-[#434B70] capitalize'>bangladesh blockchain oplympiad, 2022</div>
            </div>
          </div>
          <div className='flex items-center -translate-y-7'>
            <Image className='opacity-0' src="/award.svg" height={80} width={80} alt='' />
            <div>
              <div style={eudo_sans.style} className='text-3xl -translate-y-2.5 font-semibold text-[#434B70] capitalize'>
                Comming soon ...
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
export default Achievements
