import Image from 'next/image'
import bestFriendsImageWhite from 'public/images/white/Family Values Best Friends.svg'
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
                  <p className="text-xl mb-4">
                  With a team of experts and a track record of success, we’re well on our way to becoming 
                  </p>
                  <p className="text-xl mb-4">the best friend of restaurants.</p>
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
                  <p className="text-xl  mb-4">
                  More than a service provider, Dionysas is your trusted partner. Our success is based on collaboration and mutual understanding. 
                  When you choose Dionysas, you benefit from our unwavering commitment to propelling your business towards its goals. 
                  We work closely with you, understanding your issues and challenges, to create innovative solutions that generate tangible results. 
                  Together, let's unlock your company's full potential and achieve sustainable growth.
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