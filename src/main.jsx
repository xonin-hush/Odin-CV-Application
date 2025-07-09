import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GeneralInformation } from './assets/components/GeneralInformation.jsx'
import React from 'react'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
     {/* <GeneralInformation /> */}

  </StrictMode>,
)
