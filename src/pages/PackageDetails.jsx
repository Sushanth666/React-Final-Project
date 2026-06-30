// import { useParams, Link } from "react-router-dom";
// import packages from "../data/packages";

// function PackageDetails() {

//   const { id } = useParams();

//   const packageData = packages.find(
//     item => item.id === Number(id)
//   );

//   if (!packageData) {
//     return (
//       <div className="container">
//         <h2>Package Not Found</h2>
//       </div>
//     );
//   }

//   return (

//     <div className="container details-page">

//       <h1>{packageData.place}</h1>

//       <h3>{packageData.category.toUpperCase()}</h3>

//       <p>
//         <strong>Duration:</strong> {packageData.duration}
//       </p>

//       <p>
//         <strong>Price:</strong> {packageData.price}
//       </p>

//       <p>
//         <strong>Rating:</strong> ⭐ {packageData.rating}
//       </p>

//       <p>{packageData.description}</p>

//       <Link to="/booking">
//         <button className="book-btn">
//           Book This Package
//         </button>
//       </Link>

//     </div>

//   );
// }

// export default PackageDetails;
import { useParams } from "react-router-dom";
import destinations from "../data/destinations";

function PackageDetails() {

  const { id } = useParams();

  const destination = destinations.find(
    (item) => item.id === Number(id)
  );

  if (!destination) {
    return <h2>Package Not Found</h2>;
  }

  return (

    <div className="package-details">

      <img
        src={destination.image}
        alt={destination.name}
      />

      <h1>{destination.name}</h1>

      <h3>{destination.state}</h3>

      <p>{destination.description}</p>

      <h2>{destination.price}</h2>

      <p>
        <strong>Duration:</strong>{" "}
        {destination.duration}
      </p>

      <p>
        <strong>Package Type:</strong>{" "}
        {destination.packageType}
      </p>

      <button>
        Book Now
      </button>

    </div>

  );
}

export default PackageDetails;