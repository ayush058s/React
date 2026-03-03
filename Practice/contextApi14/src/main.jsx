import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContext from './context/ThemeContext.jsx'
import ChangeTheme from './context/ChangeTheme.jsx'

createRoot(document.getElementById('root')).render(
  
    <ThemeContext>
      <ChangeTheme>
        <App />
      </ChangeTheme>
    </ThemeContext>
  ,
)
