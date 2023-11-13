import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import "../App.css";

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header className="nav">
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3 style={{ color: "black" }}>MS Logo</h3>
        </Link>
      </div>
      <div>
        <nav ref={navRef}>
          <Link to="/" className="navLink">
            Home
          </Link>
          <Link to="/about" className="navLink">
            About
          </Link>
          <Link to="/projects" className="navLink">
            Projects
          </Link>
          <div>
            <a href="https://github.com/michelsaber" className="navLink">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/michel-saber/"
              className="navLink">
              <FaLinkedin />
            </a>
          </div>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
