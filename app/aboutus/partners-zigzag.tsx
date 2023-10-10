'use client'
import Image from 'next/image'
import bestFriendsImageWhite from "public/images/White/Family Values Best Friends.svg"
import HandGiveImageWhite from 'public/images/White/Hands Give.svg'
import { useRef } from 'react';

export default function PartnerZigzag() {
  const values = [
    { text: 'Honest Innovation',
      desc:"Pioneering essential and sustainable solutions" },
    { text: 'Ecological Excellence',
      desc:'Prioritizing sustainability at every stage of our operations.' },
    { text: 'Shared Responsability',
      desc:'Collaborating with communities to tackle major ecological and social challenges in our sector.' },
    { text: 'Social Integrity',
      desc:'Promoting trust, transparency, and fairness in all our interactions.' },
  ];
  
  const containerRef = useRef(null);
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 ">

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
                <h1 className="h2 mb-4">Our Vision</h1>
                  <p className="p text-xl mb-4">
                  Dionysas envisions a future where dining intersects with positive impact, propelled by innovative AI technology to foster a harmonious balance between kitchen operations, front-of-house service, and customer expectations. Whether it's a quaint neighborhood cafe or an international chain, our goal is to equip every establishment with the necessary tools and insights to deliver a memorable experience with each visit. Through our innovations, we aspire to set a new standard of excellence in the industry, positioning Dionysas as the undisputed benchmark for technological solutions in dining. </p>
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
                <div className="md:pl-4 lg:pl-12 xl:pl-16"><h1 className="h2 mb-4">Our mission</h1>
                  <p className="p text-xl  mb-4">
                  The mission of Dionysas is to radically transform the landscape of the restaurant industry. Leveraging the unprecedented potential of artificial intelligence, we create technological tools that enhance operational efficiency, cut superfluous costs, and significantly elevate the quality of th customer experience. In a time where margins are thin and customer expectations are high, Dionysas is committed to providing every restaurant owner with means to succeed and stand out, while fostering a transition towards an impactful and sustainable dining universe as we grow in our sector.</p>
                </div>
              </div>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6v">
          <div className="pt-12 md:pt-20  text-center">
            <h2 className="h2 mb-4">Values</h2>
            
                  <p className="p text-xl  mb-4">
                    Here at Dionysas we follow a set of values we pledge to follow, in our product design, in our relationships with clients and in our internal processes. 
                  </p>
            <div ref={containerRef}  className="flex flex-wrap justify-center mt-4 mb-4">
              {values.map((value, index) => {
                return (
                  <div key={index}  className="group relative m-2 flex justify-center">
                    <div 
                      className="bg-bluesea p-8 m-4 rounded-3xl max-md:w-52 max-md:h-32 w-72 h-32 "
                      >
                      <h3 className="h3 max-md:text-xs text-lg text-center text-white font-bold mb-2">{value.text}</h3>
                    
                      <div className="h3 max-md:text-xs text-sm text-center text-white font-bold mb-2">{value.desc}</div>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
      
</div>

          </div>

        </div>
      </div>
    </section>
  )
}