import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
axios.defaults.baseURL="https://mern-bloging-website-production.up.railway.app/api/v1/users/"
//axios.defaults.baseURL="https://mern-bloging-website-production.up.railway.app/"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
