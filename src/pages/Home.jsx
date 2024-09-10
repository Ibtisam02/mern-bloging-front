import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import MyContext from "../context/CreateContext";
import { Link } from "react-router-dom";
import Heade from "../components/Heade";
import Footer from "../components/Footer";
import Typed from "typed.js";
import Posts from "../components/Posts";
import ContactUs from "../components/ContactUs";
function Home() {
  let [catagries,setAllCatagoris]=useState([]);
  let [posts,setPosts]=useState([])
 

  useEffect(()=>{
    axios.get("catagories")
    .then((res)=>{setAllCatagoris(res.data?.data?.map((item)=>item.catagory))})
    .catch(error=>console.log(error))
  },[])
  let { user, setUser, setAdmin } = useContext(MyContext);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
console.log(catagries)
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
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings:catagries,
      loop:true,
      backSpeed:50,
      typeSpeed: 150,
      cursorChar:"|"
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [catagries]);

  useEffect(()=>{
    axios.get("sorted-posts")
    .then(res=>{setPosts(res.data?.data)})
    .catch(error=>console.log(error))
  },[])
  console.log(posts)
  return (
    <div>
      <Heade />
      <div className="py-4 relative bg-[#c5c0c0] w-full h-[80vh]">
        <div className="absolute text-center font-extrabold text-7xl -translate-y-1/2 top-1/2 left-72">
          <h1 className=" block">Stay Uptodate with</h1>
          <p ref={el} className=" inline-block font-extrabold text-7xl text-blue-500 ">
            
          </p>
        </div>
      </div>
      <div className="w-full h-fit">
        <h1 className="text-center font-bold text-4xl">Latest Posts</h1>
        <div className='w-screen h-fit flex justify-center my-10 flex-wrap items-center gap-10'>
        {
          posts?.map((item,i)=>{
           return(
             <Posts item={item}/>
            )
          })
        }
        </div>
        <div className="p-5">
          <h1 className="text-center font-bold text-4xl">About Us</h1>
          <p className="text-justify mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quibusdam minus ipsum excepturi error labore non explicabo accusamus, at veritatis impedit, quo nesciunt odit ad quas recusandae aperiam minima iusto et natus consequuntur vel suscipit ducimus corporis. Maxime, suscipit expedita voluptatum tenetur eum animi praesentium ipsam tempora error molestiae perferendis, voluptates atque odio assumenda officiis placeat sed ea sit autem facere quae iste iure vero! Sunt nihil mollitia architecto optio quasi officiis suscipit. Dolorem illum quam rerum at est ducimus repudiandae inventore harum eligendi iste esse molestiae dolor vero, sunt dolore non facere perspiciatis eius vitae cupiditate. Quas esse quod, tenetur, quos ullam culpa doloribus dolores dicta eos nobis nam minus ducimus, blanditiis vitae quaerat omnis facere nulla incidunt porro inventore veritatis. Mollitia, ullam placeat. Distinctio cum quisquam eius accusantium, animi voluptatem dolor corrupti rerum voluptas omnis, beatae dolorem tempore temporibus nobis eligendi possimus obcaecati amet voluptatum, consectetur aliquid excepturi hic consequuntur ut. Blanditiis quasi dolores, veniam odit facilis consectetur. Veniam, mollitia assumenda. Vel facilis iusto dicta quam, necessitatibus eligendi amet quis? Eos vel modi iure nemo et accusantium, officia, libero voluptate, recusandae est sint odit minus? Tempora, eius reprehenderit. In vero nemo quibusdam libero, ipsum exercitationem minima quod totam!</p>
        </div>
        <div>
          <h1 className="text-center font-bold text-4xl">Our Owner</h1>
          <div className="flex gap-x-16 justify-center items-center mt-10">
          <img className="w-[300px] h-[300px] object-cover rounded-full" src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <img className="w-[300px] h-[300px] object-cover rounded-full" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <img className="w-[300px] h-[300px] object-cover rounded-full" src="https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
        </div>
        <div>
          <h1 className="text-center font-bold text-4xl my-10">Contact Us</h1>
          <ContactUs/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
