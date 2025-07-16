import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />      
                      {/* So this App is a function that returns HTML and react renders it.
                         So we are making Js render HTML */}
  </StrictMode>,
)
