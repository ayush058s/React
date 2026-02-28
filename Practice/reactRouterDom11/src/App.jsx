import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import NavBar from './components/NavBar'
import Contact from './pages/Contact'


const App = () => {
  return (
    <div className='min-h-screen flex flex-col'>
    <NavBar />
    <main className='flex-1'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs /> } />
        <Route path='/contact' element={<Contact /> } />
      </Routes>
    </main>
    </div>
  )
}

export default App