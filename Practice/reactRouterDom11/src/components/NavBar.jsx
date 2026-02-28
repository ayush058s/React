import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
  <div className='bg-blue-500 h-16 flex justify-between items-center px-4'>
        <div>
            <h1 className='text-2xl'>NavBar</h1>
        </div>
        <div className='flex gap-4 font-semibold'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default NavBar