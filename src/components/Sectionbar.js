import React, {useRef, useEffect} from 'react';
import './sectionbar.css'

import images from '../helpers/Images';

const {
    agri1,
    agri2,
    agri3,
    agri4,
    agri5,
    infra1,
    infra2,
    infra3,
    infra4,
    env1,
    env2,
    env3,
    env4,
    env5,
    env6,
    time1,
    time2,
    time3,
    time4,
} = images;

export default function Sectionbar() {

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);

    const handleClick1 = () => {
        ref1.current?.scrollIntoView({behavior: 'smooth'});
    };

    const handleClick2 = () => {
        ref2.current?.scrollIntoView({behavior: 'smooth'});
    };

    const handleClick3 = () => {
        ref3.current?.scrollIntoView({behavior: 'smooth'});
    };

    const handleClick4 = () => {
        ref4.current?.scrollIntoView({behavior: 'smooth'});
    };

    const handleClick5 = () => {
        ref5.current?.scrollIntoView({behavior: 'smooth'});
    };

    useEffect(() => { 
        var btn1 = document.getElementById('btn-1');
        var btn2 = document.getElementById('btn-2');
        var btn3 = document.getElementById('btn-3');
        var btn4 = document.getElementById('btn-4');
        var btn5 = document.getElementById('btn-5');
        document.addEventListener('scroll', function () {
            if(ref1.current?.getBoundingClientRect().top<=50) {
                btn1.classList.add('active');
                btn2.classList.remove('active');
                btn3.classList.remove('active');
                btn4.classList.remove('active');
                btn5.classList.remove('active');
            } if(ref2.current?.getBoundingClientRect().top<=50) {
                btn1.classList.remove('active');
                btn2.classList.add('active');
                btn3.classList.remove('active');
                btn4.classList.remove('active');
                btn5.classList.remove('active');
            } if(ref3.current?.getBoundingClientRect().top<=50) {
                btn1.classList.remove('active');
                btn2.classList.remove('active');
                btn3.classList.add('active');
                btn4.classList.remove('active');
                btn5.classList.remove('active');
            } if(ref4.current?.getBoundingClientRect().top<=50) {
                btn1.classList.remove('active');
                btn2.classList.remove('active');
                btn3.classList.remove('active');
                btn4.classList.add('active');
                btn5.classList.remove('active');
            } if(ref5.current?.getBoundingClientRect().top<=50) {
                btn1.classList.remove('active');
                btn2.classList.remove('active');
                btn3.classList.remove('active');
                btn4.classList.remove('active');
                btn5.classList.add('active');
            }
          });
    }, []);

    return (
        <>
         <div className='section-bg' style={{backgroundColor: '#EFEAF4', position: 'relative', zIndex:'2', paddingBottom: '100px'}}>
            <div className='h-[100px] lg:h-[10vw]'>

            </div>
            <div className='section-bar py-[1vw] hidden lg:block' style={{ position: 'sticky', zIndex:'4'}}>
                <button id='btn-1' className='text-[20px] lg:text-[1vw]' onClick={handleClick1}>Agriculture</button >
                <button id='btn-2' className='text-[20px] lg:text-[1vw]' onClick={handleClick2}>Infrastructure</button >
                <button id='btn-3' className='text-[20px] lg:text-[1vw]' onClick={handleClick3}>Environment</button >
                <button id='btn-4' className='text-[20px] lg:text-[1vw]' onClick={handleClick4}>Defense</button >
                <button id='btn-5' className='text-[20px] lg:text-[1vw]' onClick={handleClick5}>Academia</button >
            </div>
        
       
            <div className='pt-[30px] lg:pt-[8vw]' ref={ref1}>
                <div className='section2 containers '>
                    <h1 className='text-center text-[20px] lg:text-[3vw] stroke-text text-gradient-heading'>
                    Agriculture and Energy
                    </h1>
                    <div className='flex justify-center'>
                        <p className='text-[10px] lg:text-[1vw] mt-[20px] lg:mt-[3vw] text-center lg:w-[56%]'>
                        Satellite image analysis integrated with AI algorithms can be used to assess and understand agricultural production and pattern in order to guide users about famine, maximize market returns for smallholders, and develop tailored insurance policies to mitigate the impacts of crop failures. Today, we can leverage AI and geospatial technology to predict crop yield and monitor crop health as well, which aims to help users improve their crop yield and to reduce costs
                        </p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-[5vw] my-[50px] lg:my-[5vw]'>
                        <div>
                            <img src={agri1} alt='' className='w-[100%] rounded-[2vw] h-[66%]'/>
                            <h2 className='text-[20px] lg:text-[1.5vw] stroke-title mt-[10px] lg:mt-[2vw] w-[90%]'>
                                Farm Wise Crop yield Estimation and Prediction
                            </h2>   
                        </div>
                        <div>
                            <img src={agri2} alt=''  className='w-[100%]  rounded-[2vw] h-[66%]'/>
                            <h2 className='text-[20px] lg:text-[1.5vw] stroke-title mt-[10px] lg:mt-[2vw] w-[90%]'>
                            Location Wise Soil Moisture Assessment
                            </h2>   
                        </div>
                        <div>
                            <img src={agri3} alt='' className='w-[100%] rounded-[2vw] h-[74%]'/>
                            <h2 className='text-[20px] lg:text-[1.5vw] stroke-title mt-[10px] lg:mt-[2vw] w-[90%]'>
                            Predicting Optimum Time of Crop Harvest
                            </h2>   
                        </div>
                        <div>
                            <img src={agri4} alt=''  className='w-[100%]'/>
                            <h2 className='text-[20px] lg:text-[1.5vw] stroke-title mt-[10px] lg:mt-[2vw] w-[90%]'>
                            Spatial Planning Framework for Agri-waste to Bioenergy
                            </h2>   
                        </div>
                        <div>
                            <img src={agri5} alt='' className='w-[100%]'/>
                            <h2 className='text-[20px] lg:text-[1.5vw] stroke-title mt-[10px] lg:mt-[2vw] w-[90%]'>
                            Quantifying GHG Emission and Carbon Credits
                            </h2>   
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white z-[3] relative py-[30px] lg:py-[8vw]' ref={ref2}>
                <div className='section2 containers' >
                    <h1 className='text-center text-[20px] lg:text-[3vw] stroke-text text-gradient-heading'>
                    Infrastructure & Real Estate
                    </h1>
                    <div className='flex justify-center'>
                        <p className='text-[10px] lg:text-[1vw] mt-[20px] lg:mt-[3vw] text-center lg:w-[56%]'>
                        Technology like Object detection and change detection is a boon for the infrastructure and retail industry. All the objects visible in satellite images like vehicles, roads, buildings etc, if utilized properly hold a massive potential in this industry. Solutions like Road Network Planning, Asset Monitoring (Detection Of Roads/Buildings), Monitoring Urbanisation, Base Map Generation are just the start point. Few use cases to mention are
                        </p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-5 gap-[50px] lg:gap-[6vw] my-[50px] lg:my-[5vw]'>
                        <div className='lg:col-span-3'>
                            <img src={infra1} alt='' className='w-[100%]'/>
                        </div>
                        <div className='lg:col-span-2'>
                            <h2 className='text-[20px] lg:text-[1.5vw] stroke-title mt-[10px] lg:mt-[5vw]'>
                            Car Detection/Parking Lot Detection For Retailer’s Profit/Loss
                            </h2>   
                            <p className='text-[12px] lg:text-[1vw] mt-[10px] lg:mt-[2vw]'>
                            Prediction of retailer’s profits by counting cars on the parking lots. As the number of cars on the parking lot depicts direct relationship with the revenue in a way, “more cars – more customers – more revenue”, if there is an automated algorithm to accurately detect and count cars on satellite imagery at parking lots across the globe and augment this data using other sources (e.g. socioeconomic ones) it’s possible to predict retailers’ profits.
                            </p>
                        </div>
                        <div className='lg:col-span-3'>
                            <img src={infra2} alt='' className='w-[100%]'/>
                        </div>
                        <div className='lg:col-span-2'>
                            <h2 className='text-[20px] lg:text-[1.5vw] stroke-title mt-[10px] lg:mt-[5vw]'>
                            Real Time Road Quality Monitoring from Space
                            </h2>   
                            <p className='text-[12px] lg:text-[1vw] mt-[10px] lg:mt-[2vw]'>
                            By analyzing data from various sources such as satellite imagery, sensors, and crowd-sourced inputs, this technology provides valuable insights into road conditions, change in road construction, congestion, accidents, and other issues. Its utility lies in enabling proactive monitoring, maintenance, optimizing traffic flow, and enhancing overall road safety and efficiency for drivers and authorities.
                            </p>
                        </div>
                        <div className='lg:col-span-3'>
                            <img src={infra3} alt='' className='w-[100%]'/>
                        </div>
                        <div className='lg:col-span-2'>
                            <h2 className='text-[20px] lg:text-[1.5vw] stroke-title mt-[10px] lg:mt-[5vw]'>
                            Building Footprint Extraction
                            </h2>   
                            <p className='text-[12px] lg:text-[1vw] mt-[10px] lg:mt-[2vw]'>
                            This data is extremely useful for estimating property tax assessment, disaster management planning, revenue departments, telecom industry for laying 5G lines etc.
                            </p>
                        </div>
                        <div className='lg:col-span-3'>
                            <img src={infra4} alt='' className='w-[100%]'/>
                        </div>
                        <div className='lg:col-span-2'>
                            <h2 className='text-[20px] lg:text-[1.5vw] stroke-title mt-[10px] lg:mt-[5vw]'>
                            Construction Monitoring
                            </h2>   
                            <p className='text-[12px] lg:text-[1vw] mt-[10px] lg:mt-[2vw]'>
                            Change detection technology plays a significant role in monitoring the construction activities through remote methods. Currently, it's a very stringent process to manage and monitor large scale constructions at various places. But with this technology presented in complete automation, we can easily monitor and track the construction activities at a large scale.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pt-[30px] lg:pt-[8vw]' ref={ref3}>
                <div className='section2 containers '>
                    <h1 className='text-center text-[20px] lg:text-[3vw] stroke-text text-gradient-heading'>
                    Dealing With Environmental Concerns
                    </h1>
                    <div className='flex justify-center'>
                        <p className='text-[10px] lg:text-[1vw] mt-[20px] lg:mt-[3vw] text-center lg:w-[56%]'>
                        In today’s time with one press of the button, one swipe left or right, you can open up new worlds in seconds. If the same technology is put in monitoring natural resources, it can be used quite efficiently to monitor climate change and natural disaster hit areas
                        </p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-[5vw] my-[50px] lg:my-[5vw]'>
                        <div>
                            <img src={env1} alt='' className='w-[100%]'/>
                            <h2 className='text-[20px] lg:text-[1.5vw] stroke-title mt-[10px] lg:mt-[2vw] w-[90%]'>
                            Tree Inventory management/Tree Count Analysis
                            </h2>   
                        </div>
                        <div>
                            <img src={env2} alt=''  className='w-[100%] rounded-[2vw] h-[66%]'/>
                            <h2 className='text-[20px] lg:text-[1.5vw] stroke-title mt-[10px] lg:mt-[2vw] w-[90%]'>
                            Automatic Land Use Land Cover Classification 
                            </h2>   
                        </div>
                        <div>
                            <img src={env3} alt='' className='w-[100%]'/>
                            <h2 className='text-[20px] lg:text-[1.5vw] stroke-title mt-[10px] lg:mt-[2vw] w-[90%]'>
                            Forest Cover Classification
                            </h2>   
                        </div>
                        <div>
                            <img src={env4} alt=''  className='w-[100%]'/>
                            <h2 className='text-[20px] lg:text-[1.5vw] stroke-title mt-[10px] lg:mt-[2vw] w-[90%]'>
                            Automatic Flood Inundation Mapping
                            </h2>   
                        </div>
                        <div>
                            <img src={env5} alt='' className='w-[100%]'/>
                            <h2 className='text-[20px] lg:text-[1.5vw] stroke-title mt-[10px] lg:mt-[2vw] w-[90%]'>
                            Managing & Monitoring Timber Forest Tonnage
                            </h2>   
                        </div>
                        <div>
                            <img src={env6} alt='' className='w-[100%]'/>
                            <h2 className='text-[20px] lg:text-[1.5vw] stroke-title mt-[10px] lg:mt-[2vw] w-[90%]'>
                            Surface and Ground Water Monitoring
                            </h2>   
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white z-[3] relative py-[30px] lg:py-[8vw]' ref={ref4}>
                <div className='section2 containers' >
                    <h1 className='text-center text-[20px] lg:text-[3vw] stroke-text text-gradient-heading'>
                    Timely and Actionable Insight for Defense
                    </h1>
                    <div className='flex justify-center'>
                        <p className='text-[10px] lg:text-[1vw] mt-[20px] lg:mt-[3vw] text-center lg:w-[56%]'>
                        Defense agencies acquire enormous amounts of visual surveillance data a day from various sources and hence the challenge remains not collecting the data, but processing it for strategic information, and this is where machine vision and AI could be of use. AI based analytics, therefore, helps defense leaders make better decisions by identifying objects of military significance:
                        </p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-5 gap-[50px] col-reverse lg:gap-[6vw] my-[50px] lg:my-[5vw]'>
                        <div className='lg:col-span-3 order-last'>
                            <img src={time1} alt='' className='w-[100%]'/>
                        </div>
                        <div className='lg:col-span-2'>
                            <h2 className='text-[20px] lg:text-[1.5vw] stroke-title mt-[10px] lg:mt-[5vw]'>
                            Surveying areas via satellite/vehicle detection
                            </h2>   
                            <p className='text-[12px] lg:text-[1vw] mt-[10px] lg:mt-[2vw]'>
                            A person trying to monitor and analyze the traffic pattern of vehicles moving frequently to and from military installation manually would take time to identify the vehicles of interest and further pass on the information. But an algorithm based on machine learning would be able to establish the pattern of regular flux of cars moving and thus if the change in cars pattern is observed, it would automatically raise an anomaly and would alert the person of this change.
                            </p>
                        </div>
                        <div className='lg:col-span-3 '>
                            <img src={time2} alt='' className='w-[100%] '/>
                        </div>
                        <div className='lg:col-span-2'>
                            <h2 className='text-[20px] lg:text-[1.5vw] stroke-title mt-[10px] lg:mt-[5vw]'>
                            Tunnel Detection using Synthetic Aperture Radar (SAR)
                            </h2>   
                            <p className='text-[12px] lg:text-[1vw] mt-[10px] lg:mt-[2vw]'>
                            Data involves analyzing the radar signals collected by SAR satellites or sensors to identify underground tunnels or man-made structures hidden beneath the Earth's surface. SAR technology can penetrate the ground and provide valuable information about subsurface structures.
                            </p>
                        </div>
                        <div className='lg:col-span-3'>
                            <img src={time3} alt='' className='w-[100%] rounded-[2vw]'/>
                        </div>
                        <div className='lg:col-span-2'>
                            <h2 className='text-[20px] lg:text-[1.5vw] stroke-title mt-[10px] lg:mt-[5vw]'>
                            Border Monitoring
                            </h2>   
                            <p className='text-[12px] lg:text-[1vw] mt-[10px] lg:mt-[2vw]'>
                            It takes humongous effort to guard the border area currently. With the help of Geo-AI platform, sensitive areas of borders could be 
                            </p>
                        </div>
                        <div className='lg:col-span-3'>
                            <img src={time4} alt='' className='w-[100%]'/>
                        </div>
                        <div className='lg:col-span-2'>
                            <h2 className='text-[20px] lg:text-[1.5vw] stroke-title mt-[10px] lg:mt-[5vw]'>
                            Settlements Detection
                            </h2>   
                            <p className='text-[12px] lg:text-[1vw] mt-[10px] lg:mt-[2vw]'>
                            Identifying the change in settlements in any tactical area on a daily basis is of utmost importance.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className='py-[100px] lg:py-[25vw]' ref={ref5}>
                <h1 className='text-center text-[20px] lg:text-[3vw] stroke-text text-gradient-heading'>
                Empowering Academicians
                </h1>
                <div className='flex justify-center containers'>
                    <p className='text-[10px] lg:text-[1vw] mt-[20px] lg:mt-[3vw] text-center lg:w-[56%]'>
                    People from the academic fraternity face regular challenges in basic satellite data preparation and end up wasting more than 70% of project time in just preparing the data for analysis. There are multiple image pre-processing tasks like image mosaic, layer stack, radiometric correction, image enhancement, study area extraction, estimation of spectral indices for analysis etc,. All these tasks are fragmented at different platforms, so managing the data for the project takes a toll. With our platform, all such tasks are available at a single click approach and entire work can be managed with complete automation.
                    </p>
                </div>
            </div>
            
        </div>
        </>
    )
}