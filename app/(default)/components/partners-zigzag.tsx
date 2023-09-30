import Image from 'next/image'
import bestFriendsImageWhite from "public/images/White/Family Values Best Friends.svg"
import HandGiveImageWhite from 'public/images/White/Hands Give.svg'

export default function PartnerZigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">We are Dionysas: Your Partner for Optimized Restaurant Service.</h1>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image  className="max-w-full mx-auto md:max-w-none h-auto" src={bestFriendsImageWhite} width={540} height={405}  alt={"Features 01"} />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <p className="p text-xl mb-4">
                  Elevate your role from a mere restaurant owner to a visionary, crafting unforgettable memories for every guest. 
                  With Dionysas, your establishment takes center stage as a realm of innovation, where every interaction is an opportunity to create a lasting impression.
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image  className="max-w-full mx-auto md:max-w-none h-auto" src={HandGiveImageWhite} width={540} height={405}  alt={"Features 01"} />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <p className="p text-3xl mb-4 text-orange">Be a pioneer</p>
                  <p className="p text-xl  mb-4">
                  A tastemaker, a trailblazer in the world of dining. Collaborate with us and watch your restaurant flourish into an iconic destination
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