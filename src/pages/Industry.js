import React from 'react';
import Sectionbar from '../components/Sectionbar';

import elipse2 from '../assets/Ellipse 59 (1).png';
import image1 from '../assets/Group 3494.png';

export default function Industry() {
  return (
    <>
        <div className="bg-eclipse-dark relative">
          <div className='containers'>
            <div className="pb-[50px] lg:pb-[5vw] pt-[200px] lg:pt-[15vw] ">
              <h1 className='text-white text-center text-[50px] lg:text-[4vw] leading-normal font-extrabold stroke-title relative z-[3]'>
              Industry Wise Use Cases
              </h1>
              <div className='containers overflow-hidden hidden lg:block w-[100%] lg:mt-[16vw] mt-[50px] relative z-[3]'>
                  <img src={image1} alt='' className='w-[100%]' >
                  </img>
              </div>
            </div>
          </div>

          <div>
            <img src={elipse2} alt='' className='absolute top-[28vw] right-0 z-[0] w-[100%] h-[100vw] hidden lg:block' />
          </div>
        </div>
        
        <Sectionbar/>
    </>
  )
}
