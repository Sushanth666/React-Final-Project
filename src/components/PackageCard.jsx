import {
  FaMapMarkerAlt,
  FaStar,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

import "./PackageCard.css";

function PackageCard({ item }) {
  return (
    <div className="package-card">

      {/* Image */}

      <div className="package-image">

        <img
          src={item.image}
          alt={item.title}
        />

        <div className="package-overlay">

          <span className="offer-badge">
            20% OFF
          </span>

          <div className="package-rating">

            <FaStar />

            <span>{item.rating}</span>

          </div>

        </div>

      </div>

      {/* Content */}

      <div className="package-content">

        <div className="package-location">

          <FaMapMarkerAlt />

          <span>{item.location}</span>

        </div>

        <h2>
          {item.title}
        </h2>

        <p>
          {item.description}
        </p>

        <div className="package-info">

          <div>

            <FaClock />

            <span>
              {item.duration}
            </span>

          </div>

          <div>

            ⭐

            <span>
              Premium Tour
            </span>

          </div>

        </div>

        <div className="package-footer">

          <div className="price">

            <small>
              Starting From
            </small>

            <h3>
              ₹{item.price}
            </h3>

          </div>

          <button>

            Book Now

            <FaArrowRight />

          </button>

        </div>

      </div>

    </div>
  );
}

export default PackageCard;