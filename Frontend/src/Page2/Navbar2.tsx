import React, { useEffect, useState } from 'react';
import "@/Navbar.css";
import {Link} from 'react-router-dom'
const Navbar2: React.FC = () => {
  // const [prevScrollPos, setPrevScrollPos] = useState(0);

  // useEffect(() => {
    // const navBar = document.querySelector(".navbar") as HTMLElement;

  //   const handleScroll = () => {
  //     const currScrollPos = window.scrollY;

  //     if (navBar) {
  //       if (currScrollPos > prevScrollPos) {
  //         navBar.style.transform = `translateY(-105%)`;
  //       } else {
  //         navBar.style.transform = `translateY(0%)`;
  //       }
  //     }

  //     setPrevScrollPos(currScrollPos);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [prevScrollPos]);

  const userData=localStorage.getItem('userData')
  return (
    <>
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
            {

          userData ?
          <Link to='/login' className="log-in">Logged In
          </Link>
          :
          <Link to='/login' className="log-in">Log In
          </Link>
            }
          </div>
        </div>
        <div className="menu-btn">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </>
  );
}

export default Navbar2;
