import React, { useState } from 'react'

const App = () => {

  const [heading, setHeading] = useState('')
  const [detail, setDetail] = useState('')

  const submitHandler = (e) =>{
    e.preventDefault();
    setHeading('');
  }

  return (
    <div className='flex h-screen w-full bg-black text-white p-4'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex flex-col gap-10'>
        <input
          type="text"
          value={heading}
          placeholder="Heading"
          className="border h-10 w-80 px-3 py-2"
          onChange={(e) => {
            setHeading(e.target.value);
          }}
        />

        <textarea 
        name="" id="" 
        className='border h-40 px-3 py-2 w-80' 
        placeholder='Enter your details'>

        </textarea>

        <button className='bg-white h-10 w-80 text-black'> Submit</button>
      </form>

      <div className='flex justify-end flex-wrap gap-20 h-full overflow-auto text-black'>
        <h1 className='text-4xl text-white'> Your Notes</h1>
        <div className='h-50 w-50 bg-emerald-50 rounded '>
          <h1 className='text-5xl'>{heading}</h1>
          <p></p>
        </div>
        <div className='h-50 w-50 bg-emerald-50 rounded '></div>
        <div className='h-50 w-50 bg-emerald-50 rounded '></div>
        <div className='h-50 w-50 bg-emerald-50 rounded '></div>
        <div className='h-50 w-50 bg-emerald-50 rounded '></div>
        <div className='h-50 w-50 bg-emerald-50 rounded '></div>
        <div className='h-50 w-50 bg-emerald-50 rounded '></div>
        <div className='h-50 w-50 bg-emerald-50 rounded '></div>
        <div className='h-50 w-50 bg-emerald-50 rounded '></div>
        <div className='h-50 w-50 bg-emerald-50 rounded '></div>
        <div className='h-50 w-50 bg-emerald-50 rounded '></div>
        <div className='h-50 w-50 bg-emerald-50 rounded '></div>
      </div>
    </div>
  )
}

export default App