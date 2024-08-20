import { c } from '@/utils/c';
import { baloo } from '@/utils/font';
import Image from 'next/image';
import Script from 'next/script';
import {  useEffect } from 'react';


export default function Hero() {

 useEffect(() => {
    const splineViewer = document.querySelector('spline-viewer');

    if (splineViewer && splineViewer.shadowRoot) {
      const shadowRoot = splineViewer.shadowRoot;

      const hideAnchorTag = () => {
        const anchorTag = shadowRoot.querySelector('a');
        if (anchorTag) {
          anchorTag.style.setProperty('opacity','0')
        } else {
          requestAnimationFrame(hideAnchorTag); // Continue checking until the anchor tag is available
        }
      };

      hideAnchorTag(); // Start the process
    }
  }, []);

  return (
    <div className='relative'>
      <div style={{ zIndex: -1 }} className='h-[75vh] w-screen bg-primary'>
        <div style={{ zIndex: 9 }} className={c(baloo.className,
          'absCenter z-0 text-7xl w-full text-center',
          'text-transparent text-8xl bg-clip-text bg-gradient-to-b from-white to-transparent'
        )}>
           Innovating with passion
        </div>
        <div style={{ zIndex: 0 }} className='absCenter h-96 w-96 bg-[#2D4898] scale-125 blur-[150px] opacity-80'></div>
        <div style={{ zIndex: 10 }} className='absolute flex items-center justify-center inset-0 h-[80vh] bg-transparent'>
          <Image className='absolute left-1/2 bottom-[10%] -translate-x-1/2' src="/rotation.svg" height={50} width={50} alt='rotation' />
          <spline-viewer  url="https://prod.spline.design/FY0sJzauRckyDNHs/scene.splinecode" events-target="global"></spline-viewer>
        </div>
      </div>
    </div>
  )
}
