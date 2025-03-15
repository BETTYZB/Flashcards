import {useState} from 'react';
import './flashcard.css'

function Flashcard({data, setCurStreak, setMaxStreak, curStreak, maxStreak}) {
    const [indx, setIndx] = useState(0)
    const [flip, setFlip] = useState(true)
    const [stck, setStck] = useState([])
    const [text, setText] = useState("")
    const [color, setColor] = useState("White")
    // const [start, setStart] = useState(true)
    function handleFlip() {
        setFlip(prev => (!prev))
        setFlip(!flip)
    }

    function handleShuffle() {
        // setStart(false);
        setIndx(Math.floor(Math.random() * (data.length - 1)) + 1)
        setFlip(true);
        setStck(prev => [...prev, indx])
        setColor("darkgray")
        setText("")
        
    }

    function handleNext() {

        if (indx == data.length - 1){
            setIndx(0)
        }
        setIndx( prev => (prev + 1))
        setFlip(true);
        setStck(prev => [...prev, indx])
        setColor("darkgray")
        setText("")

    }
    function handleBack() {
        if (stck.length > 0) {
            const prevIndex = stck[stck.length - 1]; 
            setStck(prev => prev.slice(0, -1));
            setIndx(prevIndex); 
            setFlip(true);
            setColor("darkgray")
            setText("") 
        }
    }
    function handleChange(e) {
        setText(e.target.value)
    }

    function handleSubmit() {
        if (text.toLowerCase() == data[indx][1].toLowerCase()) {
            setColor("blue")
            const newCurr = curStreak
            setCurStreak(prev => prev + 1)
            setMaxStreak(() => newCurr + 1 > maxStreak ? newCurr + 1: maxStreak)
        }
        else{
            setColor("Red")
            setCurStreak(0)
        }
    }
    
    return(
        <div>
            <div className="flashcard" onClick={handleFlip}>
                <h1>{flip ? data[indx][0] : data[indx][1]}</h1>
            </div>
            <div className='guess-style'>
                <h4>Guess the answer here:  </h4>
                <input value={text} onChange={handleChange} placeholder='Place your answer here' style={{borderColor:color, borderWidth: 3}}/>
                <button onClick={handleSubmit}>Submit Guess</button>
            </div>
            <button className='btn' onClick={(e) => { e.stopPropagation(); handleBack(); }}>{'<-'}</button> 
            <button className='btn' onClick={(e) => { e.stopPropagation(); handleNext(); }}>{'->'}</button>
            <button className='btn' onClick={(e) => { e.stopPropagation(); handleShuffle(); }}> Shuffle Cards </button>
        </div>
        
    
    )

}
export default Flashcard;