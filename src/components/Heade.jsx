import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import MyContext from '../context/CreateContext'

function Heade() {
  const {user,admin}=useContext(MyContext)
  let routes=[
    {
      text:"Login",
      path:"/login",
      show: user?false:true
    },
    {
      text:"Singup",
      path:"/singup",
      show: user?false:true
    },
    {
      text:"Blogs",
      path:"/blogs",
      show:true
    },
    {
      text:"Create Post",
      path:"/create-post",
      show: admin?true:false
    },
    {
      text:"Profile",
      path:"/",
      show: user?true:false
    },
  ]
  return (
    <div>
        <ul className=' flex flex-row-reverse py-12 justify-center items-center gap-x-16'>
            {
              routes.map((item,i)=>{
                return(
                 item.show?<NavLink key={i} to={item.path}><li>{item.text}</li></NavLink>:null
                )
              })
            }
        </ul>
    </div>
  )
}

export default Heade