import React, { useEffect, useState } from 'react'
import Comment from '../components/Comment';
import { useParams } from 'react-router-dom'
import Heade from '../components/Heade';
import MyContext from '../context/CreateContext';
import { useContext } from 'react';
import axios from 'axios';
import {toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom";

function ReadPost() {
  
  const navigate=useNavigate();
  let {user,setUser,admin,setAdmin}=useContext(MyContext)

  const [post,setPost]=useState(null)
  const {id}=useParams();

  const config={
    headers: {
      "Content-Type": "application/json"
      },
      withCredentials: true
  }
  let deletePost=async()=>{
    
  const {data}=  await axios.delete(`https://mern-bloging-website-production.up.railway.app/posts/${id}`,config)
  console.log(data)
  if (data?.success) {
    toast.success(data.success)
  navigate("/blogs")
  }
  }


  let changePrivacy=async()=>{
    const config={
      headers: {
        "Content-Type": "application/json"
        },
        withCredentials: true
    }
    const {data}=  await axios.get(`https://mern-bloging-website-production.up.railway.app/change-post-privacy/${id}`,config)
  console.log(data)
  if (data?.error) {
    toast.error(data?.error)
  }
  else  {
    toast.success(data?.message)
  navigate("/private")
  }
  }
  

  useEffect(()=>{
    
    axios.get(`https://mern-bloging-website-production.up.railway.app/posts/${id}`)
    .then((res)=>{
      if(res?.data?.error){
        toast.error("invalid id")
      }
      setPost(res?.data?.data[0])
    })
    .catch(error=>console.log(error))
  },[id,post])
  
  useEffect(()=>{
      axios.get("https://mern-bloging-website-production.up.railway.app/getLogin",config)
      .then((res)=>setUser(res.data?.data))
      .catch(error=>console.log(error))
  },[])
  if (user?.email=="ali1@g.com") {
    setAdmin(true)
  }
  else{
    setAdmin(false)
  }
  return (

    <div>
      <Heade/>
      <div className='w-screen h-fit px-6 py-4'>
        <h1 className='text-4xl font-bold py-4'>{post?.title}</h1>
        <p>{post?.description}</p>
        <img className='h-screen w-screen object-contain' src={post?.image} alt="" />
        <h2 className='text-3xl font-semibold py-4'>Overview</h2>
        <div className='text-xl' dangerouslySetInnerHTML={{__html:post?.content}}></div>
      </div>
      {user?<Comment id={post?._id} user={user?.username}/>:<h2>Please login to comment</h2>}
      <div className='flex flex-col my-6 mx-6 gap-y-5'>
        <p className='text-2xl font-bold'>Comments</p>
        {
          post?.comments.map((item)=>{
            return(
              <div className='flex gap-x-16  border-2 px-4' key={item?._id}><p className='text-orange-300'>{item?.name}</p><p>{item?.comment}</p></div>
            )
          })
        }
      </div>
      {admin?<button onClick={deletePost} className='bg-red-500 px-4 py-3 text-white m-4'>Delete Post</button>:null}
      {admin&&post?.privat?<button onClick={changePrivacy} className='bg-red-500 px-4 py-3 text-white m-4'>Public the post</button>:null}
      {admin&&post?.privat==false?<button onClick={changePrivacy} className='bg-red-500 px-4 py-3 text-white m-4'>private the post</button>:null}
    </div>
  )
}

export default ReadPost