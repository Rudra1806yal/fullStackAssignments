import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { theme } from './context/theme.jsx'

createRoot(document.getElementById('root')).render(
  //2. Provider components/global box[value]
  <theme.Provider value={{ clr: "red" }}>
    <App />
  </theme.Provider>,
)
