import React from 'react'
import './services.css'

import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>AI Engineering</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>OCR</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>EKYC</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Text Generation</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Knowledge Graph</p>
            </li>
          </ul>
        </article>
        {/* end of ai services */}

        <article className='service'>
          <div className="service__head">
            <h3>Web Deverloper</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>eCommerce</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Dashboard</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Travel Platform</p>
            </li>

          </ul>
        </article>
        {/* end of Web services */}

      </div>
    </section>
  )
}

export default Services