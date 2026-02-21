import React from 'react'
import {useState} from 'react';

const BatchUpdate = () => {
    const [num, setNum] = useState(0);

    const updateNum = () => {
        setNum(prev =>(prev + 1));
        setNum(prev =>(prev + 1));
        setNum(prev =>(prev + 1));
    }
  return (
    <div className='text-5xl'>
        <h1>{num}</h1>
        <button onClick={updateNum} className='text-2xl h-10 w-30 border-3 rounded-4xl'>click me</button>
    </div>
  )
}

export default BatchUpdate