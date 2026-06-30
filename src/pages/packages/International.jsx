import { Link } from "react-router-dom";

const internationalPackages = [
  {
    id: 4,
    place: "Dubai",
    duration: "5 Days / 4 Nights",
    price: "₹59,999",
    rating: 4.8,
    description:
      "Experience the Burj Khalifa, Desert Safari, Dubai Mall and Marina Cruise.",
  },
  {
    id: 5,
    place: "Singapore",
    duration: "6 Days / 5 Nights",
    price: "₹72,999",
    rating: 4.9,
    description:
      "Visit Universal Studios, Sentosa Island, Marina Bay Sands and Gardens by the Bay.",
  },
  {
    id: 6,
    place: "Thailand",
    duration: "5 Days / 4 Nights",
    price: "₹54,999",
    rating: 4.7,
    description:
      "Enjoy Phuket beaches, Bangkok nightlife, island tours and Thai culture.",
  },
];

function International() {
  return (
    <>
      <h2 className="package-title">International Packages</h2>

      <div className="package-grid">
        {internationalPackages.map((item) => (
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

export default International;