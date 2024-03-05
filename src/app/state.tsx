import { useState } from 'react';

export default function Counter() {
    const [number, setNumber] = useState(0);
    function handle() {
        setNumber(number + 1);
        setNumber(number => number + 4);
        setNumber(16);
        setNumber(number + 12);
    }
  
    return (
      <>
        <h1>{number}</h1>
        <button onClick={handle}>Increase the number</button>
      </>
    )
  }