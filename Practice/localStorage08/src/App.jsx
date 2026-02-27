import React from 'react'

const App = () => {
  localStorage.clear(); // store data on browser, stored in key value pair, AND IN STRING
  sessionStorage.clear(); // data is stored for a session if browser is closed it will be gone

  localStorage.setItem('user', 'Ayush');  

  const user = localStorage.getItem('user');
  console.log(user);

  const user1 = {
    name: 'Ayush',
    age: 29,
    city: 'Bhopal'
  }

  localStorage.setItem('user1', JSON.stringify(user1));
  const userFetched = JSON.parse(localStorage.getItem('user1'));
  console.log(userFetched);

  return (
    <div >
      <h1 >local and session storage</h1>
    </div>
  )
}

export default App