import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import MyContext from '../context/CreateContext'
import { Link } from 'react-router-dom'
import Heade from '../components/Heade'
import Footer from '../components/Footer'

function Profile() {
    let {user,setUser,setAdmin}=useContext(MyContext)
    const config={
      headers: {
        "Content-Type": "application/json"
        },
        withCredentials: true
    }
   
    useEffect(()=>{
        axios.get("getLogin",config)
        .then((res)=>setUser(res.data?.data))
        .catch(error=>console.log(error))
    },[])
    console.log(user)
    if (user?.email=="ali1@g.com") {
      setAdmin(true)
    }
    else{
      setAdmin(false)
    }
  return (
    <>
    <Heade/>
    <div className='flex justify-center items-center h-[50vh] '>
      {user?<div className='bg-slate-200 w-[20vw] h-[45vh] rounded-md flex flex-col justify-between text-center py-5'>
        <h1 className='text-center text-3xl font-bold'>info</h1>
        <p className='text-blue-800'>Name: <span className='block text-black'>{user?.name}</span></p>
        <p className='text-blue-800'>Email: <span className='block text-black'>{user?.email}</span></p>
        <p className='text-blue-800'>User Name: <span className='block text-black'>{user?.username}</span></p>
       
      </div>:null}
    </div>
    <Footer/>
    </>
  )
}

export default Profile