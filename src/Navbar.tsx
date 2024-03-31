import React, { useEffect, useState } from 'react';
import "@/Navbar.css";

const Navbar: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const navBar = document.querySelector(".navbar") as HTMLElement;

    const handleScroll = () => {
      const currScrollPos = window.scrollY;

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

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <i className="fa-solid fa-font-awesome"></i>
          <a href="#">LOGO</a>
        </div>
        <div className="menu">
          <div className="menu-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
          <button className="log-in">Log In</button>
          </div>
        </div>
        <div className="menu-btn">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </>
  );
}

export default Navbar;
