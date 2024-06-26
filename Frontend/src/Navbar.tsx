import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "@/Navbar.css";
import { AuthContext } from './Context/Auth/AuthContext';

const Navbar: React.FC = () => {
  const { currentUser, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('user'); // Clear user data from local storage
  };
  
  return (
    <div className="navbar">
      <div className="logo">
        {/* <i className="fa-solid fa-font-awesome"></i> */}
        <a href="#">⚡SKILLSYNC</a>
      </div>
      <div className="menu">
        <div className="menu-links">
          <Link to="#">Home</Link>
          <Link to="#">About</Link>
          <Link to="#">Contact</Link>
          <Link to="#">Blog</Link>
          <Link to='/BeMentor'>Be a Mentor</Link>
          <Link to='/FindMentor'>Find a Mentor</Link>
          {currentUser ? (
            <>
            <Link to='/'>
              <button className="log-in" onClick={handleLogout}>Log out</button>
              </Link>
              {/* Apply styles directly to the img element */}
              <Link to='/PageTwo'>
              <img src={currentUser.img} className='profile-img' style={{ borderRadius: '50%', width: '40px', height: '40px' }} alt="Profile" />
              </Link>
            </>
          ) : (
            <Link to="/login" className="log-in">Log In</Link>
          )}
        </div>
      </div>
      <div className="menu-btn">
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
};

export default Navbar;
