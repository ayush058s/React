import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import NotFound from './pages/NotFound'
import FemaleContacts from './pages/FemaleContacts'
import MaleContacts from './pages/MaleContacts'
import Courses from './pages/Courses'
import DyanmicCoursePage from './pages/DyanmicCoursePage'
import BackBar from './components/BackBar'

const App = () => {
  return (
    <div className='bg-black text-white h-screen w-full'>
      <NavBar />
      <BackBar />
      <Footer />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />

        {/* use these two routing inside contact AND add <outlet /> where we wabnt to inject these pages */}
        <Route path='/contact/female' element={<FemaleContacts />} />
        <Route path='/contact/male' element={<MaleContacts />} />

        <Route path='*' element={<NotFound />} />
        <Route path='/courses' element={<Courses />} />

        {/* Dyanmic page whenever we will type anything after courses it will land it to DynamicCoursePage 
        and we can get to see this id value if use useParams() in courses page
        */}
        <Route path='/courses/:id' element={<DyanmicCoursePage />} />
      </Routes>
      
    </div>
  )
}

export default App