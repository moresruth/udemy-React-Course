import React from "react";
import "./Navbar.css";

import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MovieApp</h1>

      <div className="navbar_links">
        <a href="">Popular</a>
      </div>
    </nav>
  );
};

export default Navbar;
