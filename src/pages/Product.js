import React, {Component} from 'react';
import ProductList from '../components/ProductList';
import PageLoader from '../components/PageLoader';

import elipse2 from '../assets/Ellipse 59123.png';
import elipse1 from '../assets/Ellipse 6612.png';
import image1 from '../assets/Frame691.png';
import group1 from '../assets/Group 36501.png';
import group2 from '../assets/Group 36512.png';
import group3 from '../assets/Group 36523.png';
import group4 from '../assets/Group 36204.png';

export default class Product extends Component {

  componentDidMount() {
    var img1 = document.getElementById('about-img1');
    if (img1 !== null) {
      document.addEventListener('scroll', function () {
        if ((window.scrollY/ window.innerWidth) * 100 > 30 && (window.scrollY/ window.innerWidth) * 100 < 70) {
          const newWidth = 50 + ((window.scrollY/ window.innerWidth) * 100)/2;
          console.log(newWidth);
          img1.style.width = newWidth + '%';
        }
      });
    }
  }


  render() {

    return (
      <>
      <PageLoader/>
        <div className="bg-eclipse-dark relative lg:pb-[25vw]">
          <div className='containers'>
            <div className="pb-[200px] lg:pb-[10vw] pt-[200px] lg:pt-[15vw]">
              <h1 className='text-center text-white text-[28px] lg:text-[4vw] leading-tight  font-extrabold stroke-title relative z-[3]'>
              Transform Imagery, Elevate Insights <br/> One click excellence with <font className='golden-text stroke-title'>90% Accuracy</font>
              </h1>
            </div>
            <div className='lg:flex lg:gap-[10vw] justify-center'>
              <div className='flex gap-[20px] lg:gap-[2vw]'>
                  <div>
                    <img src={group4} alt='' className='w-[40px] h-[40px] lg:w-[3vw] lg:h-[3vw]'/>
                  </div>
                  <div className='w-[70%] lg:w-[auto]'>
                    <h2 className='rozha text-[18px] lg:text-[1vw]'>
                    Holistic Solutions
                    </h2>
                    <p className='text-[12px] lg:text-[0.8vw] w-[100%] lg:w-[18vw] leading-snug'>
                    Analyse AI provides comprehensive analytics tools tailored to each domain's unique challenges, ensuring accurate and relevant results.
                    </p>
                  </div>
              </div>
              <div className='flex gap-[20px] lg:gap-[2vw] mt-[30px] lg:mt-[0]'>
                  <div>
                    <img src={group2} alt='' className='w-[40px] h-[40px] lg:w-[3vw] lg:h-[3vw]'/>
                  </div>
                  <div className='w-[70%] lg:w-[auto]'>
                    <h2 className='rozha text-[18px] lg:text-[1vw]'>
                    Precision & Efficiency
                    </h2>
                    <p className='text-[12px] lg:text-[0.8vw] w-[100%] lg:w-[18vw] leading-snug'>
                    Benefit from domain-specific algorithms and AI-driven analytics for precise, time-efficient, and cost-effective outcomes.
                    </p>
                  </div>
              </div>
            </div>
            <div className='lg:flex lg:gap-[10vw] justify-center mt-[0] lg:mt-[5vw]'>
              <div className='flex gap-[20px] lg:gap-[2vw] mt-[30px] lg:mt-[0]'>
                  <div>
                    <img src={group3} alt='' className='w-[40px] h-[40px] lg:w-[3vw] lg:h-[3vw]'/>
                  </div>
                  <div className='w-[70%] lg:w-[auto]'>
                    <h2 className='rozha text-[18px] lg:text-[1vw]'>
                    Holistic Solutions
                    </h2>
                    <p className='text-[12px] lg:text-[0.8vw] w-[100%] lg:w-[18vw] leading-snug'>
                    Analyse AI provides comprehensive analytics tools tailored to each domain's unique challenges, ensuring accurate and relevant results.
                    </p>
                  </div>
              </div>
              <div className='flex gap-[20px] lg:gap-[2vw] mt-[30px] lg:mt-[0]'>
                  <div>
                    <img src={group1} alt='' className='w-[40px] h-[40px] lg:w-[3vw] lg:h-[3vw]'/>
                  </div>
                  <div className='w-[70%] lg:w-[auto]'>
                    <h2 className='rozha text-[18px] lg:text-[1vw]'>
                    Precision & Efficiency
                    </h2>
                    <p className='text-[12px] lg:text-[0.8vw] w-[100%] lg:w-[18vw] leading-snug'>
                    Benefit from domain-specific algorithms and AI-driven analytics for precise, time-efficient, and cost-effective outcomes.
                    </p>
                  </div>
              </div>
            </div>

          </div>
        <div>
          <img src={elipse2} alt='' className='absolute top-[28vw] w-[100%] hidden lg:block' />
          <img src={elipse1} alt='' className='absolute top-[400px] w-[100%] block lg:hidden' />
        </div>
      </div>

        <div className='containers py-[200px] lg:py-[15vw]' style={{position: 'relative', zIndex: '3',backgroundColor: '#EFEAF4'}}>
            <div className='about-hero'>
              <div className='about-hero-img pb-[10vw] pt-[100px] lg:pt-[0]' style={{display: 'flex', justifyContent: 'center'}}>
                <img src={image1} alt='arms4ai' id='about-img1' className='w-[50%] hidden lg:block'/>
                <img src={image1} alt='arms4ai' className='w-[100%] block lg:hidden'/>
              </div> 
            </div>
        </div>

        <ProductList/>
      </>
    )
  }
}