import './App.css'
import Flashcard from './Components/Flashcard'
import data from './data/data.json'

function App() {

  return (
    <div>
      <div className='header'>
        <h1>The Ultimate Plant Parent!</h1>
        <p>How good of a plant parent are you? Test all of your planty knowledge here!</p>
        <h4>Number of cards: {data.length - 1}</h4>
      </div>
      <div>
        <Flashcard data={data}/>
      </div>


    </div>
  )
}

export default App
