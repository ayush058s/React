import React, { useState } from 'react'



const App = () => {

  // const [first, setfirst] = useState(second)
  // const [num, setNum] = useState(69);

  const [count, setCount] = useState(0);

  return (
    <div className='h-screen p-10 flex flex-col justify-center items-center gap-10 w-full'>
      <h1 className='text-6xl'>{count}</h1>

      <div className='flex gap-10 '>

        <button className='flex bg-gray-600 justify-center items-center h-15 w-22 rounded-2xl' onClick={() => {
          setCount(count - 1);
        }}>
          Decrease
        </button>

        <button className='flex bg-amber-600 justify-center items-center h-15 w-30 rounded-2xl ' onClick={() => {
          setCount(count + 5);
        }}>
          Jump By 5
        </button>
        <button className='flex bg-gray-600 justify-center items-center h-15 w-22 rounded-2xl ' onClick={() => {
          setCount(count + 1);
        }}>
          Increase
        </button>

      </div>
    </div>
  )
}

export default App