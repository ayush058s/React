import React, { useContext } from 'react'
import Nav2 from './Nav2'
import  { themeDataContext } from '../context/ThemeContext'
import Button from './Button';
import { use } from 'react';
import { changeThemeButton } from '../context/ChangeTheme';

const Navbar = (props) => {
  const data = useContext(themeDataContext);

  const [theme, setTheme] =  useContext(changeThemeButton)
  return (
    <div className={theme}>
        <h2 >Ananya Chauhan and {data }</h2>
        <div>
          <Button />
          <h2>{theme}</h2>
        </div>

        <Nav2 theme={props.theme} />
    </div>
  )
}

export default Navbar