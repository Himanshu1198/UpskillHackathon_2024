import React, { useState, useContext } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './Context/Auth/AuthContext';
import axios from 'axios'; // Import axios for making HTTP requests

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: ''
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const { name, email, password, cpassword } = formData;

  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      // Make POST request to signup API endpoint
      const response = await axios.post('http://localhost:8000/api/users/register', formData);
      
      // Extract user data from response
      const user = response.data;

      // Store user data in local storage
      localStorage.setItem('user', JSON.stringify(user));

      // Dispatch action to update context state
      dispatch({ type: 'LOGIN', payload: user });

      // Redirect user to desired location (e.g., home page)
      navigate('/'); // Assuming '/' is the home page route
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              value={name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="cpassword"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              value={cpassword}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
          <div>
            <button className='login-with-google-btn'>Sign In With Google</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

