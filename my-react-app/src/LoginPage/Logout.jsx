import React, { useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../Context/userContext";

const Logout = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      await axios.post('/logout');

      // Clear user context or perform any additional cleanup
      setUser(null);

      toast.success('Logout successful');
      navigate('/login'); // Redirect to login page or any other desired route after logout
    } catch (error) {
      console.error('Logout failed:', error);
      toast.error('Logout failed. Please try again.');
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;

