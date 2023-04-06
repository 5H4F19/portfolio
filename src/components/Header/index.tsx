import { Popover, } from '@headlessui/react'
import { c } from '@/utils/c'
import Image from 'next/image'
import { Nav } from '@/interface'
import { scrollTo } from '@/utils/ref'
import { catty, eudo_sans } from '@/utils/font'



export function Header({ items }: { items: Nav[] }) {
  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex justify-between items-center my-5'>
        <div style={catty.style} className='text-5xl text-white'>
          Shafiq S
          <span className='text-6xl font-sans text-green-500 -translate-y-3'>.</span>
        </div>

        <Popover className="relative">
          <Popover.Button className="focus:outline-none">
            <Image src="/FiAlignRight.svg" height={30} width={30} alt='menu' />
          </Popover.Button>

          <Popover.Panel
            className={c("absolute z-30 right-0 rounded-2xl p-3 bg-gray-600 w-64 h-fit bg-clip-padding backdrop-filter backdrop-blur-2xl overflow-hidden bg-opacity-40 border border-[#46518A]")}>
            <div className="flex flex-col">
              <div className='absolute top-0 z-0 left-12 h-12 w-12 bg-white rounded-lg blur-2xl'></div>
              {items?.map(item => (
                <div
                  style={eudo_sans.style}
                  className='text-white z-10 px-5 mx-1 py-2.5 hover:bg-gradient-to-tr from-primary to-black/0 hover:px-8 transition-all duration-500 rounded-lg capitalize'
                  onClick={() => scrollTo(item.ref)}>
                  {item.name}
                </div>
              ))}
            </div>
          </Popover.Panel>
        </Popover>
      </div>
    </div>
  )
}

