import React, { useState } from 'react'
import './Register.css'

import { Navigate, } from 'react-router-dom'

import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {

  
const[username,setUsername]=useState("");
const[password,setPassword]=useState("")
const[email,setEmail]=useState("")
const [redirect, setRedirect] = useState(false);

 
const registerData = async (e) => {
e.preventDefault();
try {
  const response = await fetch("http://localhost:5000/cart/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password })
  });

  if (!response.ok) {
    throw new Error('Registration failed');
  }

  const result = await response.json();
  console.log(result);
  toast.error("Account created succes fully");

} catch (error) {
  console.error('There has been a problem with your fetch operation:', error);

}
};

if(redirect){
  return<Navigate to='/login' />
}

  return (
    <div><form className="register" onSubmit={registerData}>
        <input 
        type="text"
        placeholder='username'
        value={username}
         onChange={e=>setUsername(e.target.value)} />
        <input 
        type="text" 
        placeholder='email' 
        value={email} 
        onChange={e=>setEmail(e.target.value)}/>
        <input 
        type="password" 
        placeholder='password' 
        value={password} 
        onChange={e=>setPassword(e.target.value)} />
        <button>submit</button>
        <span onClick={()=>setRedirect(true)} >click here to login</span>
       
        </form>
        <ToastContainer position="top-right"/></div>
  )
}

export default Register