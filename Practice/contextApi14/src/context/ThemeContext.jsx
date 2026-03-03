import React, { createContext } from 'react'

export const themeDataContext = createContext();

const ThemeContext = (props) => {
  return (
    <div>
       <themeDataContext.Provider value='Ayush NavBar'>
        {props.children}  
       </themeDataContext.Provider>
    </div>
  )
}

export default ThemeContext