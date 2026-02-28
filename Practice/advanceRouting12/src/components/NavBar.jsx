import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='bg-cyan-800 flex justify-between px-8 py-4 items-center'>
        <h2 className='text-xl'>SunFlower</h2>
        <div className='flex gap-6'>
            <Link to='/' >Home</Link>
            <Link to='/about' >About</Link>
            <Link to='/contact' >Contact</Link>
            <Link to='/courses' >Courses</Link>
        </div>
    </div>
  )
}

export default NavBar