import {useState} from 'react';

function Flashcard() {
    const dict = [['ca','3'], ['c4','53'],['c','31']]
    const [indx, setIndx] = useState(0)
    const [flip, setFlip] = useState(true)
    function handleFlip() {
        setFlip((prev) => (!prev))
    }

    function handleNext() {
        setIndx((prev) => (prev + 1) % dict.length)
        setFlip(true);
        
    }
    return(

        <div className="flashcard" onClick={handleFlip}>
            <h1>{flip ? dict[indx][0] : dict[indx][1]}</h1>
            <button onClick={(e) => { e.stopPropagation(); handleNext(); }}>{'->'}</button>        


        </div>
    
    )

}
export default Flashcard;