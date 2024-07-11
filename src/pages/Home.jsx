import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import MyContext from '../context/CreateContext'
import { Link } from 'react-router-dom'
import Heade from '../components/Heade'

function Home() {
  
  let {user,setUser,setAdmin}=useContext(MyContext)
    const config={
      headers: {
        "Content-Type": "application/json"
        },
        withCredentials: true
    }
   
    useEffect(()=>{
        axios.get("https://mern-bloging-website-production.up.railway.app/getLogin",config)
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
    <div>
      <Heade/>
        <h1>{user?"hello "+user?.name:<Link to={"/login"}>Login Please</Link>}</h1>
    </div>
  )
}

export default Home