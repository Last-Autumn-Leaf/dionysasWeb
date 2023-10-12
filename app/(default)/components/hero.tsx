import Image from 'next/image';
import bgImage from 'public/images/iStockBgSlow.webp';
import Logo from 'public/images/dionysas_with_text.svg';

export default function Hero() {
  return (
    <section className="relative">
      <div
        className="absolute top-0 right-0 bottom-0 left-0 opacity-50 
                    bg-cover bg-center lg:block pointer-events-none 
                  "
        aria-hidden="true"
        data-aos="fade-up"
        data-aos-delay="400"
        style={{ backgroundImage: `url('${bgImage.src}')` ,opacity:0.5}}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center p-7 
      text-center py-20 font-margarine scale-75 md:scale-100">
        <Image
          src={Logo}
          alt="Logo"
          className="mx-auto pointer-events-none"
          aria-hidden="true"
        />
        
        <h1
          className="text-4xl text-sky-900 md:text-7xl leading-tighter tracking-tighter mb-4"
          data-aos="zoom-y-out"
        >
          innovate, impact, inspire:
        </h1>
        <h1
          className="text-4xl md:text-7xl leading-tighter tracking-tighter mb-4"
          data-aos="zoom-y-out"
        >
          Your Restaurant's Journey with AI
        </h1>
        <div className='flex justify-evenly w-1/3'>
        <a href="#newsletter">
          <button
            className="text-white py-2 px-4 rounded bg-orange-500 hover:bg-orange-300 shadow-md m-2"
            style={{
              borderRadius: '12px',
              boxShadow: '0 1px 4px rgba(0, 0, 0, 0.25)',
              minWidth:'100px'
            }}
          >
            Join the revolution
          </button>
        </a>
        <a href="/aboutus">
          <button
            className="text-white py-2 px-4 rounded bg-orange-500 hover:bg-orange-300 shadow-md m-2"
            style={{
              borderRadius: '12px',
              boxShadow: '0 1px 4px rgba(0, 0, 0, 0.25)',
              minWidth:'100px'
            }}
          >
            Learn about us
          </button>
        </a> </div>

      </div>
    </section>
  );
}
