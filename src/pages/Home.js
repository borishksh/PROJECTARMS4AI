import React, { useEffect, useRef } from 'react';
import ProductStatItem from '../helpers/ProductStatItem';
import Carosal from '../components/Carosal';
import IntroductionGeo from '../components/IntroductionGeo';
import Client from '../components/Client';
import Slider from "react-slick";
import { NavLink  } from "react-router-dom";

import logo from '../assets/arms-logo (1) 1.png';
import elipse1 from '../assets/Ellipse 661.png';
import elipse2 from '../assets/Group 3581.png';
import elipse3 from '../assets/Ellipse 63.png';
import elipse4 from '../assets/Ellipse 64.png';
import group1 from '../assets/Group 3512.png';
import group2 from '../assets/Group 3516.png';
import group3 from '../assets/Group 3517.png';
import group4 from '../assets/Group 3647.png';
import group5 from '../assets/Group 3648.png';
import group6 from '../assets/Group 3649.png';
import group7 from '../assets/Group 3650.png';
import group8 from '../assets/Group 3648 (1).png';
import group9 from '../assets/twitter (1) 1.png';
import group10 from '../assets/linkedin (1) 1.png';
import vector1 from '../assets/Vector 68.png';
import vector2 from '../assets/Vector 69.png';
import rect1 from '../assets/Rectangle130.png';
import rect2 from '../assets/Rectangle 27.png';
import rect3 from '../assets/Rectangle 28.png';
import rect4 from '../assets/Rectangle 29.png';
import rect5 from '../assets/Rectangle 30.png';
import acquire from '../assets/Acquire.gif';
import tranform from '../assets/Transform.gif';
import derive from '../assets/Derive Insights.gif';
import videos from '../assets/world.mp4';

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="hidden lg:block text-[3vw] font-extrabold rounded-[50%] leading-[100%] cursor-pointer w-[max-content] py-[0.5vw] px-[1vw] absolute left-[14vw] top-[18vw]"
      style={{ ...style, display: "block", background: "rgba(48, 48, 48, 0.64)" }}
      onClick={onClick}
    >
      <span>
      &gt;
      </span>
      </div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="hidden lg:block text-[3vw] font-extrabold rounded-[50%] leading-[100%] cursor-pointer w-[max-content] py-[0.5vw] px-[1vw] absolute left-[8vw] top-[18vw]"
      style={{ ...style, display: "block", background: "rgba(48, 48, 48, 0.64)" }}
      onClick={onClick}
    >
      <span>
      &lt;
      </span>
      </div>
  );
}

