import React from 'react'
import './footer.css'

import {BsLinkedin, BsGithub, BsSkype} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Hoang Long</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/long-lê-841b96215" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/hlong24082k" target='_blank'><BsGithub/></a>
        <a href="https://join.skype.com/invite/yP8qM51Rbokh" target='_blank'><BsSkype/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; HoangLong 2023</small>
      </div>
    </footer>
  )
}

export default Footer