import React from 'react';
import { Link } from 'react-router-dom';
import "@/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <i className="fa-solid fa-font-awesome"></i>
        <Link to="/login">LOGO</Link>
      </div>
      <div className="menu">
        <div className="menu-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blog</Link>
          <p><Link to='/login'>Log In</Link></p>
        </div>
      </div>
      <div className="menu-btn">
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
};

export default Navbar;

