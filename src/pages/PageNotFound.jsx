import React from 'react'
import Footer from '../components/Footer'
import Heade from '../components/Heade'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import MyContext from '../context/CreateContext'
import { useEffect } from 'react'
import axios from 'axios'
function PageNotFound() {
  let {user,setUser,setAdmin}=useContext(MyContext)
  const config={
    headers: {
      "Content-Type": "application/json"
      },
      withCredentials: true
  }
  useEffect(() => {
    axios
      .get("getLogin", config)
      .then((res) => setUser(res.data?.data))
      .catch((error) => console.log(error));
  }, []);
  if (user?.email == "ali1@g.com") {
    setAdmin(true);
  } else {
    setAdmin(false);
  }
  return (
    <div>
      <Heade/>
      <div className='h-[60vh] w-full flex justify-center items-center flex-col'>
        <div>
            <p className='text-3xl'>Page Not Found!</p>
        </div>
        <div>
            <Link to={"/"}> <button  className='bg-orange-500 text-2xl mt-12 text-white px-5 py-3'>Go Back to Home Page</button></Link>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default PageNotFound