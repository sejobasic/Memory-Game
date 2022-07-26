import { useState } from 'react'
import './App.css';

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
  function shuffleCards () {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

      setCards(shuffledCards)
      setTurns(0)
  }

  return (
    <div className='App'>
      <h1>Pirate Match</h1>
      <button>New Game</button>
    </div>
  );
}

export default App;
