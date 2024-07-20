import React, { useEffect, useState } from 'react'
import Heade from '../components/Heade'
import axios from 'axios'
import { useContext } from 'react'
import MyContext from '../context/CreateContext'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

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
              <Link key={item?._id} to={`/blogs/${item?._id}`}>
              <div  className='bg-slate-300 px-4 py-3 rounded-md hover:cursor-pointer hover:shadow-md hover:transition-shadow duration-300 ease-in' key={item._id}>
                <img className='h-56 w-56 object-cover rounded-sm'  src={item?.image} alt="" />
                <p className='text-center text-2xl font-semibold text-blue-600'>{item?.title.length>10?item?.title.slice(0,10)+"...":item?.title}</p>
                <p className='text-center'>{item?.description.length>25?item?.description.slice(0,25)+"...":item?.title}</p>
              </div>
              </Link>
            )
          })
        }
        </div>
          <Footer/>
    </div>
  )
}

export default Blogs