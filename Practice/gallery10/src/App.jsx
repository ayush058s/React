import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const[index, setIndex] = useState(1)
  const [userData, setUserData] = useState([])

  useEffect(() => {
    getData();
  },[index])

  


  let printUserData = <h3 className='text-gray-400 font-semibold text-xs absolute top-1/2 left-1/2 -translat-x-1/2 -translate-y-1/2'>Loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return <div key={idx}>
        <a href={elem.url}>
          <div className='h-50 w-55 bg-white overflow-hidden'>
          <img className='h-full  w-full object-cover' src={elem.download_url} alt="" />
        </div >
        <h2>{elem.author}</h2>
        </a>
      </div>
    })
  }

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)

    setUserData(response.data)
  }
  return (
    <div className='bg-black overflow-auto h-screen text-white'>
     
      {/* <button onClick={getData} className='bg-green-600 m-2 py-2 px-5 rounded active:scale-95'>get Data</button> */}
      <div className='flex flex-wrap gap-16 p-4 h-[80%]'>{printUserData}</div>

      <div className='flex justify-center items-center p-4 gap-6'>
        <button onClick={() => {
          if(index > 1){
            setIndex(index - 1)
          setUserData([])
          }
        }}
        className='bg-amber-300 text-sm active:scale-95 cursor-pointer text-black rounded font-semibold px-4 py-2' 
        style={{opacity: index == 1 ? 0 : 1}}>
          Prev
        </button>
        <h2>Page {index}</h2>
        <button onClick={() => {
          setUserData([])
          setIndex(index + 1)
        }}
        className='bg-amber-300 text-sm active:scale-95 cursor-pointer text-black rounded font-semibold px-4 py-2'>
          Next
        </button>
        
      </div>
    </div>
  )
}

export default App