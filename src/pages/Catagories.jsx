import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Heade from '../components/Heade'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';
import { useContext } from 'react';
import MyContext from '../context/CreateContext';
import Footer from '../components/Footer'

function Catagories() {
    let [searchCata,setSearchCata]=useState("");
    let [searchSubCata,setSearchSubCata]=useState("");
  const [allCatagoris,setAllCatagoris]=useState([])
  const [allSubCatagoris,setAllSubCatagoris]=useState([])
  const [posts,setPosts]=useState([])

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
  useEffect(()=>{
    axios.get("https://mern-bloging-website-production.up.railway.app/posts")
    .then((res)=>{setPosts(res?.data?.data)})
    .catch(error=>console.log(error))
  },[])
  useEffect(()=>{
      
    
      axios.post("http://localhost:3000/get-through-catagory",{catagory:searchCata})
        .then((res)=>{setPosts(res?.data?.data)})
        .catch(error=>console.log(error))
    
  },[searchCata])
  
  useEffect(()=>{
      
    
    axios.post("https://mern-bloging-website-production.up.railway.app/get-through-sub-catagory",{subCatagory:searchSubCata})
      .then((res)=>{setPosts(res?.data?.data)})
      .catch(error=>console.log(error))
  
},[searchSubCata])
    useEffect(()=>{
        axios.get("https://mern-bloging-website-production.up.railway.app/subcatagories")
        .then((res)=>{setAllSubCatagoris(res.data.data)})
        .catch(error=>console.log(error))
    
    
        axios.get("https://mern-bloging-website-production.up.railway.app/catagories")
        .then((res)=>{setAllCatagoris(res.data.data)})
        .catch(error=>console.log(error))
      },[])
  return (
    <>
    <Heade/>
    <div className='w-screen my-10 flex h-[500px]'>

        <div className='w-1/3 py-3 overflow-scroll  bg-orange-300 h-full'>
            <div>
                <h1 className='px-2 py-4 text-2xl font-bold'>Catagories</h1>
                <div className='flex flex-col px-4 gap-y-3 '>
                    {
                        allCatagoris?.map((item)=>{
                            return(
                                <p className='cursor-pointer' onClick={(e)=>{setSearchCata(e.target.innerText)}} key={item?._id}>{item?.catagory}</p>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <h1 className='px-2 py-4 text-2xl font-bold'>Sub catagories</h1>
                <div className='flex flex-col px-4 gap-y-2 '>
                    {
                        allSubCatagoris?.map((item)=>{
                            return(
                                <p className='cursor-pointer' onClick={(e)=>{setSearchSubCata(e.target.innerText)}} key={item?._id}>{item?.subCatagory}</p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        <div className='w-2/3 h-full  overflow-scroll flex flex-wrap justify-center items-center gap-5'>
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
    </div>
    <Footer/>
    </>
  )
}

export default Catagories