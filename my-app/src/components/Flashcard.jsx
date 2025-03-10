import {useState} from 'react';
import './flashcard.css'

function Flashcard({data}) {
    const [indx, setIndx] = useState(0)
    const [flip, setFlip] = useState(true)
    const [stck, setStck] = useState([])
    // const [start, setStart] = useState(true)
    function handleFlip() {
        setFlip(prev => (!prev))
        setFlip(!flip)
    }

    function handleNext() {
        // setStart(false);
        setIndx(Math.floor(Math.random() * (data.length - 1)) + 1)
        setFlip(true);
        setStck(prev => [...prev, indx])
        
    }
    function handleBack() {
        if (stck.length > 0) {
            const prevIndex = stck[stck.length - 1]; 
            setStck(prev => prev.slice(0, -1));
            setIndx(prevIndex); 
            setFlip(true); 
        }
    }
    
    return(
        <div>
            <div className="flashcard" onClick={handleFlip}>
                <h1>{flip ? data[indx][0] : data[indx][1]}</h1>
            </div>
            <button className='btn' onClick={(e) => { e.stopPropagation(); handleBack(); }}>{'<-'}</button> 
            <button className='btn' onClick={(e) => { e.stopPropagation(); handleNext(); }}>{'->'}</button>
        </div>
        
        
    
    )

}
export default Flashcard;