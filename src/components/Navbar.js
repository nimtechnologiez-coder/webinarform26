import React, { useState } from "react";
import "../Style/Navbar.css";
import logoImg from "../images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        {/* LOGO */}
        <div className="logo">
          <a href="/">
            <img src={logoImg} alt="NIM Academy Logo" />
          </a>
        </div>

        {/* DESKTOP MENU */}
        <ul className="nav-links">
          <li><a href="/">HOME</a></li>

          {/* External link → new tab */}
          <li>
            <a
              href="https://nimacademy.in/course"
              target="_blank"
              rel="noopener noreferrer"
            >
              COURSE
            </a>
          </li>

          <li>
  <a href="https://enroll.nimtechnologies.in/" target="_blank" rel="noopener noreferrer">
    PORTAL
  </a>
</li>

<li>
  <a href="https://nimacademy.in/Contact" target="_blank" rel="noopener noreferrer">
    CONTACT US
  </a>
</li>

        </ul>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setOpen(true)}>
          ☰
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <span className="close" onClick={() => setOpen(false)}>×</span>
        <ul>
          <li><a href="/" onClick={() => setOpen(false)}>HOME</a></li>

          {/* External link → new tab */}
          <li>
            <a
              href="https://nimacademy.in/course"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              COURSE
            </a>
          </li>

          <li>
  <a href="https://enroll.nimtechnologies.in/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
    PORTAL
  </a>
</li>

          <li><a href="https://nimacademy.in/Contact" onClick={() => setOpen(false)}>CONTACT US</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
