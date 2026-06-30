import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPlaneDeparture, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import "./Navbar.css";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="container nav-container">

        <div className="logo">

          <FaPlaneDeparture />

          <span>TravelGo</span>

        </div>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul
          className={
            menuOpen
              ? "nav-links active"
              : "nav-links"
          }
        >

          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/destinations">
              Destinations
            </NavLink>
          </li>

          <li>
            <NavLink to="/packages">
              Packages
            </NavLink>
          </li>

          <li>
            <NavLink to="/booking">
              Booking
            </NavLink>
          </li>

                {/* <li>
            <NavLink to="/api-packages">
                API Packages
            </NavLink>
        </li> */}

          <li>
            <NavLink to="/about">
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact">
              Contact
            </NavLink>
          </li>

          <li>

            <button
              className="theme-btn"
              onClick={toggleTheme}
            >
              {theme === "light"
                ? "🌙"
                : "☀️"}
            </button>

          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;