import { useState } from 'react';
import { sculptureList } from './dataimage.tsx';

export default function ShowImage() {
    const [index, setIndex] = useState(0)

    function handleClick() {
        if(index < sculptureList.length -1) {
            setIndex(index + 1)
        }
        else {
            setIndex(0)
        }
    }

    function backClick() {
        if(index > 0) {
            setIndex(index - 1)
        }
        else {
            setIndex(sculptureList.length -1)
        }
        
    }
    let sculpture = sculptureList[index];

    return (
        <>
           <button onClick= { handleClick }>
              next
           </button>

           <button onClick= { backClick }>
              prev
           </button>

           <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
        </>
    )
}