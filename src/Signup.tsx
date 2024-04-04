import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
const Signup = () => {
  const [formData, setformData] = useState({
    name:'',
    email:'',
    password:'',
    cpassword:''
  });
const {name, email, password,cpassword}=formData
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/users', // Replace with your server URL
});
const navigate=useNavigate();
  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    setformData((prevState)=>({
        ...prevState,
        [e.target.id]:(e.target.value),
    }))
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    axiosInstance.post('/', {
      name,
      email,
      password
    })
    .then(response => {
      const userData=response.data
      localStorage.setItem('userData', JSON.stringify(userData));
      navigate('/pagetwo')
    })
    .catch(error => {
      console.error('Register failed:', error.response.data);
    });
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
