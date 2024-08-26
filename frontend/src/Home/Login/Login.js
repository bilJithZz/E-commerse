import React, { useContext, useState } from 'react';
import './Login.css';
import { Navigate } from 'react-router-dom';
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {MyContext} from "../../useContext/AuthContext"

const Login = () => {
  // const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const {setValue,username, setUsername}=useContext(MyContext)
  const sendata = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/cart/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    const result = await response.json();
    console.log(result);
    if(response.status===200){
      setValue(true)
      setRedirect(true)
      toast.success("Login successful");
    }else{
        toast.error("Login failed");
        setValue(false)
      console.log("user does not exist")
      setRedirect(false)
      
    }
  };
if(redirect){
  return<Navigate to='/' />
}

  return (
    <div>
      <form className='login' onSubmit={sendata}>
        <p>Username</p>
        <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
        <p>Password</p>
        <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <ToastContainer position="top-right"/>
    </div>
  );
};

export default Login;
