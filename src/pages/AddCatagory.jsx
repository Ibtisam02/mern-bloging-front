import axios from "axios";
import React, { useState } from "react";
import Heade from "../components/Heade"

function AddCatagory() {
  const [catagoyText, setCatagoyText] = useState("");
  let [data, setData] = useState(null);

  const [subCatagoyText, setSubCatagoyText] = useState("");
    let [data1, setData1] = useState(null);


  const AddNewCatagory = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/add-catagory", { catagory: catagoyText })
      .then((res) => setData(res))
      .catch((error) => console.log("this is an error" + error));
  };



 
    
    const AddNewSubCatagory = (e) => {
      e.preventDefault();

      axios
        .post("http://localhost:3000/add-subcatagory", { subCatagory: subCatagoyText })
        .then((res) => setData1(res))
        .catch((error) => console.log("this is an error" + error));
    };
  
  console.log(data);
  console.log(data1);
  return (
    <>
      <Heade />
    <div className="flex flex-col justify-center items-center py-16 bg-yellow-400 h-[100vh]">
      <form className=" px-10 py-5 flex" onSubmit={AddNewCatagory}>
        <div className="flex gap-x-5 mr-5">
          <label htmlFor="catagoryInput">Catagory</label>
          <input
            id="catagoryInput"
            type="text"
            value={catagoyText}
            onChange={(e) => {
              setCatagoyText(e.target.value);
            }}
          />
        </div>
        <button className="bg-green-500 px-5 py-1" type="submit">Add</button>
      </form >
      <form className=" px-10 py-5  flex" onSubmit={AddNewSubCatagory}>
        <div className="flex gap-x-5 mr-5">
          <label htmlFor="catagoryInput">Sub Catagory</label>
          <input
            id="catagoryInput"
            type="text"
            value={subCatagoyText}
            onChange={(e) => {
              setSubCatagoyText(e.target.value);
            }}
          />
        </div>
        <button className="bg-green-500 px-5 py-1" type="submit">Add</button>
      </form>
    </div>
    </>
  );
}

export default AddCatagory;
