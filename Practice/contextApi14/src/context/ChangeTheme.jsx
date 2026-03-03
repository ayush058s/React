import React, { createContext, useState } from 'react'

export const changeThemeButton = createContext(); 

const ChangeTheme = (props) => {

const [theme, setTheme] = useState('dark');
  return (
    <div>
        <changeThemeButton.Provider value={[theme,setTheme]}>
            {props.children}
        </changeThemeButton.Provider>
    </div>
  )
}

export default ChangeTheme