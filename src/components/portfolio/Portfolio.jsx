import React from 'react';
import './portfolio.css';

import { PORTFOLIO_DATA } from '../../data/PortfolioList';
import PortfolioBox from './PortfolioBox';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {PORTFOLIO_DATA.map((portfolio) => (
          <PortfolioBox data={portfolio} />
        ))}
      </div>
    </section>
  )
}

export default Portfolio