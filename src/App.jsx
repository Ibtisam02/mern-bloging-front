import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Login from './pages/Login'
import Singup from './pages/Singup'
import Blogs from './pages/Blogs'
import ReadPost from './pages/ReadPost'
import AddCatagory from './pages/AddCatagory'
import Home from './pages/Home'
import MyContextProvider from './context/MyContextProvider'
import {Toaster} from "react-hot-toast"
import Catagories from './pages/Catagories'
import PrivatePosts from './pages/PrivatePosts'


function App() {
  
  return (
    <MyContextProvider>
    <Toaster position="bottom-right" toastOptions={{duration:2000}}/>
     <Routes>
      <Route path='/create-post' element={<CreatePost/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Singup' element={<Singup/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/blogs/:id' element={<ReadPost/>}/>
      <Route path='/read' element={<ReadPost/>}/>
      <Route path='/add-catagory' element={<AddCatagory/>}/>
      <Route path='/'  element={<Home/>}/>
      <Route path='/catagories'  element={<Catagories/>}/>
      <Route path='/private'  element={<PrivatePosts/>}/>
     </Routes>
    </MyContextProvider>
  )
}

export default App
