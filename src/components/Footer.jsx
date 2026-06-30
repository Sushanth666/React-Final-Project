import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        {/* Company */}

        <div className="footer-box">

          <h2 className="footer-logo">
            Travel<span>Go</span>
          </h2>

          <p>
            Explore the world's most beautiful destinations with
            TravelGo. We create unforgettable travel experiences
            at affordable prices.
          </p>

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaYoutube />
            </a>

          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-box">

          <h3>Quick Links</h3>

<ul className="footer-links">

  <li>
    <NavLink to="/">Home</NavLink>
  </li>

  <li>
    <NavLink to="/destinations">Destinations</NavLink>
  </li>

  <li>
    <NavLink to="/packages">Packages</NavLink>
  </li>

  <li>
    <NavLink to="/booking">Booking</NavLink>
  </li>

  <li>
    <NavLink to="/about">About</NavLink>
  </li>

  <li>
    <NavLink to="/contact">Contact</NavLink>
  </li>

</ul>

        </div>

        {/* Popular Destinations */}

        <div className="footer-box">

          <h3>Popular Places</h3>

          <ul>

            <li>Ooty</li>

            <li>Munnar</li>

            <li>Goa</li>

            <li>Manali</li>

            <li>Kashmir</li>

            <li>Kodaikanal</li>

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-box">

          <h3>Contact Us</h3>

          <p>
            <FaMapMarkerAlt />
            Tirupur, Tamil Nadu
          </p>

          <p>
            <FaPhoneAlt />
            +91 9876543210
          </p>

          <p>
            <FaEnvelope />
            travelgo@gmail.com
          </p>

          {/* <div className="newsletter">

            <input
              type="email"
              placeholder="Your Email"
            />

            <button>

              <FaPaperPlane />

            </button>

          </div> */}

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 TravelGo | Designed by Sree Sushanth B V

      </div>

    </footer>
  );
}

export default Footer;