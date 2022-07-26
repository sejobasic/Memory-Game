import { useState } from 'react'
import './App.css'
import Card from './components/Card'

const cardImages = [
  { 'src': '/assets/anchor.png' },
  { 'src': '/assets/chest.png' },
  { 'src': '/assets/flag.png' },
  { 'src': '/assets/map.png' },
  { 'src': '/assets/rum.png' },
  { 'src': '/assets/sword.png' },
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

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

  console.log(cards, turns)

  return (
    <div className='App'>
      <h1>Pirate Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <Card cards={cards} />
    </div>
  )
}

export default App
