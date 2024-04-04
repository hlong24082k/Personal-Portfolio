import React from 'react';
import './about.css';
import ME from '../../assets/personal_2.jpg';

import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='Me' />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Project</h5>
              <small>5+ Completion</small>
            </article>
          </div>

          <p>
            As of today, I have 1+ years of experience working in the field of AI, including two main fields: Computer Vision and Natural Language Processing. 
            I'm looking forward to studying and working in the real world as Web developer like Frontend. I have worked
            extensively on Frontend development and spent time learning ReactJs. However, I've studied and grasped the
            fundamentals of Backend and I’m keen on exploring FullStack Developer.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About