export default function Home() {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  /*
  <div className='flex mt-[3vw]'>
              <div className='rounded-[50%] mr-[20px] px-[0.6vw] py-[0px] hidden lg:block' style={{backgroundColor: '#303030A3'}}>
                <button type='button' className='text-[2.5vw] text-white leading-none' id="prev">&lt;</button>
              </div>
              <div className='rounded-[50%] bg-grey-700 px-[0.6vw] py-[0px] hidden lg:block' style={{backgroundColor: '#303030A3'}}>
                <button type='button' className='text-[2.5vw] text-white  leading-none' id="next">&gt;</button>
              </div>
            </div>*/

  const observer = useRef(null);

  const listItemsData = [
    {
      id: 'item1',
      number: '01',
      title: 'Acquire',
      description: 'Our platform simplifies the process of preparing satellite images with automated one click tools for data preparation. You can quickly execute basic steps like, merging, mosaicking, layer stacking, spectral index processing etc., in a seamless manner.',
      active: true,
    },
    {
      id: 'item2',
      number: '02',
      title: 'Transform',
      description: 'Our platform streamlines image processing with advanced algorithms that handle image enhancement, data fusion, and integration. You can easily generate processed images with relevant features, such as vegetation indices, weather data, soil characteristics, and more, without any technical hassles.',
      active: false,
    },
    {
      id: 'item3',
      number: '03',
      title: 'Derive insights',
      description: 'Our platform makes analysis a breeze with machine learning and AI-powered tools. With just a few clicks, you can get a decision making about farm wise sucrose prediction and generate accurate sucrose prediction maps. Our user-friendly interface and intuitive workflows enable smooth analysis with actionable insights.',
      active: false,
    },
  ];

  useEffect(() => {

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hh = document.getElementById("howhead");
    const hs = document.getElementById("howsub");
    const hl = document.getElementById("howlist");

    const hiddenElements3 = document.querySelectorAll('.how-img');
    hiddenElements3.forEach((el) => observer.current.observe(el));

    document.addEventListener('scroll', function () {
      
      var rect1 = hh.getBoundingClientRect();
      var rect2 = hl.getBoundingClientRect();
      if((rect1.top / window.innerWidth) * 100 <40)
      {
        hh.style.fontSize = '6vw';
        hh.style.color = 'black';
      }
      if((rect1.top / window.innerWidth) * 100>40)
      {
        hh.style.fontSize = '2vw';
      }
      if((rect2.top / window.innerWidth) * 100<20)
      {
        hh.style.fontSize = '3vw';
      }

      var rect =hs.getBoundingClientRect();
      var isAtTop = (rect.top / window.innerWidth) * 100 <= 15 ;
      if(isAtTop){
        hs.classList.add("fade");
      } else {
        hs.classList.remove("fade");
      }
    });

    var list = document.querySelectorAll('.how-list-item');
    var ilist = document.querySelectorAll('.himg');
    var rede = document.getElementById('rede');
    document.addEventListener('scroll', function () {
      if(ilist.length >=3 ){
        list.forEach((item, index) => {
          const isActive = (item.getBoundingClientRect().top / window.innerWidth) * 100 <= 30;
          item.classList.toggle('active', isActive);
          ilist[index].classList.toggle('active', isActive);
          
          if (isActive) {
            list.forEach((otherItem, otherIndex) => {
              if (otherIndex !== index) {
                otherItem.classList.remove('active');
                ilist[otherIndex].classList.remove('active');
              }
            });
          }
        });
      }

      
      
    });

    const inputMin = 0;
    const inputMax = -40;
    const outputMin = 0;
    const outputMax = 1.5;
    const tech = document.getElementById('technology'); // Replace with your actual element ID
    const carosal = document.getElementById('carosal'); // Replace with your actual element ID

    let techRect = tech.getBoundingClientRect();
    let carosalRect = carosal.getBoundingClientRect();

    function updateFontSize() {
      techRect = tech.getBoundingClientRect();
      carosalRect = carosal.getBoundingClientRect();
      requestAnimationFrame(() => {
        if ((techRect.top / window.innerWidth) * 100 < 7 && (techRect.top / window.innerWidth) * 100 > 3) {
          const mappedValue = (((carosalRect.top / window.innerWidth) * 100) - inputMin) / (inputMax - inputMin) * (outputMax - outputMin) + outputMin;
          tech.style.fontSize = (3 - mappedValue) + 'vw';
        }
      });
    }

    document.addEventListener('scroll', function () {
      setInterval(updateFontSize, 200);
      if((tech.getBoundingClientRect().top/ window.innerWidth) * 100 < 7 ) {
        rede.style.opacity = 0;
      } else {
        rede.style.opacity = 1;
      }
    });

    //const prev = document.getElementById('prev');
    //const next = document.getElementById('next');
    //const moveButton = document.getElementsByClassName('slick-track');
    //let currentPosition = 0;

    /*prev.addEventListener('click', () => {
        if( currentPosition > 0){
          currentPosition--;
          moveButton[0].style.transform  = 'translate3d('+ (-currentPosition * 450) + 'px, 0, 0)';
        }
    });

    next.addEventListener('click', () => {
      if( currentPosition < 4){
        currentPosition++;
        moveButton[0].style.transform  = 'translate3d('+ (-currentPosition * 450) + 'px, 0, 0)';
      }
    });*/


    return () => {
    };
  }, []);  

  

  return (
    <>
      <div className="bg-eclipse-dark relative lg:pb-[100px]">
        <div className='containers'>
          <div className="pb-[200px] lg:pb-[16vh] pt-[200px] lg:pt-[20vh] lg:flex lg:justify-between">
            <h1 className='text-white text-[48px] lg:text-[5vw] leading-none font-extrabold stroke-heading relative z-[3] lg:flex-[3]'>
              Geo - AI<br /> Precision Made <br />Simple
            </h1>
            <div className='lg:pt-[25vh] pt-[50px] relative z-[3] lg:flex-[2] lg:leading-[1.4vw]'>
              <font className="text-white text-[12px] lg:text-[1vw] tracking-[1px] ">
                Revolutionize your geospatial analytics with<br /><font className='a90'>90%+ accuracy</font> through our Geo-AI Platform that<br />empowers users in Agriculture, Infrastructure,<br /> Defence, and Environment sectors to make<br /> informed decisions with ease.
              </font>
            </div>
          </div>
        </div>
        
        <div className="containers mt-[20px] pb-[10px] lg:flex relative z-[3] gap-[2vw]">
          <div className='lg:h-[30vh] lg:w-[20vw] production-item1'>
            <ProductStatItem
              imageSrc={group1}
              number="03"
              title="Continents Serving"
              description="Operating across Asia, America, and Africa, showcasing our global presence and reach." />
          </div>
          <div className="bg-gray-500 h-[4vw] w-[1px] hidden mt-[30px] lg:block"></div>
          <div className='lg:h-[30vh] lg:w-[20vw] mt-10 lg:mt-0 production-item2'>
            <ProductStatItem
              imageSrc={group2}
              number="06"
              title="Government Recognitions and Work Orders"
              description="Celebrating six prestigious government recognitions and work orders, validating our commitment to excellence." />
          </div>
          <div className="bg-gray-500 h-[4vw] w-[0.9px] hidden  mt-[30px]  lg:block"></div>
          <div className='lg:h-[30vh] lg:w-[24vw]  mt-10 lg:mt-0 production-item3'>
            <ProductStatItem
              imageSrc={group3}
              number="04"
              title="Industry Verticals, 12 Ready-to-Deploy Products:"
              description="Excelling in four industry verticals with a range of twelve fully developed and ready-to-deploy products, empowering clients with cutting-edge solutions." />
          </div>
        </div>
        <div>
          <img src={elipse3} alt='' className='absolute top-[0px] right-[0px]  h-[200px] w-[250px] lg:h-[22vw] lg:w-[27vw]'/>
        </div>
        <div>
          <img src={elipse4} alt='' className='absolute top-[7vw] right-[22.5vw] h-[7vw] w-[7vw] hidden lg:block'/>
        </div>
        <div>
          <img src={elipse2} alt='' className='absolute top-[65vh] w-[100%] hidden lg:block' />
        </div>
        <div>
          <img src={elipse1} alt='' className='absolute top-[600px] w-[100%] block lg:hidden' />
        </div>
      </div>

      <div  className='bg-gradient-white relative z-[3]'>
        <div className='containers'>
          <div className='hidden lg:block mx-auto pb-[200px] lg:pb-[20vw] pt-[200px] lg:pt-[10vw]  relative'>
            <div className='flex gap-[2vw]'>
              <div className='flex-[1] pb-[3vw]'>
                <h1 className='text-[1.8vw] font-bold mt-[3vw]'>
                  Leveraging Deep technology and<br/> GEO-AI to automate satellite based<br/> image analysis with Single click 
                </h1>
                <h1 className='text-[2.1vw] font-bold mt-[2.5vw]' style={{color: '#FFB831'}} id="text-changing">
                
                </h1>
                <div className='flex gap-[2.5vw] mt-[4vw]'>
                  <div className='flex-[2]'>
                      <p className='text-[0.8vw] mt-[1vw]'> 
                      Saving cost & manpower up to
                      </p>
                      <h5 className='text-[0.9vw] stroke-title mt-[0.5vw]'>
                        70%
                      </h5>
                  </div>
                  <div className='w-[1px] h-[5vw]' style={{backgroundColor: '#949494'}}>

                  </div>
                  <div className='flex-[3]'>
                      <p className='text-[0.8vw]'>
                      Delivering analysis ready data and<br/> decision making in B2B and B2G<br/> sector offered as 
                      </p>
                      <h5 className='text-[0.9vw] stroke-title  mt-[0.5vw]'>
                      Subscription as a Service (SaaS)
                      </h5>
                  </div>
                </div>
              </div>
              <div className='flex-[1] bg-grey-500 rounded-[2vw] overflow-hidden'>
                  <video width="140%" height="140%" autoPlay={true} muted loop className='worldvideo'>
                    <source src={videos} type="video/mp4"/>
                    Your browser does not support the video tag.
                  </video>
              </div>
            </div>
          </div>
        </div>

        <div className='containers'>
          <div className='mx-auto pb-[200px] lg:pb-[10vw] pt-[200px] lg:pt-[0vw]'>
              <div className='sticky top-[6vw] pb-[35vw] hidden lg:block text-[3vw] font-extrabold how-heading' id="howhead">
                <div className='h-[10vw]'>
                  <font classList='block' style={{color: '#03085D'}}> 
                    How we are doing it ?
                  </font>
                </div>
                
              </div>
              <div className='block lg:hidden text-[35px] font-extrabold'>
                <font style={{color: '#03085D'}}> 
                  How we are doing it ?
                </font>
              </div>
              <div className='block lg:hidden text-[12px] mt-[30px] '>
                <p>
                  With our integrated approach of <font className='text-gradient-blue '>Peparing,</font><font className='text-gradient-blue '> processing,</font> and <font className='text-gradient-blue '>analyzing </font>satellite images, we provide a comprehensive solution for sucrose prediction in sugarcane farming. Our technology-driven approach enables farmers to make data-driven decisions, optimize crop management practices, and improve sugarcane yield and quality.
                </p>
              </div>
              <div className='hidden lg:block text-[1.3vw] leading-[2vw] mt-[-40vh] pl-[30vw]' id="howsub">
                <p>
                  With our integrated approach of <font className='text-gradient-blue font-extrabold'>Preparing,</font><font className='text-gradient-blue font-extrabold'> processing,</font>and <font className='text-gradient-blue font-extrabold'>analyzing </font> satellite images,<br/> we provide a comprehensive solution for sucrose prediction in sugarcane farming. Our  <br/>technology-driven approach enables farmers to make data- riven decisions, optimize <br/>crop management practices, and improve sugarcane yield and quality.
                </p>
              </div>
              <div className='gap-[50px] mt-[100px] lg:mt-[300px] lg:mb-[5vw] justify-center how-holder'>
                <div className='how-img hidden lg:block mb-[10vw]'  id='howlist'>
                  <div className='himg active'>
                    <img src={acquire} alt='' className='h-[30vw] w-[100%] rounded-[2vw]'/>
                  </div>
                  <div className='himg'>
                    <img src={tranform} alt='' className='h-[30vw] w-[100%] rounded-[2vw]'/>
                  </div>
                  <div className='himg'>
                    <img src={derive} alt='' className='h-[30vw] w-[100%] rounded-[2vw]'/>
                  </div>
                </div>
                <div className='how-list hidden lg:block lg:mt-[5vw]'>
                  {listItemsData.map((item) => (
                    <div key={item.id} className={`how-list-item ${item.active ? 'active' : ''}`} id={item.id}>
                      <h6>{item.number}</h6>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>

                <div className='block lg:hidden'>
                {listItemsData.map((item) => (
                  <div key={item.id}>
                    <div className='block lg:hidden rounded-[20px] w-[100%] h-[209px] bg-black'>
                    </div>
                    <div className='how-list-item-small active'>
                      <h6>{item.number}</h6>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
                </div>

              </div>
            </div>
        </div>
      </div>

      <div className='bg-white'>
        <div className='w-[98.9vw] h-[50px] hidden lg:block mt-[15vh] overflow-hidden'>
          <img src={vector1} alt='' className='w-[100%] h-[100%]'/>
        </div>
        <div>
        <font className='ml-[8%] text-[20px] lg:text-[3vw] lg:pb-[50vw] font-extrabold stroke-title block text-center lg:text-left hidden lg:block' style={{color: '#03085D'}} id='technology'>Technology <font style={{color: '#FFB831'}} id='rede'>Redefined</font></font>
        <font className='text-[20px] font-extrabold stroke-title block text-center block lg:hidden' style={{color: '#03085D'}}>Technology <font style={{color: '#FFB831'}} >Redefined</font></font>
          <div className='containers lg:mt-[-60vw]' id='carosal'>
            <div className='mx-auto pb-[100px] lg:pb-[5vw] pt-[10px] lg:pt-[7vw]'>
                <div className='lg:flex lg:gap-[50px] justify-end '>
                  <div className=' lg:w-[45%]'>
                    <font className="text-[12px] lg:text-[1.5vw] leading-snug block text-center lg:text-left mt-[20px] lg:mt-[-3vw]">
                    Experience the future with cutting-edge <br/>geospatial modeling, advanced computer vision,  <br/>
                    and powerful machine learning techniques to  <br/>transform satellite image data into actionable  <br/>insights across diverse sectors.
                    </font>
                  </div>
                  
                </div>
            </div>
          </div>
          <div className='w-[98.9vw] h-[50px] hidden lg:block mt-[10vh]  overflow-hidden'>
            <img src={vector2} alt='' className='w-[100%] h-[100%]'/>
          </div>


          <div className='mx-auto pb-[150px] lg:pb-[15vw] pt-[0px] lg:pt-[15vw]'>
            <div className='carosal-wrapper'>
              <Carosal />
            </div>
          </div>
        </div>

        <div className='mx-auto pb-[150px] lg:pb-[150px] pt-[0px] lg:pt-[150px]'>
          <IntroductionGeo />
        </div>

        <div className='mx-auto pb-[150px]'>
          <Client />
        </div>
      </div>

      <div className='mx-auto  pb-[50px] lg:pb-[5vw] pt-[50px] lg:pt-[5vw'>
        <div className='home-footer relative lg:my-[10vw] my-[200px]'>
          <div className='footer-left px-[8%] lg:pt-[7vw]'>
            <h1 className='stroke-title'>
              Industries <br/>we serve
            </h1>
            
            
          </div>
          <div className='footer-right ' id='footer'>
            <Slider {...settings}>
              <div className='small-slider'>
                <div className="slider-name-bot">
                  <img src={rect1} alt='arms4ai'/>
                  <p style={{paddingTop:'20px', fontSize:'18px'}}>Infrastructure & Real Estate</p>
                </div>
              </div>
              
              <div  className='small-slider'>
                <div className="slider-name-bot">
                  <img src={rect2} alt='arms4ai'/>
                  <p style={{paddingTop:'20px', fontSize:'18px'}}>Agriculture and Energy</p>
                </div>
              </div>
              <div  className='small-slider'>
                <div className="slider-name-bot">
                  <img src={rect3} alt='arms4ai'/>
                  <p style={{paddingTop:'20px', fontSize:'18px'}}>Environment</p>
                </div>
              </div>
              <div  className='small-slider'>
                <div className="slider-name-bot">
                  <img src={rect4} alt='arms4ai'/>
                  <p style={{paddingTop:'20px', fontSize:'18px'}}>Defence</p>
                </div>
              </div>
              <div  className='small-slider'>
                <div className="slider-name-bot">
                  <img src={rect5} alt='arms4ai'/>
                  <p style={{paddingTop:'20px', fontSize:'18px'}}>Academics</p>
                </div>
              </div>
            </Slider>
          </div>




        </div>
      </div>


      <div className='blue-gradient'>
            <div className='containers'>
                  <div className='py-[15vw] '>
                    <h1 className='text-white text-[30px] lg:text-[3vw] stroke-title w-[100%] lg:w-[50%]'>
                    We focus on building solutions that provide
                    </h1>
                    <div className='lg:flex mt-[30px] lg:mt-[6vw] gap-[10vw]'>
                        <div className='flex gap-[20px] lg:gap-[2vw]'>
                          <img src={group4} alt='' className='w-[30px] h-[30px] lg:w-[4vw] lg:h-[4vw]'/>
                          <h2 className='text-[10px] lg:text-[1.3vw] rozha text-white w-[100%] lg:w-[15vw]'>
                          High Efficiency and <br/>Productivity
                          </h2>
                        </div>
                        <div className='flex gap-[20px]  lg:gap-[2vw] mt-[20px] lg:mt-[0px]'>
                          <img src={group5} alt='' className='w-[30px] h-[30px] lg:w-[4vw] lg:h-[4vw]'/>
                          <h2 className='text-[10px] lg:text-[1.3vw] rozha text-white w-[100%] lg:w-[15vw]'>
                          Infrastructure and high<br/>Resource Economy
                          </h2>
                        </div>
                        <div className='flex gap-[20px]  lg:gap-[2vw] mt-[20px] lg:mt-[0px]'>
                          <img src={group7} alt='' className='w-[30px] h-[30px] lg:w-[4vw] lg:h-[4vw]'/>
                          <h2 className='text-[10px] lg:text-[1.3vw] rozha text-white w-[100%] lg:w-[15vw]'>
                          Process <br/>Automation
                          </h2>
                        </div>
                    </div>
                    <div className='lg:flex mt-[30px] lg:mt-[4vw] gap-[10vw]'>
                        <div className='flex gap-[20px]  lg:gap-[2vw]'>
                          <img src={group8} alt='' className='w-[30px] h-[30px] lg:w-[4vw] lg:h-[4vw]'/>
                          <h2 className='text-[10px] lg:text-[1.3vw] rozha text-white w-[100%] lg:w-[15vw]'>
                          Better Utilization <br/>of Data
                          </h2>
                        </div>
                        <div className='flex gap-[20px]  lg:gap-[2vw] mt-[20px] lg:mt-[0px]'>
                          <img src={group6} alt='' className='w-[30px] h-[30px] lg:w-[4vw] lg:h-[4vw]'/>
                          <h2 className='text-[10px] lg:text-[1.3vw] rozha text-white w-[100%] lg:w-[15vw]'>
                          Measurement <br/>Accuracy
                          </h2>
                        </div>
                    </div>
                  </div>  
            </div>
      </div>

      <div className=' hidden lg:block white-pink'>
            <div className='mt-[200px] lg:mt-[20vw] containers'>  
                  <h1 className='text-center text-[30px] lg:text-[2vw] stroke-title'>
                  Modernize how you buy carbon credits. Get started with Arms 4 AI today.
                  </h1>
                  <div className='flex justify-center'>
                    <div className='mt-[5vw] py-[1vw] px-[2vw] blue-gradient-button w-[max-content] rounded-[5vw]'>
                      <p className='text-[1vw] text-white'>
                        Contact us
                      </p>
                    </div>
                  </div>
                  <div className='mt-[6vw] flex gap-[10vw]'>
                    <div className='flex-[4]'>
                       <img src={logo} alt='' className='w-[6vw] h-[3vw]'/> 
                       <p className='mt-[2vw] text-[1vw] w-[30vw]'>
                          Arms4AI utilises emerging technologies from the 4th industrial revolution like Artificial intelligence (AI), deep learning and machine learning which effectively bridges the technology and capability gap.We provide end to end solutions having “economy of effort, scalability, better efficiency and optimisation.”
                        </p>
                        <div className='flex mt-[5vw] gap-[3vw]'> 
                            <div className='w-[100%]'>
                              <h2 className='text-[1vw] rozha font-extrabold' style={{color: '#03085D'}}>
                                Company
                              </h2>
                              <div className='flex justify-between w-[100%] mt-[1vw]'>
                                <NavLink to="/about">
                                  <p className='text-[1vw] font-extrabold'>
                                      About us
                                  </p>
                                </NavLink>
                                <NavLink to="/product">
                                <p className='text-[1vw] font-extrabold'>
                                    Product
                                </p>
                                </NavLink>
                                <NavLink to="/industry">
                                <p className='text-[1vw] font-extrabold'>
                                    Industry Verticals
                                </p>
                                </NavLink>
                                <NavLink to="/resources">
                                <p className='text-[1vw] font-extrabold'>
                                    Resources
                                </p>
                                </NavLink>
                              </div>
                              
                            </div>
                            <div className='h-[4vw] w-[1px] ' style={{backgroundColor: '#949494'}}>

                              </div>
                              <div>
                                <h2 className='text-[1vw] rozha font-extrabold w-[max-content]' style={{color: '#03085D'}}>
                                  Connect with us
                                </h2>
                                <div className='flex gap-[2vw]'>
                                  <img src={group9} alt='' className='h-[1.3vw] w-[1.3vw] mt-[1vw]'/>
                                  <img src={group10} alt='' className='h-[1.3vw] w-[1.3vw] mt-[1vw]'/>
                                </div>
                              </div>
                        </div>
                    </div>
                    <div className='flex-[3]'>
                        <div className='blue-gradient px-[2vw] py-[4vw] rounded-[1vw]'>
                           <h2 className='text-white text-[1.5vw] rozha'>
                           Subscribe to our Newsletter
                            </h2> 
                            <p className='text-white text-[0.8vw] mt-[2vw]'> 
                            Modernize how you buy carbon credits. Get started with <br/>Arms 4 AI today.
                            </p>
                            <p className='text-white text-[0.8vw] mt-[2.5vw] mb-[0.5vw]'>
                            Email
                            </p>
                            <div className='flex gap-[2vw]'>
                            <input type='text' className='rounded-[3vw] flex-[4] text-[1vw]'/>
                            <div className='flex-[1] py-[0.5vw] px-[1.5vw] blue-gradient-button w-[max-content] rounded-[3vw]'>
                              <p className='text-[0.8vw] text-white text-center'>
                                Contact us
                              </p>
                            </div>
                            </div>
                           

                        </div>
                    </div>
                  </div>
            </div>
            <div className='w-[100%] h-[1px] mt-[10vw] hidden lg:block' style={{backgroundColor: '#949494'}}>

            </div>
            <div className='flex justify-between containers'>
                <p className='text-[0.8vw] my-[1vw]'>
                Copyright © 2023 Arms4ai Private Limited
                </p>
                <div className='flex gap-[5vw]  my-[1vw]'>
                  <p className='text-[0.8vw]'>
                  Terms of Use
                  </p>
                  <p className='text-[0.8vw]'>
                  Privacy Policy
                  </p>
                  <p className='text-[0.8vw]'>
                  Copyright & Intellectual Property Policy
                  </p>
                </div>
            </div>
      </div>

      

    </>
  )
}
