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
  
  return (
    <div className='App'>
      <h1>Pirate Match</h1>
      <button>New Game</button>
    </div>
  );
}

export default App;
