import React, { useRef } from 'react';
import {FaAt,FaBuilding,FaLinkedin,FaTwitter,FaFacebook} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import PageLoader from '../components/PageLoader';

export default function Contact() {

  const form = useRef();

  const sendEmail  = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1wa0lvg', 'template_vdkb11f', form.current, '6zNrvNXC1TViiaHXe')
    e.target.reset();
  };

  return (
    <>
    <PageLoader/>
    <div className='containers'>
      <div className='lg:flex my-[150px] justify-between'>
        <div className='contact-left'>
          <h1>
            Connect with us and join our mission
          </h1>
          <div  className='contact-email'>
            <FaAt className="email-icon" />
            <h3>
              Email
            </h3>
          </div>
          <p>
            info@arms4ai.com
          </p>
          <div>
          <FaBuilding className="office-icon" />
          <h3>
          Office Address:
          </h3>
          </div>
          <p>
          Devika Tower Nehru Place ,New Delhi
          </p>
          <div className='social'>
            <FaLinkedin className="linkedin-icon" />
            <FaTwitter className="twitter-icon" />
            <FaFacebook className="facebook-icon" />
          </div>
        </div>
        <div className='contact-right'>
          <form onSubmit={sendEmail} ref={form}>
            <div className='contact-form-row'>
              <label>First name</label>
              <label>Last name</label>
              <input className='contact-input' type='text' name='first_name' placeholder='First Name' required/>
              <input className='contact-input' type='text' name='last_name' placeholder='Last Name' required/>
            </div>
            <div className='contact-form-row'>
              <label className='contact-label-email'>Email</label>
              <input className='contact-input email' type='email' name='email' placeholder='your@email.com' required/>
            </div>
            <div className='contact-form-row'>
              <label>Organisation</label>
              <label>Industry</label>
              <input className='contact-input' type='text' name='organization' placeholder='Organisation' required/>
              <input className='contact-input' type='text' name='industry' placeholder='Industry' required/>
            </div>
            <div className='contact-form-row'>
              <label className='contact-label-message'>Message</label>
              <textarea className='contact-input message' type='text' name='message' placeholder='Your message here' required/>
            </div>
            <input type='submit' value='Submit' className='contact-btn'/>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
