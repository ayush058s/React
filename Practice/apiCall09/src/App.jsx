import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [ImagePrint, setImagePrint] = useState([]);

  const getData = async () => {
    // when fetch is used it works async so a promise is returned to get data we need to mention async-await 
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response);

    // we can not get the json data without async-await as it is also async
    const jsonData = await response.json();
    console.log(jsonData);
  }

  const getAxiosData = async () => {
    const response = await axios('https://jsonplaceholder.typicode.com/albums ');
    console.log(response.data);
  }

  const getImages = async () => {
    const response = await axios('https://picsum.photos/v2/list');
    setImagePrint(response.data);

  }
  return (
    <div className='bg-black h-screen w-full text-white'>
      <div className='p-10 text-2xl'>
        <h1>Api call through: <br />
          (1) fetch: inbuilt  <br />
          (2) axios: third party
        </h1>
        <h3>use "json placeholder" api for free and fake data</h3>
        <h3>use "lorem Picsum" api for free and fake Images</h3>

        <button onClick={getData} className='bg-blue-600 rounded'>
          fetch data
        </button>
        <br />
        <button onClick={getAxiosData} className='bg-red-600 mt-8 rounded '>
          data through---AXIOS
        </button>

      </div>
      <div className='bg-red-50 w-full h-90 p-10'>
        <button className='bg-black h-10 w-30  rounded ' onClick={getImages}> GET IMAGES</button>
        <div className="flex flex-wrap gap-4 mt-4">
          {ImagePrint.map((elem, idx) => {
            return (
              <img
                key={idx}
                src={elem.download_url}
                alt={elem.author}
                className="w-40 h-40 object-cover rounded"
              />
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default App