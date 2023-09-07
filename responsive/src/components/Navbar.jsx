import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className={`navbar ${showNavbar ? "open" : ""}`}>
      <button className="navbar__toggle" onClick={toggleNavbar}>
        &#9776;
      </button>
      <ul className="navbar__list">
        <li className="navbar__item">
          <a href="#">Link 1</a>
        </li>
        <li className="navbar__item">
          <a href="#">Link 2</a>
        </li>
        <li className="navbar__item">
          <a href="#">Link 3</a>
        </li>
        <li className="navbar__item">
          <a href="#">Link 4</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
