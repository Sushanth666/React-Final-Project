import { Link } from "react-router-dom";

const domesticPackages = [
  {
    id: 1,
    place: "Ooty",
    duration: "3 Days / 2 Nights",
    price: "₹7,999",
    rating: 4.8,
    description: "Enjoy the beautiful hills, tea estates and pleasant weather of Ooty.",
  },
  {
    id: 2,
    place: "Kodaikanal",
    duration: "2 Days / 1 Night",
    price: "₹6,999",
    rating: 4.7,
    description: "Visit Kodai Lake, Coaker's Walk and scenic viewpoints.",
  },
  {
    id: 3,
    place: "Munnar",
    duration: "4 Days / 3 Nights",
    price: "₹9,999",
    rating: 4.9,
    description: "Explore tea plantations, waterfalls and wildlife in Munnar.",
  },
];

function Domestic() {
  return (
    <>
      <h2 className="package-title">Domestic Packages</h2>

      <div className="package-grid">
        {domesticPackages.map((item) => (
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

export default Domestic;