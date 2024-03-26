import { useState } from "react";
import logo from "../../assets/images/PIH-Logo-horizontal-1.png";
import "./Navbar.css"; // Ensure you have a Navbar.css file in the same folder

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} className="navbar-logo" alt="logo" />
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <div className="menu-close" onClick={() => setIsOpen(false)}>
          ×
        </div>
        <ul>
          <li>
            <a href="#sectors">Sectors</a>
          </li>
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#companies">Group Companies</a>
          </li>
          <li>
            <a href="#sustainability">Sustainability</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#careers">Careers</a>
          </li>
          <li>
            <a href="#contact">Contact us</a>
          </li>
        </ul>
        <div className="social-icons">{/* Social icons go here */}</div>
      </div>
    </nav>
  );
}

export default Navbar;
