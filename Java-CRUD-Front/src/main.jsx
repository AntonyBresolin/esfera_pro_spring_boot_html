import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import App from './App'
import { Authenticate } from './Authenticate'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authenticate />
  </React.StrictMode>
)
