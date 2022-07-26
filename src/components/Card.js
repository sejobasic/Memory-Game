import React from 'react'
import './Card.css'

function Card({ cards }) {
  
  const renderCards = cards.map((card) => {
    return (
      <div className='card' key={card.id}>
        <div>
          <img className='front' src={card.src} alt='pirate card front' />
          <img
            className='back'
            src='/assets/background.png'
            alt='pirate card back'
          />
        </div>
      </div>
    )
  })

  return <div className='card-grid'>{renderCards}</div>
}

export default Card
