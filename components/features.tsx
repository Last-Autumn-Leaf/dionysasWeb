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
    { feat: feat1, text: 'Sales Prediction Models' },
    { feat: feat2, text: 'AI-Driven Staff Scheduling' },
    { feat: feat3, text: 'Customer Review Analysis' },
    { feat: feat4, text: 'Inventory Management' },
    { feat: feat5, text: 'Customer Review Analysis' },
  ];

  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 >= features.length ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? features.length - 1 : prevIndex - 1));
  };



  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6v">
          <div className="pt-12 md:pt-20 ">
            <h2 className="h2 mb-4">Features</h2>
            <div ref={containerRef}  className="overflow-hidden  flex flex-col md:flex-row md:col justify-center mt-4 md:space-x-20 space-y-10">
              {features.map((feature, index) => {
                return index<3&&(
                  <div 
                    key={index} 
                    className="bg-bluesea shadow-mg p-8 px-4"
                    style={{borderRadius:'20%'}}
                    >
                    <div className="w-20 h-20 mx-auto mb-4">
                      <Image 
                        src={features[(index +currentIndex)%features.length].feat} 
                        alt={`Feature ${index + 1}`} 
                      />
                    </div>
                    <h3 className="h3 text-lg text-center text-white font-bold mb-2">{features[(index + currentIndex)%features.length].text}</h3>
                  </div>
                );
              })}

            </div>
          </div>
        <div className="flex justify-center mt-4">
          <button
            className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
            onClick={handlePrev}
            aria-label="Previous"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
            onClick={handleNext}
            aria-label="Next"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
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
    </section>
  );
};

export default Features;
