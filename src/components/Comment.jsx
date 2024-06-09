import React, { useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';

function Comment({id="",user=""}) {
    let [comment,setComment]=useState("");

    const addComment=async(e)=>{
        e.preventDefault();
        const config={
            headers: {
              "Content-Type": "application/json"
              },
              withCredentials: true
          }
        let {data}=await axios.post("http://localhost:3000/add-comment",{"name":user,"text":comment,"post":id},config)
        if (data?.error) {
            toast.error(data.error)
        }
        else{
            toast.success("Comment poasted successfully");
            setComment("");
        }
    }
  return (
    <div className='w-fit  flex items-center justify-around gap-3 px-5'>
        <input onChange={(e)=>setComment(e.target.value)} value={comment} className='w-96 h-10 outline-none border-b-2 border-black' placeholder='Comment..' type="text" />
        <button onClick={addComment} className=' h-full px-10 py-2 bg-red-500 text-white'>add</button>
    </div>
  )
}

export default Comment 