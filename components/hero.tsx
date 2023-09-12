import Image from 'next/image';
import bgImageWhite from 'public/images/White/Rectangle 6.png';
import bgImageBlack from 'public/images/Black/Rectangle 6.png';
import bgImage from 'public/images/iStockBg.jpeg';
import Logo from 'public/images/Logo N.svg';
import coloredBg from 'public/images/Fond stylé.svg';

export default function Hero() {
  return (
    <section className="relative">
      <div
        className="absolute top-0 right-0 bottom-0 left-0 opacity-50 bg-cover bg-center lg:block pointer-events-none "
        aria-hidden="true"
        data-aos="fade-up"
        data-aos-delay="400"
        style={{ backgroundImage: `url('${bgImage.src}')` ,opacity:0.5}}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center p-7 text-center py-20 font-margarine">
        <Image
          src={Logo}
          alt="Logo"
          className="mx-auto pointer-events-none"
          aria-hidden="true"
        />
        <h1
          className="text-6xl md:text-7xl leading-tighter tracking-tighter mb-4"
          data-aos="zoom-y-out"
        >
          Revolutionize Your
        </h1>
        <h1
          className="text-6xl md:text-7xl leading-tighter tracking-tighter mb-4"
          data-aos="zoom-y-out"
        >
          Restaurant with AI
        </h1>

        <a href="#newsletter">
          <button
            className="text-white py-2 px-4 rounded bg-orange-500 hover:bg-orange-300 shadow-md"
            style={{
              borderRadius: '12px',
              boxShadow: '0 1px 4px rgba(0, 0, 0, 0.25)',
            }}
          >
            Join the revolution
          </button>
        </a>

      </div>
    </section>
  );
}
