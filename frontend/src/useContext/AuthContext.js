// context/MyContext.js
import React, { createContext, useState } from 'react';

// Create a Context with a default value
export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [value, setValue] = useState();
  const [username, setUsername] = useState("");

  return (
    <MyContext.Provider value={{ value, setValue,username,setUsername }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
