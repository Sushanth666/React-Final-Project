import { useState } from "react";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

import "./Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {

      alert("Please fill all fields.");

      return;

    }

    setShowSuccess(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {

      setShowSuccess(false);

    }, 3000);

  };

  return (

    <div className="contact-page">

      {/* Hero */}

      <section className="contact-hero">

        <div className="contact-overlay"></div>

        <div className="container">

          <div className="contact-hero-content">

            <span>Contact TravelGo</span>

            <h1>
              Let's Plan Your Next Adventure
            </h1>

            <p>
              We'd love to hear from you.
              Whether you have questions about
              destinations, bookings or travel
              packages, our experts are ready
              to assist you.
            </p>

          </div>

        </div>

      </section>

      {/* Contact Section */}

      <section className="container contact-section">
                {/* Left Side */}

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            We're here to make your travel planning
            easy and memorable. Contact us through
            any of the following ways.
          </p>

          <div className="info-card">

            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>

            <div>

              <h4>Office Address</h4>

              <span>
                Tirupur, Tamil Nadu, India
              </span>

            </div>

          </div>

          <div className="info-card">

            <div className="info-icon">
              <FaPhoneAlt />
            </div>

            <div>

              <h4>Phone Number</h4>

              <span>
                +91 98765 43210
              </span>

            </div>

          </div>

          <div className="info-card">

            <div className="info-icon">
              <FaEnvelope />
            </div>

            <div>

              <h4>Email Address</h4>

              <span>
                travelgo@gmail.com
              </span>

            </div>

          </div>

          <div className="info-card">

            <div className="info-icon">
              <FaClock />
            </div>

            <div>

              <h4>Working Hours</h4>

              <span>
                Monday - Saturday
              </span>

              <br />

              <span>
                9:00 AM - 7:00 PM
              </span>

            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="contact-form-card">

          <h2>Send Message</h2>

          <p>
            Fill out the form below and our travel
            consultant will contact you shortly.
          </p>
                    <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="input-group">

              <label>
                Full Name --- 
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>

            <div className="input-group">

              <label>
                Email Address ---
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

            <div className="input-group">

              <label>
                Subject ---
              </label>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />

            </div>

            <div className="input-group">

              <label>
                Message ---
              </label>

              <textarea
                rows="6"
                name="message"
                placeholder="Tell us about your dream trip..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

            </div>

            <button
              type="submit"
              className="send-btn"
            >

              Send Message

            </button>

          </form>

        </div>

      </section>
       {showSuccess && (

        <div className="success-modal">

          <div className="success-card">

            <div className="success-circle">

              <div className="checkmark">

                ✓

              </div>

            </div>

            <h2>
              Message Sent Successfully!
            </h2>

            <p>
              Thank you for contacting
              <strong> TravelGo</strong>.
              <br />
              Our travel consultant will contact you
              within <strong>24 hours</strong>.
            </p>

            <div className="success-details">

              <div>

                📧 A confirmation has been recorded.

              </div>

              <div>

                ☎️ Our travel expert will contact you shortly.

              </div>

            </div>

            <button
              className="success-btn"
              onClick={() =>
                setShowSuccess(false)
              }
            >

              Continue Exploring

            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Contact;
