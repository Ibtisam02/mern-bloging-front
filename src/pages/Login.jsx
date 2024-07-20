import React, { useState } from 'react';
import Heade from '../components/Heade';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { useContext } from 'react';
import MyContext from '../context/CreateContext';
import { useEffect } from 'react';


function Login() {
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
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const config={
      headers: {
        "Content-Type": "application/json"
        },
        withCredentials: true
    }
    let {data}=await axios.post("login",{"username":formData.usernameOrEmail,"email":formData.usernameOrEmail,"password":formData.password},config)
   if (data?.error){
    toast.error(data?.error)
   }
   else{
    setFormData({
      usernameOrEmail: '',
    password: ''
    })
    navigate("/")
   }
  };
  return (
    <>
    <Heade/>
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl mb-4 text-center">Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="usernameOrEmail" className="block mb-2">Username or Email:</label>
          <input
            type="text"
            id="usernameOrEmail"
            name="usernameOrEmail"
            value={formData.usernameOrEmail}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Login</button>
      </form>
    </div>
    </>
  );
}

export default Login;
