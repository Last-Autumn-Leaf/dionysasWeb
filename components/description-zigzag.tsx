import Image from 'next/image'
import wavyBuddies from '@/public/images/White/Wavy Buddies Choosing Food.svg'
import shinyHappyBriefing from '@/public/images/White/Shiny Happy Briefing.svg'

export default function DescriptionZigZag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Effortlessly Boost Your Restaurant’s Efficiency</h1>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image  className="max-w-full mx-auto md:max-w-none h-auto" src={shinyHappyBriefing} width={540} height={405}  alt={"Features 01"} />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <p className="text-xl mb-4">
                  Our AI-driven platform will become the guardian angel of your restaurant’s operations. By analyzing your historical data, customer feedback,
                   and market trends, the platform will tell you exactly how to optimize staffing, inventory, and menus for maximum profitability.
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
                <h2 className="h2 mb-4">Picture this</h2>
                  <p className="text-xl  mb-4">
                  All your worries about overstaffing, running out of ingredients, and offering an outdated menu become a thing of the past. 
                  With our help, your restaurant will reach new heights of success and customer satisfaction.
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