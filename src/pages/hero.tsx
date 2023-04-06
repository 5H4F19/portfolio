import { Ref } from '@/interface';
import { c } from '@/utils/c';
import { baloo } from '@/utils/font';
import Spline from '@splinetool/react-spline';
import Image from 'next/image';



export function Hero({ ref }: Ref) {

  return (
    <div className='relative' ref={ref}>
      <div style={{ zIndex: -1 }} className='h-[75vh] w-screen bg-primary'>
        <div style={{ zIndex: 9 }} className={c(baloo.className,
          'absCenter z-0 text-7xl w-full text-center',
          'text-transparent text-8xl bg-clip-text bg-gradient-to-b from-white to-transparent'
        )}>
          Innovating with passion
        </div>
        <div style={{ zIndex: 0 }} className='absCenter h-96 w-96 bg-[#2D4898] scale-125 blur-[120px] opacity-80'></div>
        <div style={{ zIndex: 10 }} className='absolute flex items-center justify-center inset-0 h-[80vh] bg-transparent'>
          <Image className='absolute left-1/2 bottom-[10%] -translate-x-1/2' src="/rotation.svg" height={50} width={50} alt='rotation' />
          <Spline className='scale-95' style={{ zIndex: 10 }}
            scene="https://prod.spline.design/FY0sJzauRckyDNHs/scene.splinecode" />
        </div>
      </div>
    </div>
  )
}
