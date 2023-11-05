import React, {useRef, useEffect} from 'react';
import './productlist.css'

import images from '../helpers/Images';

const {
    eclips,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
  } = images;


export default function ProductList() {

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    

    const handleClick1 = () => {
        ref1.current?.scrollIntoView({ behavior: 'auto'}); 
    };

    const handleClick2 = () => {
        ref2.current?.scrollIntoView({ behavior: 'auto'}); 
    };

    const handleClick3 = () => {
        ref3.current?.scrollIntoView({ behavior: 'auto'}); 
    };

    const args1 = [
        {id: 0, text: 'Spatial Indices'},
        {id: 1, text: "Accelerate data retrieval and analysis with spatial indices. Our AI tool organizes geospatial data efficiently, enabling quick access to specific regions of interest based on spatial coordinates.."},
        {id: 2, text: img1},
        {id: 3, text: 'Mosaic'},
        {id: 4, text: "Seamlessly merge multiple raster datasets into a single composite image. Our AI technology ensures a smooth transition between datasets, creating a coherent and continuous mosaic."},
        {id: 5, text: img2},
        {id: 9, text: 'Cloud Detection'},
        {id: 10, text: "Identify and mask cloud-covered areas in satellite imagery automatically. Our AI-driven cloud detection feature ensures accurate data analysis by excluding clouds from further processing, improving the reliability of your results."},
        {id: 11, text: img3},
        {id: 12, text: 'Layer Stacking'},
        {id: 13, text: "Combine multiple spectral bands from satellite imagery into a single multi-band image. Our layer stacking capability allows for comprehensive analysis by leveraging different bands, providing valuable insights into various aspects of the Earth's surface."},
        {id: 14, text: img4},
        ]
    const args2 = [
        {id: 0, text: 'Object Detection'},
        {id: 1, text: "Effortlessly locate and identify objects of interest within  satellite images for surveillance, monitoring, and analysis."},
        {id: 2, text: img5},
        {id: 3, text: 'Automated Image Registration & Sensor Fusion'},
        {id: 4, text: "Precisely align and fuse images from various sources, enabling comprehensive analysis and comparisons."},
        {id: 5, text: img6},
        {id: 6, text: 'Real-Time Change Detection'},
        {id: 7, text: "Stay ahead with continuous monitoring and instant detection of changes in geospatial data."},
        {id: 8, text: img7},
        {id: 9, text: 'Feature Extraction'},
        {id: 10, text: "Uncover crucial insights by automatically extracting patterns and characteristics from extensive datasets."},
        {id: 11, text: img8},
        {id: 12, text: 'Land Use Classification'},
        {id: 13, text: "Categorize land cover types automatically for informed decisions in diverse fields."},
        {id: 14, text: img9},
        ]
    const args3 = [
        {id: 0, text: 'Agriculture'},
        {id: 1, text: "   Empower your agricultural operations with data-driven insights. Analyse AI provides precise crop monitoring, yield prediction, and disease detection. Optimize resource allocation, enhance productivity, and make informed decisions for sustainable agriculture."},
        {id: 2, text: img10},
        {id: 3, text: 'Infrastructure'},
        {id: 4, text: "Streamline infrastructure development and maintenance with our advanced analytics tools. From asset monitoring and predictive maintenance to urban planning and traffic management, Analyse AI enables smart decision-making to ensure safer, more efficient cities."},
        {id: 5, text: img11},
        {id: 6, text: 'Environment'},
        {id: 7, text: "Safeguard the environment with powerful analytics capabilities. Analyse AI facilitates environmental monitoring, climate change analysis, and natural disaster assessment. Make proactive decisions for conservation and sustainable resource management."},
        {id: 8, text: img12},
        {id: 9, text: 'Defense'},
        {id: 10, text: "Bolster national security and defense operations with data-driven insights. Analyse AI offers intelligence gathering, threat detection, and anomaly recognition. Strengthen situational awareness and strategize with confidence."},
        {id: 11, text: img13},
        ]

    useEffect(() => { 
        var btn1 = document.getElementById('btn-11');
        var btn2 = document.getElementById('btn-21');
        var btn3 = document.getElementById('btn-31');
        var ho1 = document.getElementById('holder1');
        var ho2 = document.getElementById('holder2');
        var ho3 = document.getElementById('holder3');
        var bar = document.getElementById('product-bar');
        document.addEventListener('scroll', function () {
            var rect = bar.getBoundingClientRect();
            var rect1 = ho1.getBoundingClientRect();
            var rect2 = ho2.getBoundingClientRect();
            var rect3 = ho3.getBoundingClientRect();
            if((rect1.top/ window.innerWidth) * 100>10) {
                btn1.classList.add('active');
                btn2.classList.add('active');
                btn3.classList.add('active');
            } if((rect1.top/ window.innerWidth) * 100 <10) {
                btn1.classList.add('active');
                btn2.classList.remove('active');
                btn3.classList.remove('active');
            } if((rect2.top/ window.innerWidth) * 100<10) {
                btn1.classList.remove('active');
                btn2.classList.add('active');
                btn3.classList.remove('active');
            } if((rect3.top/ window.innerWidth) * 100<10) {
                btn1.classList.remove('active');
                btn2.classList.remove('active');
                btn3.classList.add('active');
            }
            if((rect.top/ window.innerWidth) * 100<10)
            {
                bar.style.opacity = '0';
            } else {
                bar.style.opacity = '1';
            }
        });

        function createScrollHandler(elementId,holder) {
            return function() {
                const div = document.getElementById(elementId);
                const hold = document.getElementById(holder);
                if(div)
                {
                    const divTop = div.getBoundingClientRect().top;
                    const holdTop = hold.getBoundingClientRect().top;
                    div.scrollTop = divTop - holdTop -150;
                }
            };
            }
          
        window.addEventListener("scroll", createScrollHandler('ppa-img','holder1'), false);
        window.addEventListener("scroll", createScrollHandler('ppa-img1','holder2'), false);
        window.addEventListener("scroll", createScrollHandler('ppa-img2','holder3'), false);

    }, []);

    const PPAHolder = ({ title, description, image }) => (
        <div className='ppa-holder lg:flex lg:mt-[10vw] gap-[7vw]'>
          <div className='ppa-right flex-[1]'>
            <div className='ppa-not-none relative'>
              <img src={eclips} alt='' className='eclips-product h-[40px] lg:h-[4vw] absolute left-[-2.5vw] top-[-1vw]' />
              <h3 className='text-[24px] lg:text-[1.5vw] stroke-title pb-[10px] lg:pb-[2vw] lg:mt-[13vw] z-[9] relative uppercase'>
                {title}
              </h3>
              <p className='text-[14px] pb-[20px] lg:pb-[0] lg:text-[0.9vw] lg:w-[23vw] lg:font-bold'>
                {description}
              </p>
            </div>
          </div>
          <div className='ppa-img flex-[3] pb-[80px] lg:pb-[0]'>
            <div className='center-img'>
              <img src={image} alt="arms4ai" className='not-ripple1 w-[100%] rounded-[30px]' />
            </div>
          </div>
        </div>
      );
    
      const PPAHolderRev = ({ title, description, image }) => (
        <div className='ppa-holder lg:flex flex-row-reverse lg:mt-[10vw] gap-[7vw]'>
          <div className='ppa-right flex-[1]'>
            <div className='ppa-not-none relative'>
              <img src={eclips} alt='' className='eclips-product h-[40px] lg:h-[4vw] absolute left-[-2.5vw] top-[-1vw]' />
              <h3 className='text-[24px] lg:text-[1.5vw] stroke-title pb-[10px]  lg:pb-[2vw] lg:mt-[13vw] z-[9] relative uppercase'>
                {title}
              </h3>
              <p className='text-[14px] pb-[20px] lg:pb-[0]  lg:text-[0.9vw] lg:w-[23vw] lg:font-bold'>
                {description}
              </p>
            </div>
          </div>
          <div className='ppa-img flex-[3]  pb-[80px] lg:pb-[0]'>
            <div className='center-img'>
              <img src={image} alt="arms4ai" className='not-ripple1 w-[100%]' />
            </div>
          </div>
        </div>
      );

    return (  
        <>
    <div style={{position: 'relative', zIndex: '1',backgroundColor: 'white'}}>
        
        <div className='ppa  hidden lg:block bg-[#EFEAF4] pt-[15vw] pb-[10vw]'>
                <div className='default-product-bar text-[16px] lg:text-[0.8vw] containers flex justify-between' id='product-bar'>
                    <p className='w-[20vw]'>
                        <font className='default-details'>With Prepare AI, you can now handle basic <br/>satellite data preparation jobs in just one click,  <br/>leaving you more time for insightful analysis and  <br/>decision-making. </font>
                    </p>
                    <p  className='w-[22vw]'>
                        <font className='default-details'>Depending on the information to be extracted from <br/> images, we apply different technology on the satellite  <br/>images to extract the base data from satellite images. Like  <br/>buildings, roads, vehicles, water bodies, land use etc. </font>
                    </p>
                    <p  className='w-[20vw]'>
                        <font className='default-details'>Data which is obtained using Process AI, can further  <br/>be used by various stakeholders. Analyze AI provides <br/> advanced analytics by providing timely actionable <br/> insights and helping in decision making</font>
                    </p>
                </div>
        </div>
        <div className='product-bar hidden justify-between w-[10vw] lg:block text-[24px] lg:text-[1.7vw] containers mt-[-18vw] mb-[250px] lg:mb-[15vw]'>
            <div className=' hidden lg:block w-[20vw]'>
                <button id='btn-11' onClick={handleClick1}><font className="font-extrabold">Prepare</font> AI</button>
            </div>
            <div className=' hidden lg:block w-[22vw]'>
                <button id='btn-21' onClick={handleClick2}><font className="font-extrabold">Process</font> AI</button>
            </div>
            <div  className=' hidden lg:block w-[20vw]'>
                <button id='btn-31' onClick={handleClick3}><font className="font-extrabold">Analyse</font> AI</button>
            </div>
        </div>
        <div className='product-ai-holder containers'>
            <div className='block lg:hidden pb-[50px]'>
                <p className='text-[24px] py-[30px]'><font className='font-extrabold'>Prepare</font> AI</p>
                <p className='text-[12px]'>
                    With Prepare AI, you can now handle basic satellite data preparation jobs in just one click, leaving you more time for insightful analysis and decision-making. Unlock the true potential of your geospatial data with our powerful and user-friendly automation tool like:
                </p>
            </div>
            <div ref={ref1} id="holder1" className='lg:pt-[5vw]'>
                {args1.map((item, index) => (
                    (index % 3 === 0) && ( // Skip every 3rd index
                    <PPAHolder
                        key={index}
                        title={item.text}
                        description={args1[index + 1].text}
                        image={args1[index + 2].text}
                    />
                    )
                ))} 
            </div>
            
            <div className='block lg:hidden pb-[50px]'>
                <p className='text-[24px] py-[30px]'><font className='font-extrabold'>Process</font> AI</p>
                <p className='text-[12px]'>
                Depending on the information to be extracted from images, we apply different technology on the satellite images to extract the base data from satellite images. Like buildings, roads, vehicles, water bodies, land use etc. All these data acts as a base data for further analysis in different domains and industry verticals.
                </p>
            </div>
            <div ref={ref2} id="holder2" className='lg:pt-[5vw]'>
                {args2.map((item, index) => (
                    (index % 3 === 0) && ( // Skip every 3rd index
                    <PPAHolderRev
                        key={index}
                        title={item.text}
                        description={args2[index + 1].text}
                        image={args2[index + 2].text}
                    />
                    )
                ))} 
            </div>
            
            <div className='block lg:hidden pb-[50px]'>
                <p className='text-[24px] py-[30px]'><font className='font-extrabold'>Analyse</font> AI</p>
                <p className='text-[12px]'>
                Although it's a sector agnostic technology, currently we are focusing on these 4 industry verticals: Data which is obtained using Process AI, can further be used by various stakeholders, Govt. organizations, B2B corporate enterprises and individuals. Analyze AI provides advanced analytics of the base data providing timely actionable insights and helping in decision making
                </p>
            </div>
            <div ref={ref3} id="holder3" className='lg:pt-[5vw]'>
                {args3.map((item, index) => (
                    (index % 3 === 0) && ( // Skip every 3rd index
                    <PPAHolder
                        key={index}
                        title={item.text}
                        description={args3[index + 1].text}
                        image={args3[index + 2].text}
                    />
                    )
                ))} 
            </div>
        </div>
        <div className='h-[100px] lg:h-[10vw]'>

        </div>
    </div>
    </>
    )
}
