import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
axios.defaults.baseURL="https://f8737d7f-dec8-4e97-8b55-c9950d9a2583.e1-us-cdp-2.choreoapps.dev/"
//axios.defaults.baseURL="https://mern-bloging-website-production.up.railway.app/"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
