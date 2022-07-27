import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'

const cardImages = [
  { 'src': '/assets/anchor.png', matched: false },
  { 'src': '/assets/chest.png', matched: false },
  { 'src': '/assets/flag.png', matched: false },
  { 'src': '/assets/map.png', matched: false },
  { 'src': '/assets/rum.png', matched: false },
  { 'src': '/assets/sword.png', matched: false },
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  // When user clicks on first card update choiceOne state value to be that card
  // When user clicks on second card update choiceTwo state value to be that card

  // Shuffle cards, duplicate images array
  // For each item in the array add on id property
  function shuffleCards() {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    // Update our card state to be the shuffled cards after function generates them
    // Create state to see number of turns taken, when a new game starts turns resets to 0
    setCards(shuffledCards)
    setTurns(0)
  }

  // Handle a choice
  // If choice is selected it has a value if not we haven't selected something
  // If it doesn't have value update choiceOne if it does update choiceTwo
  function handleChoice(card) {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card) 
  }

  function resetTurn() {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  // Compare two selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      // If choiceOne src equals choiceTwo src then we have a match
      // Then update the cards state taking the prev cards state to update it
      // Then return new array of cards using map
      // Each time the function fires we return the object that we want to place inside the new array, changing the matched property to true
      // Else return card object
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      }else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  return (
    <div className='App'>
      <h1>Pirate Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map(card => (
          <Card 
            key={card.id} 
            card={card} 
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>
    </div>
  )
}

export default App
