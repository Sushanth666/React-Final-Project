import useFetch from "../hooks/useFetch";
import { fetchPackages } from "../services/api";
import APIPackageCard from "../components/APIPackageCard";

function APIPackages() {

  const {
    data,
    loading,
    error,
  } = useFetch(fetchPackages);

  if (loading) {
    return (
      <h2 className="section-title">
        Loading Packages...
      </h2>
    );
  }

  if (error) {
    return (
      <h2 className="section-title">
        {error}
      </h2>
    );
  }

  return (
    <div className="container">

      <h1 className="section-title">
        Popular Travel Packages
      </h1>

      <div className="destination-grid">

        {data.map((item) => (

          <APIPackageCard
            key={item.id}
            item={item}
          />

        ))}

      </div>

    </div>
  );
}

export default APIPackages;