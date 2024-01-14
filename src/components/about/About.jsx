import React from 'react';
import './about.css';
import ME from '../../assets/personal_2.jpg';

import {FaAward} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='Me'/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Project</h5>
              <small>5+ Completion</small>
            </article>
          </div>

          <p>
          Passionate Artificial Intelligence Engineer with 1+ years of experience in researching and building models. With the primary
          languages being Python and C++, I used to support and perform a few projects in the fields of Computer Vision and Natural
          Language Processing. I can also create a website with models and simulations on it.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About