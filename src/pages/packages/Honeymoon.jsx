import { Link } from "react-router-dom";

const honeymoonPackages = [
  {
    id: 7,
    place: "Maldives",
    duration: "4 Days / 3 Nights",
    price: "₹99,999",
    rating: 5.0,
    description:
      "Stay in luxury water villas, enjoy private beaches and romantic candlelight dinners.",
  },
  {
    id: 8,
    place: "Bali",
    duration: "5 Days / 4 Nights",
    price: "₹84,999",
    rating: 4.9,
    description:
      "Discover beautiful beaches, temples and luxury resorts perfect for couples.",
  },
  {
    id: 9,
    place: "Switzerland",
    duration: "7 Days / 6 Nights",
    price: "₹1,69,999",
    rating: 5.0,
    description:
      "Experience snow-covered mountains, scenic train journeys and romantic landscapes.",
  },
];

function Honeymoon() {
  return (
    <>
      <h2 className="package-title">Honeymoon Packages</h2>

      <div className="package-grid">
        {honeymoonPackages.map((item) => (
          <div className="package-box" key={item.id}>
            <h3>{item.place}</h3>

            <p>
              <strong>Duration:</strong> {item.duration}
            </p>

            <p>
              <strong>Rating:</strong> ⭐ {item.rating}
            </p>

            <p>{item.description}</p>

            <h4>{item.price}</h4>

            <Link to={`/package/${item.id}`}>
              <button className="package-btn">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Honeymoon;