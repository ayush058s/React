import React from 'react'
import {Link} from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <div className='flex justify-center gap-4'>
            <Link to='/contact/male' className='text-lg'>Male</Link>
            <Link to='/contact/female' className='text-lg'>Female</Link>
        </div>
        <h1>Contact</h1>
    </div>
  )
}

export default Contact