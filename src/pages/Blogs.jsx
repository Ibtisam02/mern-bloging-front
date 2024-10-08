import React, { useEffect, useState } from 'react'
import Heade from '../components/Heade'
import axios from 'axios'
import { useContext } from 'react'
import MyContext from '../context/CreateContext'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Posts from '../components/Posts'

function Blogs() {
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
    if (user?.email=="ali1@g.com") {
      setAdmin(true)
    }
    else{
      setAdmin(false)
    }
  const [posts,setPosts]=useState(null)
  useEffect(()=>{
    axios.get("posts")
    .then((res)=>{setPosts(res.data.data)})
    .catch(error=>console.log(error))
  },[])
  return (
    <div>
        <Heade/>
        <div className='w-screen h-fit flex justify-center my-10 flex-wrap items-center gap-10'>
        {
          posts?.map((item)=>{
            return (
              <Posts item={item}/>
            )
          })
        }
        </div>
          <Footer/>
    </div>
  )
}

export default Blogs