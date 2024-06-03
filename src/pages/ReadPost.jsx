import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Heade from '../components/Heade';
import MyContext from '../context/CreateContext';
import { useContext } from 'react';
import axios from 'axios';
import {toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom";

function ReadPost() {
  const navigate=useNavigate();
  let {admin}=useContext(MyContext)
  const [post,setPost]=useState(null)
  const {id}=useParams();
  console.log(id)
  let deletePost=async()=>{
    const config={
      headers: {
        "Content-Type": "application/json"
        },
        withCredentials: true
    }
  const {data}=  await axios.delete(`http://localhost:3000/posts/${id}`,config)
  console.log(data)
  if (data.success) {
    toast.success(data.success)
  navigate("/blogs")
  }
  }
  useEffect(()=>{
    axios.get(`http://localhost:3000/posts/${id}`)
    .then((res)=>{
      setPost(res?.data?.data)
    })
    .catch(error=>console.log(error))
  },[id])
  console.log(post)
  return (

    <div>
      <Heade/>
      <div className='w-screen h-fit px-6 py-4'>
        <h1 className='text-4xl font-bold py-4'>{post?.title}</h1>
        <p>{post?.description}</p>
        <img className='h-[50vh] w-fit object-fit' src={post?.image} alt="" />
        <h2 className='text-3xl font-semibold py-4'>Overview</h2>
        <div className='text-xl' dangerouslySetInnerHTML={{__html:post?.content}}></div>
      </div>
      {admin?<button onClick={deletePost} className='bg-red-500 px-4 py-3 text-white m-4'>Delete Post</button>:null}
    </div>
  )
}

export default ReadPost