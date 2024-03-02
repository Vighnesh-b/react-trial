import React,{useReducer, useState} from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import './LoginPage.css'; 

export default function LoginPage() {
  const navigate=useNavigate();
  const [data,setData]=useState({
    email:'',
    password:'',
  })
  const loginUser =async(e)=>{
    e.preventDefault()
    const {email,password}=data
    try {
      const {data}=await axios.post('/login',{
        email,
        password
      });
      if(data.error){
        toast.error(data.error)
      }else{
        setData({});
        navigate('/')        
      }
    } catch (error) {
      
    }
  }

  return (
    <div><form onSubmit={loginUser}>
        <label>Email</label>
        <input type="email" placeholder='enter email...' value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}/>
        <label>Password</label>
        <input type="password" placeholder='enter password...' value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
        <button type='submit'>Login</button>
        <ReCAPTCHA
        sitekey="6LeJa3gpAAAAAGNkIb1M0zIsKP81-0JCAxhf3MpF"
        onChange={onChange}
        />,
    </form></div>
  )
}