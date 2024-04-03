// Navbar.tsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './Navbar.css';

const Navbar: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const navigate = useNavigate(); // Use useNavigate to get the navigation function

  useEffect(() => {
    const handleScroll = () => {
      const currScrollPos = window.scrollY;
      const navBar = document.querySelector(".navbar") as HTMLElement;

      if (navBar) {
        if (currScrollPos > prevScrollPos) {
          navBar.style.transform = `translateY(-105%)`;
        } else {
          navBar.style.transform = `translateY(0%)`;
        }
      }

      setPrevScrollPos(currScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleClick = () => {
    navigate('/login'); // Navigate to the login page when the button is clicked
  };

  return (
    <div className="navbar">
      <div className="logo">
        <i className="fa-solid fa-font-awesome"></i>
        <Link to="/">LOGO</Link> {/* Use Link instead of <a> tag */}
      </div>
      <div className="menu">
        <div className="menu-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/">Blog</Link>
          <button className="log-in" onClick={handleClick}>Log In</button>
        </div>
      </div>
      <div className="menu-btn">
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}

export default Navbar;
