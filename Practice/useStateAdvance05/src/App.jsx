import React from 'react'
import {useState} from 'react';
import BatchUpdate from './compnents/BatchUpdate';

const App = () => {

  const [namee, useName] = useState({namee: "Ayush", age: 20});

  const printMe = () => {
    useName(prev => ({...prev, age:109}))
  }

  const [num, useNum] = useState([10, 20, 30, 40])

  const playWithArray = () =>{
    const newArray = [...num];
    newArray.push(69);
    useNum(newArray);
  }

  return (
    <div className='flex justify-between bg-blue-300 h-screen'>
      <div>
      <h1 className='text-5xl'>My name is {namee.namee} <br /> and my age is {namee.age} </h1>
      <button className='mt-4 ml-15 bg-pink-500 h-10 w-20 rounded-2xl' onClick={printMe}>press me</button>
    </div>
    <div className=''>
      <h1 className='text-5xl'>{num}</h1>
      <button onClick={playWithArray} className='bg-black text-white h-10 w-30 m-10 rounded-2xl'>change array</button>
    </div>
    <BatchUpdate />
    </div>
  )
}

export default App