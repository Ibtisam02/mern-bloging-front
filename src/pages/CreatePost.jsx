import React, { useEffect } from "react";
import Heade from "../components/Heade";
import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast"
import { useContext } from "react";
import MyContext from "../context/CreateContext";
import { useNavigate } from "react-router-dom";
function CreatePost() {
  let navigate=useNavigate()
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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");
  const [privat, setPrivate] = useState(true);
  const [catagory, setCatagory] = useState("");
  const [subCatagory, setSubCatagory] = useState("");
  const [allCatagoris,setAllCatagoris]=useState([])
  const [allSubCatagoris,setAllSubCatagoris]=useState([])
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    
    const formData = new FormData();
    formData.append("image", image);
    formData.append("description", description);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("privat", privat);
    formData.append("catagor", catagory);
    formData.append("subCatagor", subCatagory);
      const {data}=await axios.post("create-post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials:true
      });
     if (data?.error) {
      toast.error(data.error)
     }
     else{
      toast.success(data?.message)
      setTitle("");
      setImage(null)
      setDescription("")
      setContent("")
      setPrivate(true)
      setCatagory("")
    setSubCatagory("")
    navigate("/blogs")
    }
    
  };
  useEffect(()=>{
    axios.get("subcatagories")
    .then((res)=>{setAllSubCatagoris(res.data?.data)})
    .catch(error=>console.log(error))


    axios.get("catagories")
    .then((res)=>{setAllCatagoris(res.data?.data)})
    .catch(error=>console.log(error))
  },[])
  return (
    <div>
      <Heade />
      <div className="max-w-3xl mx-auto mt-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="3"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image
            </label>
            <input
              type="file"
              id="image"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Content
            </label>
            <Editor
              initialValue=""
              apiKey="pgm0mc2kmjseb3ozpxzlzidtqnd09u46la8ne7izcgsgnj7r"
              init={{
                height: 500,
                menubar: true,
                plugins: [
                  "advlist autolink lists link image",
                  "charmap print preview anchor ",
                  "searchreplace visualblocks code",
                  "insertdatetime media table paste wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic | \
                  alignleft aligncenter alignright | \
                  bullist numlist outdent indent | help",
              }}
              onEditorChange={(content, editor) => setContent(content)}
            />
          </div>
          <div className="flex justify-between">
            <label
              htmlFor="Catagory"
              className="block text-sm font-medium text-gray-700"
            >
              Catagory
            </label>
            <select
              value={catagory}
              onChange={(e) => {
                setCatagory(e.target.value);
              }}
              name=""
              id="Catagory"
              
            >
              <option value={"---select---"}>---select---</option>
              {
                allCatagoris?.map((item)=>{
                  return (
                    <option key={item?._id} value={item?.catagory}>{item?.catagory}</option>
                  )
                })
              }
            </select>
            <Link to={"/add-catagory"}><p className="text-blue-600 underline-offset-1 cursor-pointer">Add A Catagory</p></Link>
          </div>
          <div className="flex justify-between">
            <label
              htmlFor="subCatagory"
              className="block text-sm font-medium text-gray-700"
            >
              Sub Catagory
            </label>
            <select
              value={subCatagory}
              onChange={(e) => {
                setSubCatagory(e.target.value);
              }}
              name=""
              id="subCatagory"
            >
              <option value={"---select---"}>---select---</option>
              {
                allSubCatagoris?.map((item)=>{
                  return (
                    <option key={item?._id} value={item?.subCatagory}>{item?.subCatagory}</option>
                  )
                })
              }
            </select>
            <Link to={"/add-catagory"}><p className="text-blue-600 underline-offset-1 cursor-pointer">Add A Sub Catagory</p></Link>
          </div>
          <div className="flex justify-around">
            <label
              htmlFor="visibilit"
              className="block text-sm font-medium text-gray-700"
            >
              Private
            </label>
            <input
              type="checkbox"
              id="visibilit"
              className="mt-1 p-2 block w-full rounded-md    "
              checked={privat}
              onChange={() => setPrivate((prv) => !prv)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="inline-block bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
