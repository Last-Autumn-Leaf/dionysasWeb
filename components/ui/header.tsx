'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from 'public/images/Logo.svg'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'
import bwMode from 'public/images/White/🦆 icon _sun outline_.svg'

export default function Header() {

  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }  

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
            <Image src={Logo} alt="colored logo" className="w-20 ml-4"/>
            <Image src={bwMode} alt="black and white toogle" className='mr-4'/>

        </div>
      </div>
    </header>
  )
}
