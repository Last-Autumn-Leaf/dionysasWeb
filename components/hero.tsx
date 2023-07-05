import Image from 'next/image'
import bgImageWhite from '@/public/images/White/Rectangle 6.png'
import bgImageBlack from '@/public/images/Black/Rectangle 6.png'
import Logo from '@/public/images/Logo.svg'
import coloredBg from '@/public/images/Fond stylé.svg'

export default function Hero() {
  
  return (
    <section className="relative">
      <div className="left-0 bottom-0 bg-cover bg-center lg:block pointer-events-none items-center justify-center p-7" 
      aria-hidden="true" data-aos="fade-up" data-aos-delay="400"
      style={{backgroundImage:`url('${bgImageBlack.src}')`}}>
        
        <div className="bg-clip-padding  bg-contain bg-center bg-no-repeat text-center py-20"// bg-origin-content
        //style={{backgroundImage:`url('${coloredBg.src}')`}}
        >
          
          <Image src={Logo} alt="Logo"  className="mx-auto pointer-events-none" aria-hidden="true" />
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Revolutionize </span>
            Your 
          </h1>
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
          Restaurant with AI
          </h1>
          
          <button className="text-black font-bold py-2 px-4 rounded bg-white">
            Join the revolution
          </button>
          
        </div>
      </div>

    </section>
  )
}