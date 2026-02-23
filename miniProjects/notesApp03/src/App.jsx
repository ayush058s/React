import React, { useState } from 'react'
import { X } from 'lucide-react'

const App = () => {

  const [heading, setHeading] = useState('')
  const [detail, setDetail] = useState('')
  const [task, setTask] = useState([])

  const deleteNote = (idx) =>{
    const copyTask = [...task];
    copyTask.splice(idx, 1); // deletes 1 note    
    setTask(copyTask);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task] // copy bnae
    copyTask.push({ heading, detail });// copy ki value set ki

    setTask(copyTask)// task is upadated 

    console.log(copyTask)
    setHeading('');
    setDetail('');
  }

  return (
    <div className='flex h-screen w-full  bg-black text-white p-4'>

      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex flex-col gap-10 p-2'>

        <h1 className='text-3xl'>Add Notes</h1>
        <input
          type="text"
          value={heading}
          placeholder="Heading"
          className="border h-10 w-140 px-3 py-2"
          onChange={(e) => {
            setHeading(e.target.value);
          }}
        />

        <textarea
          name="" id=""
          className='border h-40 px-3 py-2 w-140'
          placeholder='Enter your details'
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value);
          }}>

        </textarea>

        <button className='bg-white h-10 m:w-20 active:bg-gray-300 active:scale-95  w-140 text-black'> Submit</button>
      </form>

      <div className=' flex ml-25 pl-12 flex-col gap-10 border-l-3  h-full overflow-auto text-white'>
        <div>
          <h1 className='text-3xl text-white'> Recent Notes</h1>
        </div>

        <div className='flex flex-wrap gap-20 h-full overflow-auto text-black'>

          {task.map((elem, idx) => {

            return <div key={idx} className='relative h-55 w-50 bg-cover bg-amber-200 rounded-xl p-3  bg-[url("https://img.freepik.com/free-vector/leafy-patterned-note-background_53876-97734.jpg?semt=ais_user_personalization&w=740&q=80")]'>
              <h2 onClick={() => {
                deleteNote(idx);
              }} 
                className='absolute right-0 top-0 p-1 bg-red-600 cursor-pointer active:scale-95'>
                <X />
              </h2>

              <h1 className='text-5xl'>{elem.heading}</h1>
              <p className='mt-6 '>{elem.detail}</p>
            </div>
          })}


        </div>
      </div>
    </div>
  )
}

export default App