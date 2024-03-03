import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import './LoginPage.css'; 
import { UserContext } from "../Context/userContext"
import { useContext } from "react"

export default function LoginPage() {
  const navigate = useNavigate();
  const {user,setUser}=useContext(UserContext);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    
    try {
      const { data: responseData } = await axios.post('/login', {
        email,
        password,
      });

      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        setData({
          ...data,
          password: '', 
        });
        axios.get('/profile').then(({data}) => (setUser(data)))
        navigate('/');
      }
    } catch (error) {
      console.error('Login failed:', error);
      toast.error('Login failed. Please try again.');
    }
  };

  const onChange = () => {};

  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email..."
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password..."
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <ReCAPTCHA
          sitekey="6LeJa3gpAAAAAGNkIb1M0zIsKP81-0JCAxhf3MpF"
          onChange={onChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
