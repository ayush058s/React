import React from 'react'
import {useNavigate} from 'react-router-dom'

const BackBar = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <button onClick={() => {
                    navigate(-1);
                }} className='bg-green-800 px-6 py-3'>Back</button>
            </div>
            <div className='absolute right-0 top-15'>
                <button onClick={() => {
                    navigate('/');
                }} className='bg-green-800 px-6 py-3'>Back To Home</button>
            </div>

        </div>
    )
}

export default BackBar
