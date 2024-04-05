import  { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './Context/Auth/AuthContext';

import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { dispatch, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirect if the user is logged in
  useEffect(()=>{
    if (currentUser != null) {
    navigate('/');
  }},[])
  

  const { email, password } = formData;

  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Login failed');
      }

      const user = await response.json();

      // Store user data in local storage
      localStorage.setItem('user', JSON.stringify(user));

      // Dispatch action to update context state
      dispatch({ type: 'LOGIN', payload: user });

      // Redirect to desired location
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
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
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
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
            <p>
              Create a new Account <Link to="/signup">Sign Up</Link>
            </p>
            <button className="login-with-google-btn">Sign In With Google</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
