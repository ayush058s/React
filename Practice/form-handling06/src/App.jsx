import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");

  }

  return (
    <div className='h-screen w-full bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e);
      }} 
      >
        <input  className='p-4 mt-5 ml-4 border' type="text" placeholder='Enter Your Name' />

        <button className='p-4 ml-2 border'>
          Submit
        </button>

      </form>
    </div>
  )
}

export default App