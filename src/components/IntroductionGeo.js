import React, { useEffect } from 'react';
import group1 from '../assets/Group 3593 (1).png';
import group2 from '../assets/Group 3646.png';
import group3 from '../assets/Group 3541-1.png';
import './intro.css';

export default function IntroductionGeo() {
  useEffect(() => {
    var intro = document.getElementById('intro-geo');
    var introHead = document.getElementById('intro-holder');
    const fadingel1 = document.querySelectorAll('.prepare-div');
    const fadingel3 = document.querySelectorAll('.objective');
    const fadingel4 = document.querySelectorAll('.objective-details');
    const fadingel5 = document.querySelectorAll('.objective-list');
    const fadingel6 = document.querySelectorAll('.prepare');
    document.addEventListener('scroll', function () {
      var rect = intro.getBoundingClientRect();
      var rectHead = introHead.getBoundingClientRect();
      if((rectHead.top/ window.innerWidth) * 100 <0)
      {
        intro.style.transition = '0.5s';
      } else {
        introHead.style.background = 'transparent';

        intro.style.transition = '0s';
      }
      if((rectHead.top/ window.innerWidth) * 100<-20)
      {
        intro.style.opacity = '0';
      } else {
        intro.style.opacity = '1';
      }
      if((rect.top/ window.innerWidth) * 100<80 && (rect.top/ window.innerWidth) * 100>20)
      {
        intro.style.fontSize = (100-((rect.top/ window.innerWidth) * 100))*0.05 +'vw';
      }

      fadingel1.forEach((el) => fading(el));
      fadingel3.forEach((el) => fading(el));
      fadingel4.forEach((el) => fading(el));
      fadingel5.forEach((el) => fading(el));
      fadingel6.forEach((el) => fading(el));
      function fading(el){
        var rect1 = el.getBoundingClientRect();
        var isAtTop = rect1.top <= 100;
        if(isAtTop){
          el.classList.add("fade");
        } else {
          el.classList.remove("fade");
        }
      }
    });

  }, []);

  return (
    <div>
      
      <div className='introducing-heading containers' id='intro-holder'>
        <h1 id='intro-geo' className='intro-geo-h hidden lg:block text-gradient-heading'>Introducing Geo - AI Platform</h1>    
        <h1 id='intro-geo-small' className='intro-geo-h-small block lg:hidden text-[24px] text-gradient-heading'>Introducing <br/>Geo - AI Platform</h1>     
      </div>
      <div className='containers'>
        <div className='intro-holder-1 lg:flex lg:gap-[10vw]'>
          <div className='intro-left lg:flex-[2]'>
              <h1 className='text-[20px] lg:text-[1.4vw]'>
                <font className='stroke-title'>PREPARE</font> <font className="font-[100]" > AI</font>
              </h1>
              <div className='h-[1px] w-[100%] mb-[50px] lg:mb-[2.5vw]' style={{backgroundColor:'#FFB831'}}>

              </div>
            <div className='prepare-div'>
              <h3 className='prepare-head'>Simplify pre-processing <br/>tasks</h3>
              <font className='prepare-p'>Remotely sensed images often contain noise and errors,<br/>requiring image pre-processing techniques. At ARMS 4 AI,<br/>our one click automated tools streamline the process,<br/>including basic satellite image preparation tasks such as<br/>layer stacking, spectral index calculation, merging,<br/>mosaicking, and more, ensuring high-quality images for<br/>advanced analysis.</font>
            </div>
          </div>
          <div className='intro-right lg:flex-[2]'>
              <div className='phone'>
                <img src={group1} alt=''  style={{width: '80%'}}/>
              </div>
          </div>
        </div>
      </div>
      
      <div className='containers'>
        <div className='intro-holder  lg:flex flex-row-reverse'>
          <div className='intro-left lg:flex-[2]'>
              <h1 className='text-[20px] lg:text-[1.4vw]'>
                <font className='stroke-title'>PROCESS</font> <font className="font-[100]" > AI</font>
              </h1>
              <div className='h-[1px] w-[100%] mb-[50px] lg:mb-[2.5vw]' style={{backgroundColor:'#FFB831'}}>

              </div>
            <div className='prepare-div'>
              <h3 className='prepare-head'>Instant data extraction</h3>
              <font className='prepare-p'>Process AI provides one-click tools for feature extraction,<br/>sensor fusion, and change detection. Simply upload your<br/>satellite imagery, select the desired features, and let our<br/>platform handle the rest. Our tools deliver results in<br/>minutes, helping you streamline your data extraction<br/>process and unlock valuable insights from your satellite<br/>imagery.</font>
            </div>
          </div>
          <div className='intro-right lg:flex-[2]'  style={{ paddingTop: '30px', paddingRight: '60px'}}>
              <div className='phone'>
              <img src={group2} alt='' style={{width: '80%', marginLeft: '0'}}/>
              </div>
          </div>
        </div>
      </div>
      
      <div className='containers'>
        <div className='intro-holder  lg:flex  lg:gap-[10vw]' style={{paddingBottom: '50px'}}>
          <div className='intro-left lg:flex-[2]'>
            <h1 className='text-[20px] lg:text-[1.4vw]'>
                <font className='stroke-title'>ANALYSE</font> <font className="font-[100]" > AI</font>
              </h1>
              <div className='h-[1px] w-[100%] mb-[50px] lg:mb-[2.5vw]' style={{backgroundColor:'#FFB831'}}>

              </div>
            <div className='prepare-div'>
              <h3 className='prepare-head'>Data to Decisions</h3>
              <font className='prepare-p'>Analyze AI offers advanced predictive and prescriptive<br/>analysis for decision making in various verticals. Our<br/>platform provides spatial decision-making capabilities,<br/>delivering timely actionable insights that enable informed<br/>decisions. Streamline data analysis and focus on taking<br/>action, rather than getting bogged down in data<br/>understanding.</font>
            </div>
          </div>
          <div className='intro-right lg:flex-[2]' style={{ paddingTop: '30px' }}>
            <div className='phone'>
              <img src={group3} alt=''  style={{width: '80%'}}/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
