import React, { useState } from 'react';
import MyContext from './CreateContext';

const MyContextProvider = ({ children }) => {
  const [user,setUser]=useState(null)
  const [admin,setAdmin]=useState(false)
  
  return (
    <MyContext.Provider value={{ setUser,user,admin,setAdmin }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;