import './App.css'
import Flashcard from './components/Flashcard'

function App() {

  return (
    <div>
      <div className='header'>
        <h1>The Ultimate Plant Parent!</h1>
        <p>How good of a plant parent are you? Test all of your planty knowledge here!</p>
        <h4>Number of cards: 10</h4>
      </div>
      <div>
        <Flashcard/>
      </div>


    </div>
  )
}

export default App
