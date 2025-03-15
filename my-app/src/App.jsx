import { useState } from 'react'
import './App.css'
import Flashcard from './Components/Flashcard'
import data from './data/data.json'

function App() {
  const [curStreak, setCurStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)
  return (
    <div>
      <div className='header'>
        <h1>The Ultimate Plant Parent!</h1>
        <p>How good of a plant parent are you? Test all of your planty knowledge here!</p>
        <h4>Number of cards: {data.length - 1}</h4>
        <h4>Current Streak: {curStreak}, Longest Streak: {maxStreak ? maxStreak : ''}</h4>
        
      </div>
      <div>
        <Flashcard data={data} setCurStreak={setCurStreak} setMaxStreak={setMaxStreak} curStreak={curStreak} maxStreak={maxStreak}/>
      </div>


    </div>
  )
}

export default App
