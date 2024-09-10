import React from 'react'
import { Link } from 'react-router-dom'

function Posts({item}) {
  return (
    <Link key={item?._id} to={`/blogs/${item?._id}`}>
              <div  className='bg-slate-300 px-4 py-3 rounded-md hover:cursor-pointer hover:shadow-md hover:transition-shadow duration-300 ease-in' key={item._id}>
                <img className='h-56 w-56 object-cover rounded-sm'  src={item?.image} alt="" />
                <p className='text-center text-2xl font-semibold text-blue-600'>{item?.title.length>10?item?.title.slice(0,10)+"...":item?.title}</p>
                <p className='text-center'>{item?.description.length>25?item?.description.slice(0,25)+"...":item?.title}</p>
              </div>
    </Link>
  )
}

export default Posts