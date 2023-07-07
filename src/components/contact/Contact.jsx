import React, { useRef } from 'react';
import './contact.css'

import {MdOutlineMail} from 'react-icons/md';
import {RiMessageLine} from 'react-icons/ri';
import {RiSkypeLine} from 'react-icons/ri'

import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hszlcrs', 'template_1dlp1ef', form.current, '3e0gpnaJ_uS8kQTpA')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>hlong.24082k@gmail.com</h5>
            <a href="mailto:hlong.24082k@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <RiMessageLine className='contact__option-icon'/>
            <h4>Messager</h4>
            <h5>Hoang Long</h5>
            <a href="https://m.me/hlong.24082k" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <RiSkypeLine className='contact__option-icon'/>
            <h4>Skype</h4>
            <h5>Long Le</h5>
            <a href="https://join.skype.com/invite/yP8qM51Rbokh" target='_blank'>Send a message</a>
          </article>
        </div> 

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        
        </form>
      </div>
    </section>
  )
}

export default Contact