import {
  FaMapMarkerAlt,
  FaStar,
  FaClock,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

import "./DestinationCard.css";

function DestinationCard({ destination }) {
  return (
    <div className="destination-card">

      {/* Image Section */}

      <div className="destination-image">

        <img
          src={destination.image}
          alt={destination.name}
        />

        <span className="destination-badge">
          🔥 Best Seller
        </span>

        <div className="image-overlay">

          <div className="overlay-content">

            <h2>{destination.name}</h2>

            <div className="overlay-rating">
              <FaStar />
              <span>{destination.rating}</span>
            </div>

          </div>

        </div>

      </div>

      {/* Content */}

      <div className="destination-content">

        <div className="destination-location">

          <FaMapMarkerAlt />

          <span>{destination.state}</span>

        </div>

        <p className="destination-description">
          {destination.description}
        </p>

        <div className="destination-info">

          <div className="info-box">

            <FaClock />

            <span>{destination.duration}</span>

          </div>

          <div className="info-box">

            <FaUsers />

            <span>{destination.people}</span>

          </div>

        </div>

        <div className="destination-footer">

          <div className="price">

            <small>Starting From</small>

            <h3>{destination.price}</h3>

          </div>

          <button
  className="explore-btn"
  onClick={() => navigate(`/package/${destination.id}`)}
>
  Explore Now
</button>

        </div>

      </div>

    </div>
  );
}

export default DestinationCard;