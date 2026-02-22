import React, { useActionState, useState } from 'react'

const App = () => {

  const [username, setUserName] = useState('');
  const [intro, setIntro] = useState('');


  
  const submitHandler = (e) => {
    e.preventDefault(); // stops from from refreshing page
    console.log("Form Submitted by", username);
    PrintIntro(username);
    setUserName(''); //it clears any value after click on submit

  }
  const PrintIntro = (naam) =>{
    setIntro(`My name is  ${naam}`);
    
  }
  

  return (
    <div className='h-screen w-full bg-black text-white'>
      
    
      <form onSubmit={(e) => {
        submitHandler(e);
        // PrintIntro();
      }} 
      >
        <input value={username} onChange={(e) => {
          setUserName(e.target.value); // taking out the value from input box

         
          console.log({username});
        }}  className='p-4 mt-5 ml-4 border' type="text" placeholder='Enter Your Name' />

        <button className='p-4 ml-2 border'>
          Submit
        </button>

      </form>
      <h1 className=' ml-5 mt-10 text-2xl'>{intro}</h1>
    </div>
  )
}

export default App