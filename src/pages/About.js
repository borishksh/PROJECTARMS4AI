import React,{Component} from 'react';
import { NavLink  } from "react-router-dom";
import images from '../helpers/Images';
import PageLoader from '../components/PageLoader';


const {
  elipse2,
  jagriti,
  siddham,
  himanshu,
  twiter,
  linkedn,
  dabas,
  shidarth,
  nitesh,
  anubav,
  divyansh,
  mondal,
  thapur,
  chart,
  satellite,
  evelop,
  human,
  admed,
  pk,
  logo,
  group9,
  group10,
} = images;
 
export default class 
About extends Component {
  state = {
    imgIndex: 1,
  };

  componentDidMount() {
    var mission1 = document.getElementById("mission1");
    var mission2 = document.getElementById("mission2");
    var mission3 = document.getElementById("mission3");
    document.addEventListener("scroll", function () {
      var rect1 = mission1.getBoundingClientRect();
      var rect2 = mission2.getBoundingClientRect();
      var rect3 = mission3.getBoundingClientRect();
      if ((rect1.top / window.innerWidth) * 100 <= 18) {
        mission1.classList.add("active");
        mission2.classList.remove("active");
        mission3.classList.remove("active");
      }
      if ((rect2.top / window.innerWidth) * 100 <= 18) {
        mission1.classList.remove("active");
        mission2.classList.add("active");
        mission3.classList.remove("active");
      }
      if ((rect3.top / window.innerWidth) * 100 <= 18) {
        mission1.classList.remove("active");
        mission2.classList.remove("active");
        mission3.classList.add("active");
      }
    });
  }

render() {

  
  const teamMembers = [
    {
      name: 'MR R C ',
      sur: 'DABAS',
      role: 'DIRECTOR',
      linkedin: '',
      image: dabas,
    },
    {
      name: 'JAGRITI ',
      sur: 'DABAS',
      role: 'CEO AND FOUNDER',
      linkedin: 'https://www.linkedin.com/in/jagriti-dabas-ab783991',
      image: jagriti,
    },
    {
      name: 'SIDDHAM ',
      sur: 'GAUR',
      role: 'LEADING THE OPERATIONS',
      linkedin: 'https://www.linkedin.com/in/siddham-gaur-5a5b189a/',
      image: siddham,
    },
    {
      name: 'HIMANSHU ',
      sur: 'CHINWAN',
      role: 'TECHNOLOGY PARTNERSHIPS MANAGER',
      linkedin: 'https://www.linkedin.com/in/himanshu-chinwan-42864b100/',
      image: himanshu,
    },
    {
      name: 'SIDHARRTH ',
      sur: 'KUMAR SINGH',
      role: 'ML ENGINEER EXPERTISE - AUTOMATION AND MODULAR PYTHON SCRIPTING',
      linkedin: 'https://www.linkedin.com/in/sidharrth-kumar-singh-9434071b6/',
      image: shidarth,
    },
    {
      name: 'NITISH ',
      sur: 'KUMAR',
      role: 'DATA SCIENTIST EXPERTISE - DATA MODELING, DATA ANALYSIS AND MLOPS',
      linkedin: '',
      image: nitesh,
    },
    {
      name: 'ANUBHAV ',
      sur: 'SINGH',
      role: 'SOFTWARE DEVELOPMENT ENGINEER EXPERTISE - FRONTEND DEVELOPMENT',
      linkedin: 'https://www.linkedin.com/in/anubhav-singhh',
      image: anubav,
    },
    {
      name: 'DIVYANSH ',
      sur: 'SHARMA',
      role: 'GEOSPATIAL ENGINEER',
      linkedin: 'https://www.linkedin.com/in/divyansh-sharma-796135a2/',
      image: divyansh,
    }
    
  ];

  const advisorMembers = [
    {
      name: 'Dr P.K ',
      sur: 'Joshi',
      role: 'MENTOR Professor School of Environment Science, JNU, New Delhi',
      image: pk,
      linkedn: 'https://www.linkedin.com/in/p-k-joshi-a860869/'
    },
    {
      name: 'Dr Som ',
      sur: 'Mondal',
      role: 'ADVISOR Senior Team Member Reliance- New Energy Solar India',
      image: mondal,
      linkedn: 'https://www.linkedin.com/in/som-mondal-renen/'
    },
    {
      name: 'Dr Sapan ',
      sur: 'Thapar',
      role: 'ADVISOR HoD & Associate Professor Dept of Sustainable Energy & Engineering TERI-SAS, New Delhi',
      image: thapur,
      linkedn: 'https://www.linkedin.com/in/sapan-thapar-430a5950/'
    },
    {
      name: 'Prof. Shakeel ',
      sur: 'Ahmed',
      role: 'ADVISOR & MENTOR Secretary Asian Global Network on Water and Development Information for Arid Lands, Ex Chief Scientist, CSIR-NGRI',
      image: admed,
      linkedn: 'https://www.linkedin.com/in/shakeel-ahmed-75971330/'
    }
  ];

  return (
    <>
    <PageLoader/>
      <div className="bg-eclipse-dark relative">
        <div className='containers'>
          <div className="pb-[200px] lg:pb-[30vw] pt-[200px] lg:pt-[15vw] ">
            <h1 className='text-white text-center text-[50px] lg:text-[4vw] leading-normal font-extrabold stroke-title relative z-[3]'>
            Where Expertise Meets <font className='golden-text'>Innovation</font>
            </h1>
            <div className='lg:pt-[3vw] pt-[20px] relative z-[3]'>
              <p className="text-white text-[12px] text-center lg:text-[1vw] about-head-details lg:px-[23%]">
              Arms 4 AI is a 100% Indian<font className='golden-text stroke-title'> Space-tech</font> startup based out of New Delhi. We specialize in building tailored AI based Geospatial solutions by leveraging multi-disciplinary Geospatial Technologies to develop cutting-edge solutions. ARMS 4 AI stands as the GEO-AI Innovators, charting new territory in transforming data into informed decisions. Our pioneering work spans industries, providing cutting-edge GEO-AI platforms for agriculture, environment, infrastructure, and defense.  
              </p>
            </div>
          </div>
        </div>

        <div>
          <img src={elipse2} alt='' className='absolute top-[35vw] right-0 z-[0] w-[100%] h-[100vw] hidden lg:block' />
        </div>
      </div>

      <div  className='bg-gradient-white  py-[100px] lg:py-[0px] relative z-[3]'>
        <div className='containers relative'>
            <h1 className='text-[24px] lg:text-[2vw] lg:pb-[50vw] leading-normal font-extrabold stroke-title relative z-[3] hidden lg:block'>
            GEO-AI Innovator,<br/> Transforming Data into<br/>  Informed Decisions Across<br/>  Industries in One Click
            </h1>
            <div className='hidden lg:block h-[25vw] w-[45vw] absolute top-[5vw] left-[43vw]' style={{backgroundColor: '#7377BF'}}>
           
            </div>
            <div className='hidden lg:block h-[25vw] w-[45vw] px-[8vw] py-[5vw] absolute top-[20vw] left-[8vw]' style={{backgroundColor: '#F6D9AB'}}>
                <img className='hidden lg:block h-[2.5vw] w-[2.5vw] mb-[2vw]' src={chart} alt=''></img>
                <p className='text-[1vw] hidden lg:block text-[#03085D] font-bold leading-[2vw] tracking-[0.08vw]'>
                We excel in end-to-end automation, moving seamlessly from satellite data preparation to advanced analytics, enabling smarter choices. Leveraging satellite data for comprehensive insights, we are your go-to experts for informed decision-making. Our innovation drives industry transformation through Geo-AI excellence.
                </p>
            </div>

            <div className="about-mission hidden lg:block lg:mt-[10vw] lg:pb-[20vw] lg:h-[120vw]">
              <div className="about-slider active " id="mission1">
                <h3 className='text-[3vw] stroke-title font-extrabold'>
                  Join us on our Mission to<br/> transform the world with<br/> bold ideas
                  and Innovation
                </h3>
                <p> </p>
              </div>
              <div className="about-slider" id="mission2">
                <h3  className='text-[3vw] stroke-title font-extrabold'>
                  Join us on our <font>Mission</font> to <br/>transform the world with<br/>
                  bold ideas and Innovation
                </h3>
                <p className='text-[1vw] pt-[2vw]'>
                  Our vision is to enable the entire Global Geospatial Ecosystem
                  with cutting edge Technology & Solutions Designed and Made in
                  India Product. with appropriate technology and solution that
                  solves the problem of manual scavenging and indefinite time
                  consumption forever that open doors to analysis driven approach
                  further.
                </p>
              </div>
              <div className="about-slider" id="mission3">
                <h3  className='text-[3vw] stroke-title font-extrabold'>
                  Join us on our Mission to<br/> transform the world with<br/> bold ideas
                  and <font>Innovation</font>
                </h3>
                <p className='text-[1vw] pt-[2vw]'>
                  This platform is designed with the base of innovation and
                  business intelligence that provides the user with various
                  solutions like reduced timelines, improved productivity,
                  efficient time utilisation, reduced timelines and optimized
                  business results in a single click that bridges the existing
                  technology and capability gap. Data is the new oil in today’s
                  time and having the domain expertise to use this data for
                  advanced use cases in order to solve problems and generate
                  revenue is what we aim for.
                </p>
              </div>
            </div>
        </div>
      </div>

      <div className='custom-bg-gradient-blue'>
        <div className='containers'>
            <div className="lg:flex py-[15vw]">
              <div className="flex-[1] text-white">
                <h3 className='lg:mt-[5vw] lg:text-[1.5vw] text-[24px]'>MEET THE TEAM</h3>
                <h1 className='mt-[20px] lg:mt-[2vw] lg:text-[2vw] text-[40px] font-extrabold leading-tight'>A <font className='golden-text-ver'>dream</font> team of experts who<br/> make it happen every day.</h1>
              </div>
              <div className="flex-[1] text-white mt-[50px] lg:mt-[0px] ourteam">
                <p className='text-[12px] lg:text-[1vw]'>
                  Our team has a blend of vast experience starting from
                  strategic planning and<br/> operations, over 20 years of domain
                  expertise in geospatial technology, <br/>capabilities to build
                  cutting edge technology driven tools, and an ability to sell<br/>
                  at the right place and at the right moment. We have a perfect
                  amalgamation of<br/> experience, freshness and wisdom to establish
                  our names in the industry.
                  <br />
                  </p>
                  <div className='w-[30%] h-[0.1vw] my-[20px] lg:mt-[3vw] lg:mb-[1vw]' style={{backgroundColor: '#FFB831'}}>

                  </div>
                  <p className='text-[12px] lg:text-[1vw]'>
                  <br />
                  The combination of our team, domain expertise, idea
                  conceptualisation, <br/>current market worth, business traction,
                  network within India and<br/> abroad and most importantly wisdom to
                  apply this technology in image analysis and <br/>produce new
                  innovative solutions give us an edge to get in this venture.
                </p>
              </div>
            </div>
        </div>
      </div>


      <div className='containers mt-[15vw]'>
        <h1 className='lg:text-[3vw] text-[64px] stroke-title'>Team Members</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[3vw] lg:mt-[3vw] mt-[50px]">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-card-img lg:h-[22vw] h-[350px] w-[100%] relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '100%',
                    bottom: '0',
                    position: 'absolute',
                    borderRadius: 13,
                    paddingTop: 60,
                    paddingLeft: 4,
                  }}
                />
              </div>
              <h6 className="mt-[30px] mb-[10px] lg:text-[1.3vw]  lg:mb-[0.5vw] text-[24px] tracking-[2px]">
                <font className="font-extrabold">{member.name}</font>
                <font className="font-normal">{member.sur}</font>
              </h6>
              <div className="card-line"></div>
              <div className="card-footer flex justify-between lg:mt-[1vw]">
                <p className="lg:text-[0.7vw] text-[16px] w-[80%]">{member.role}</p>
                <div className="flex">
                  <a href='/'><img className="mx-[10px] lg:mx-[1vw] w-[20px] h-[20px] lg:w-[1.5vw] lg:h-[1.5vw]" src={twiter} alt="Twitter" /></a>
                  <a href={member.linkedin}><img className=' w-[32px] h-[20px] lg:w-[1.5vw] lg:h-[1.5vw]' src={linkedn} alt="LinkedIn" /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='containers mt-[200px]'>
        <h1 className='text-[64px] stroke-title'>Advisors</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[50px] mt-[50px]">
          {advisorMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-card-img lg:h-[22vw] h-[350px] w-[100%]  relative overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                style={{
                  width: '100%',
                  bottom: '0',
                  position: 'absolute',
                  borderRadius: 13,
                  paddingTop: 60,
                  paddingLeft: 4,
                }}
              />
            </div>
            <h6 className="mt-[30px] mb-[10px] lg:text-[1.3vw]  lg:mb-[0.5vw] text-[24px] tracking-[2px]">
              <font className="font-extrabold">{member.name}</font>
              <font className="font-normal">{member.sur}</font>
            </h6>
            <div className="card-line"></div>
            <div className="card-footer flex justify-between lg:mt-[1vw]">
              <p className="lg:text-[0.7vw] text-[16px] w-[80%]">{member.role}</p>
              <div className="flex">
                <a href={member.linkedin}><img className="mx-[10px] lg:mx-[1vw] w-[20px] h-[20px] lg:w-[1.5vw] lg:h-[1.5vw]" src={twiter} alt="Twitter" /></a>
                <a href={member.linkedin}><img src={linkedn} alt="LinkedIn" className='w-[32px] h-[20px] lg:w-[1.5vw] lg:h-[1.5vw]'/></a>
              </div>
            </div>
          </div>
        ))}

        </div>

      </div>

      <div className='blue-gradient text-white br-none mt-[200px] lg:mt-[10vw]'>
        <div className='containers'>
          <h1 className='text-[28px] lg:text-[3vw] stroke-title pt-[200px] pb-[150px] lg:pt-[12vw] lg:pb-[6vw]'>
          Service Models
          </h1>
          <div className='lg:flex lg:pb-[5vw]'>
            <div className='flex-[1]'>
              <div className='bg-gray-500 h-[100px] w-[100px] lg:h-[4vw] lg:w-[4vw] rounded-[20px] p-[1vw]'>
                <img src={evelop} alt=''className='h-[100%] w-[100%]'/>
              </div>
              <p className='tracking-[6px] py-[20px] lg:py-[1vw] text-[16px] lg:text-[1vw]' style={{color:'#FFB831'}}>
                CAAS
              </p>
              <p className='text-[16px] lg:text-[1vw] rozha'>
              Capability as a Service
              </p>
              <p className='text-[16px] pt-[20px] pb-[200px] lg:text-[0.8vw] lg:pb-[8vw]'>
              Customised stand-alone desktop-based tool, for<br/> enterprise industry offering an end to end<br/> solution for data preparation and geospatial<br/> image analysis with advanced analytics.
              </p>
            </div> 
            <div className='flex-[1]'>
              <div className='bg-gray-500 h-[100px] w-[100px] lg:h-[4vw] lg:w-[4vw] rounded-[20px] p-[1vw]'>
                <img src={human} alt=''className='h-[100%] w-[100%]'/>
              </div>
              <p className='tracking-[6px] py-[20px] lg:py-[1vw] text-[16px] lg:text-[1vw]' style={{color:'#FFB831'}}>
              DAAS
              </p>
              <p className='text-[16px] lg:text-[1vw] rozha'>
              Data as a Service
              </p>
              <p className='text-[16px] pt-[20px] pb-[200px] lg:text-[0.8vw] lg:pb-[8vw]'>
              Customers who require bulk data products in<br/> no time and wish to procure data products<br/> directly.
              </p>
            </div> 
            <div className='flex-[1]'>
              <div className='bg-gray-500 h-[100px] w-[100px] lg:h-[4vw] lg:w-[4vw] rounded-[20px] p-[1vw]'>
              <img src={satellite} alt=''className='h-[100%] w-[100%]'/>
              </div>
              <p className='tracking-[6px] py-[20px] lg:py-[1vw] text-[16px] lg:text-[1vw]' style={{color:'#FFB831'}}>
              SAAS
              </p>
              <p className='text-[16px] lg:text-[1vw] rozha'>
              Subscription as a Service
              </p>
              <p className='text-[16px] pt-[20px] pb-[200px] lg:text-[0.8vw] lg:pb-[8vw]'>
              Online platform based on subscription as per<br/> the user requirement that will offer number of <br/>AI based image processing tools.
              </p>
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
}
