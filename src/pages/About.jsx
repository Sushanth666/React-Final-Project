import {
  FaPlaneDeparture,
  FaUsers,
  FaGlobeAsia,
  FaAward,
  FaCheckCircle,
} from "react-icons/fa";
import aboutImage from "../assets/images/about.jpg";
import "./About.css";

function About() {
  const features = [
    "5000+ Happy Travelers",
    "150+ Destinations",
    "24/7 Customer Support",
    "Best Price Guarantee",
    "Secure Online Booking",
    "Trusted Travel Experts",
  ];

  return (
    <div className="about-page">

      {/* Hero */}

      <section className="about-hero">

        <div className="about-overlay"></div>

        <div className="container">

          <div className="about-content">

            <span>
              Welcome To TravelGo
            </span>

            <h1>
              Explore The World With Confidence
            </h1>

            <p>
              We create unforgettable travel
              experiences with premium services,
              expert planning and affordable prices.
            </p>

          </div>

        </div>

      </section>

      {/* About */}

      <section className="container about-section">

        <div className="about-image">

          <div className="about-image">
  <img
    src={aboutImage}
    alt="About TravelGo"
  />
</div>

        </div>

        <div className="about-text">

          <h2>
            Your Trusted Travel Partner
          </h2>

          <p>
            TravelGo helps thousands of travellers
            discover amazing destinations across
            India and around the world.
          </p>

          <p>
            Our experienced travel consultants
            ensure every trip is memorable,
            affordable and completely stress-free.
          </p>

          <div className="feature-list">

            {features.map((item, index) => (

              <div
                key={index}
                className="feature-item"
              >

                <FaCheckCircle />

                <span>{item}</span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="stats-section">

        <div className="container stats-grid">

          <div className="stat-card">

            <FaUsers />

            <h2>5000+</h2>

            <p>Happy Customers</p>

          </div>

          <div className="stat-card">

            <FaPlaneDeparture />

            <h2>150+</h2>

            <p>Destinations</p>

          </div>

          <div className="stat-card">

            <FaGlobeAsia />

            <h2>50+</h2>

            <p>Countries</p>

          </div>

          <div className="stat-card">

            <FaAward />

            <h2>10+</h2>

            <p>Years Experience</p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;