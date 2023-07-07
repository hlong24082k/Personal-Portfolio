import React from 'react'

const PortfolioBox = (item) => {
    const { id, image, title, github } = item.data;

    return (
      <article key={id} className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={image} alt={title} />
        </div>
        <h3>{title}</h3>
        <a href={github} className='btn btn-primary' target='_blank' rel="noreferrer">Github</a>
      </article>
    )
}

export default PortfolioBox