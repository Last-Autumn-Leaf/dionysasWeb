'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import feat1 from 'public/images/White/image_feature_1.svg';
import feat2 from 'public/images/White/image_feature_2.svg';
import feat3 from 'public/images/White/image_feature_3.svg';
import feat4 from 'public/images/White/image_feature_4.svg';
import feat5 from 'public/images/White/image_feature_5.svg';

const Features = () => {  

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index:any) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const features = [
    { feat: feat1, text: 'RestoVision',
      desc:"Designed to be the ultimate analysis and anticipation tool, RestoVision helps restaurants optimize operations while minimizing their ecological footprint." },
    { feat: feat4, text: 'Smart Inventory Management',
      desc:'Real-time inventory optimization reduces waste and ensures economical and ecological management.' },
    { feat: feat3, text: 'Comprehensive Management Assistance Tool',
      desc:'Efficiently plans staff schedules, reducing turnover and ensuring quality customer service.' },
    { feat: feat2, text: 'Automated Scheduling Tool',
      desc:'Streamlines financial oversight, daily operations, and local publicity efforts, with a strong emphasis on facilitating recruitment and training processes.' },
  ];

  const containerRef = useRef(null);
 

  const NoPricing=false;

  return (
    <section className="relative">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6v">
        
      <div className="py-4 md:py-20 border-t border-gray-800">
          <div className="pt-12 md:pt-10  text-center">
            <h2 className="h2 mb-4">Our products</h2>
            
                  <p className="p text-xl  mb-4">
                    Harness the power of innovation to optimize every facet of your restaurant, achieving remarkable efficiency, profitability, and positive impact with our AI-based solutions.
                  </p>
            <div ref={containerRef}  className="flex flex-wrap justify-center mt-4 mb-4">
              {features.map((feature, index) => {
                return (
                  <div key={index}  
                  className={`group relative m-2  ${ hoveredIndex === index ? 'hovered' : '' }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}>
                    {/*p-8*/}
                    <div 
                      className="bg-bluesea m-4 rounded-3xl max-md:w-32 max-md:h-32 w-52 h-52 p-4 flex flex-col justify-center items-center"
                      >
                      {hoveredIndex !== index && 
                        <div className=" mx-auto max-md:w-16 max-md:h-16 w-32 h-32">
                          <Image 
                            src={feature.feat} 
                            alt={`Feature ${index + 1}`} 
                          />
                        </div>}
                      {hoveredIndex !== index && <h3 className="h3 max-md:text-xs text-base text-center text-white font-bold mb-2">{feature.text}</h3>}
                      
                      {hoveredIndex === index && <h3 className="h2 max-md:text-[0.6rem] text-base text-white font-bold">{feature.desc}</h3>}
                    </div>
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
      </div>
    </section>
  );
};

export default Features;
