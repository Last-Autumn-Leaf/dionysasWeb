'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import feat1 from 'public/images/White/image_feature_1.svg';
import feat2 from 'public/images/White/image_feature_2.svg';
import feat3 from 'public/images/White/image_feature_3.svg';
import feat4 from 'public/images/White/image_feature_4.svg';
import feat5 from 'public/images/White/image_feature_5.svg';

const Features = () => {
  const features = [
    { feat: feat1, text: 'RestoVision',
      desc:"Our AI-driven Sales Forecasting tool provides accurate predictions based on data analysis,\n ensuring optimal inventory management and higher profitability" },
    { feat: feat4, text: 'Smart Inventory Management',
      desc:'Our Smart Inventory Management solution uses AI to monitor inventory in real-time,\n reducing waste and boosting cost efficiency for increased profits' },
    { feat: feat3, text: 'Comprehensive Management Assistance Tool',
      desc:'Elevate customer satisfaction with our AI-driven Customer Experience tool,\n offering tailored recommendations and enhancing overall dining enjoyment' },
    { feat: feat2, text: 'Automated Scheduling Tool',
      desc:'Enhance operational efficiency with our Efficient Staff Management tool,\n optimizing shifts and skills for exceptional service and customer satisfaction' },
  ];

  const containerRef = useRef(null);
 

  const NoPricing=false;

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6v">
          <div className="pt-12 md:pt-20  text-center">
            <h2 className="h2 mb-4">Our products</h2>
            
                  <p className="p text-xl  mb-4">
                    Harness the power of innovation to optimize every facet of your restaurant, achieving remarkable efficiency, profitability, and positive impact with our AI-based solutions.
                  </p>
            <div ref={containerRef}  className="flex flex-wrap justify-center mt-4 mb-4">
              {features.map((feature, index) => {
                return (
                  <div key={index}  className="group relative m-2 flex justify-center">
                    <div 
                      className="bg-bluesea p-8 m-4 rounded-3xl max-md:w-32 max-md:h-32 w-52 h-52 "
                      >
                      <div className=" w-16 h-16  mx-auto">
                        <Image 
                          src={feature.feat} 
                          alt={`Feature ${index + 1}`} 
                        />
                      </div>
                      <h3 className="h3 max-md:text-xs text-lg text-center text-white font-bold mb-2">{feature.text}</h3>
                    </div>
                    <span className="absolute  top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-lg text-white group-hover:scale-100">✨ {feature.desc}</span>
                  </div>
                );
              })}

            </div>
          </div>
        
          <div className="relative">

</div>

        {NoPricing&&
        <div>
          <h2 className="h2 mb-4 ">Pricing</h2>
          <div className="flex flex-col md:flex-row md:col justify-center mt-4 md:space-x-20 space-y-10">

            <div className='bg-bluesea text-white rounded-3xl p-16'>
              <h3 className=' font-bold h3 tracking-wide'>Kickstarter</h3>
              <h3 className='h3 text-right font-extrabold text-orange'>$299</h3>
              <ul className="h4 list-disc">
                <li> Basic Dashboard</li>
                <li> One Feature</li>
                <li> Weekly forecast</li>
                <li> Email support</li>
              </ul>
            </div>

            <div className='bg-bluesea text-white rounded-3xl p-16'>
              <h3 className=' font-bold h3 tracking-wide'>Pro</h3>
              <h3 className='h3 text-right font-extrabold text-orange'>$599</h3>
              <ul className="h4 list-disc">
                <li> Customization</li>
                <li> API access</li>
                <li> 24/7 support</li>
              </ul>
            </div>
          

            <div className='bg-bluesea text-white rounded-3xl p-16'>
              <h3 className=' font-bold h3 tracking-wide'>Kickstarter</h3>
              <h3 className='h3 text-right font-extrabold text-orange'>$299</h3>
              <ul className="h4 list-disc">
                <li> Basic Dashboard</li>
                <li> One Feature</li>
                <li> Weekly forecast</li>
                <li> Email support</li>
              </ul>
            </div>
          </div>
        </div>
        }
      </div>
    </section>
  );
};

export default Features;
