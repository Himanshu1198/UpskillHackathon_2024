import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux'
// import {toast } from 'react-toastify'
import './Login.css'
const Login = () => {
  const [formData, setformData] = useState({

    email:'',
    password:'',
   
  });
const { email, password}=formData
  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    setformData((prevState)=>({
        ...prevState,
        [e.target.id]:(e.target.value),
    }))
  };
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    // dispatch(login(formData))
    // .unwrap()
    // .then((user: { name: any; }) => {
    //   toast.success(`Logged in as ${user.name}`)
    //   navigate('/')
    // })
    // .catch(toast.error)
  }
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
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
          <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
            Login
          </button>
            </div>
            <div>
            <p>Create a new Account <Link to='/signup'>Sign Up</Link></p>
          <button className='login-with-google-btn'>Sign In With Google</button>
            </div>
            
        </form>
      </div>
    </div>
  );
};

export default Login;
