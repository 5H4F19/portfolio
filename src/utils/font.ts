import { Baloo_2 } from "next/font/google";
import LocalFont from 'next/font/local'
import { IM_Fell_Great_Primer_SC } from 'next/font/google'

export const baloo = Baloo_2({
  weight: '600',
  subsets: ['latin'],
})
export const cursive = IM_Fell_Great_Primer_SC({
  weight: '400',
  subsets: []
})
export const catty = LocalFont({
  src: [
    {
      path: '../../public/fonts/catty.ttf'
    }
  ]
})

export const eudo_sans = LocalFont({
  src: [
    {
      path: '../../public/fonts/EudoxusSans-Bold.ttf',
      weight: "600"
    },
    {
      path: '../../public/fonts/EudoxusSans-Medium.ttf',
      weight: "500"
    }, {
      path: '../../public/fonts/EudoxusSans-Regular.ttf',
      weight: "400"
    },
    {
      path: '../../public/fonts/EudoxusSans-Light.ttf',
      weight: "300"
    }
  ]
})
