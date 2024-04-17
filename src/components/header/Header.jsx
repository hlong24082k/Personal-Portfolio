import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import './header.css'
import ME from '../../assets/personal.png'
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Hoang Long</h1>
        <TypeAnimation
          className="text-light"
          sequence={[
            'AI ENGINEER',
            1000, // Waits 1s
            'WEB DEVERLOPER',
            1000,
            () => {
              console.log('Sequence completed');
            },
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
        />
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header