import localFont from 'next/font/local'

export const interFont = localFont({
  src: [
    {
      path: '../../public/fonts/inter-medium.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/inter-semibold.otf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/inter-extrabold.otf',
      weight: '800',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-inter'
})

export const croparFont = localFont({
  src: '../../public/fonts/cropar.woff2',
  display: 'swap',
  variable: '--font-cropar'
})
