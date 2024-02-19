import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'; 
import ReCAPTCHA from "react-google-recaptcha";

function login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in...');
  };

  const onChange = () => {};

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
        <ReCAPTCHA
        sitekey="6LeJa3gpAAAAAGNkIb1M0zIsKP81-0JCAxhf3MpF"
        onChange={onChange}
        />,
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}

export default login;