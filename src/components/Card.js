import React from 'react'
import './Card.css'

function Card({ card, handleChoice, flipped, disabled }) {

  // Update choice state
  function handleClick() {
    if (!disabled) {
      handleChoice(card)
    }
  }

  return (
    <div className='card'>
      <div className={flipped ? 'flipped' : ''}>
        <img className='front' src={card.src} alt='pirate card front' />
        <img
          className='back'
          src='/assets/background.png'
          alt='pirate card back'
          onClick={handleClick}
        />
      </div>
    </div>
  )
}

export default Card
