import React from "react";
import './Navbar.css'

function Navbar() {
    return (
      <div className="Navbar">
        <h1><a href="#home">Navbar</a></h1>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    );
  }
  
  export default Navbar;