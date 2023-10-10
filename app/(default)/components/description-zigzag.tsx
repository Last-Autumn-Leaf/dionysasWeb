import Image from 'next/image'
import wavyBuddies from 'public/images/White/Wavy Buddies Choosing Food.svg'
import shinyHappyBriefing from 'public/images/White/Shiny Happy Briefing.svg'

export default function DescriptionZigZag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-6 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-2xl mx-auto text-center pb-4 md:pb-6">
            <h1 className="h2 ">Revolutionizing Dining: Where Technology Meets impact</h1>
          </div>

          {/* Items */}
          <div className="grid ">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image  className="max-w-full mx-auto md:max-w-none h-auto" src={shinyHappyBriefing} width={540} height={405}  alt={"Features 01"} />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <p className='p text-xl mb-4 text-bluesea'>Step into the Future of Dining</p>
                  <p className="p text-xl mb-4">
                  Dionysas leads the AI revolution in dining, propelling establishments towards heightened profitability and unparalleled efficiency. Beyond operational performance, we facilitate the transition to an impact-driven realm, where every interaction counts not just for your success, but for a more sustainable and equitable future. Join us on this transformative journey, as we redefine dining for the greater good.
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image  className="max-w-full mx-auto md:max-w-none h-auto" src={wavyBuddies} width={540} height={405}  alt={"Features 01"} />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h1 className="h2 mb-4">Picture this</h1>
                  <p className="p text-xl  mb-4">
                  All your worries about overstaffing, running out of ingredients, and offering an outdated menu become a thing of the past. 
                  At Dionysas, we've cracked the code to make your culinary aspirations a reality, from anticipating customer desires to optimizing kitchen efficiency.
                  </p>
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>
    </section>
  )
}