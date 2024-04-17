import React from 'react'

const PortfolioBox = (item) => {
    const { image, title, github, demo } = item.data;

    return (
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <a href={demo==="" ? github : demo} target='_blank'><img src={image} alt={title} /></a>
        </div>
        <h3>{title}</h3>
        <a href={github} className='btn btn-primary' target='_blank' rel="noreferrer">Github</a>
      </article>
    )
}

export default PortfolioBox