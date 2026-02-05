import localFont from 'next/font/local'

export const gopher = localFont({
  src: [
    {
      path: '../../public/fonts/fonnts.com-Gopher_Medium.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-gopher',
})
