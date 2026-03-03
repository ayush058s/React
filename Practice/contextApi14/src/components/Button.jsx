import React, { useContext } from 'react'
import { changeThemeButton } from '../context/ChangeTheme'

const Button = () => {

    const [theme, setTheme] =  useContext(changeThemeButton)
  return (
    <div>
        <button onClick={() => {
            setTheme('light')
        }} className='p-1 bg-amber-700 active:scale-95'>Change the theme</button>
    </div>
  )
}

export default Button