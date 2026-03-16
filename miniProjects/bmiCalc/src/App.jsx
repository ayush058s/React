import React, { useState } from 'react'
import Form from './components/Form'

const App = () => {
  const[Weight, setWeight] = useState("");
  const[Height, setHeight] = useState("");
  
  return (
    <div className='h-screen w-full bg-cyan-800 flex justify-center items-center'>
      <Form
       setWeight={setWeight}
       setHeight={setHeight}
       Weight={Weight}
       Height={Height}
      />
    </div>
  )
}

export default App