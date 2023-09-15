import './css/style.css'

import { Inter } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const noHeader=false;
  const noBanner=false;
  return (
    <html lang="en" >
      <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
        {noHeader&&<Header />}
          {children}
          {noBanner&&<Banner />}
        </div>
      </body>
    </html>
  )
}
