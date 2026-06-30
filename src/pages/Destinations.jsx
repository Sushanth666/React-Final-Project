import { useMemo, useState } from "react";

import {
  FaSearch,
  FaFilter,
  FaSortAmountDown,
} from "react-icons/fa";

import DestinationCard from "../components/DestinationCard";
import destinations from "../data/destinations";
import { useNavigate } from "react-router-dom";

import "./Destinations.css";

function Destinations() {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const [stateFilter, setStateFilter] =
    useState("All");

  const [sortBy, setSortBy] =
    useState("default");

  const filteredDestinations = useMemo(() => {

    let data = [...destinations];

    /* Search */

    data = data.filter((item) =>
      item.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    /* State Filter */

    if (stateFilter !== "All") {

      data = data.filter(
        (item) => item.state === stateFilter
      );

    }

    /* Sorting */

    if (sortBy === "price") {

      data.sort(
        (a, b) =>
          Number(a.price.replace(/[₹,]/g, "")) -
          Number(b.price.replace(/[₹,]/g, ""))
      );

    }

    if (sortBy === "rating") {

      data.sort(
        (a, b) => b.rating - a.rating
      );

    }

    return data;

  }, [search, stateFilter, sortBy]);

  return (

    <div className="destination-page">

      {/* Hero */}

      <section className="destination-hero">

        <div className="container">

          <div className="hero-content">

            {/* <span>
              Discover Amazing Places
            </span> */}

            <h1>
              Explore Your Dream Destination
            </h1>

            {/* <p>
              Search, filter and discover the
              best travel destinations across India.
            </p> */}

          </div>

        </div>

      </section>

      {/* Search */}

      <section className="container">

        <div className="destination-toolbar">

          {/* Search */}

          <div className="toolbar-box">

            <FaSearch />

            <input
              type="text"
              placeholder="Search destination..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

          {/* Filter */}

          <div className="toolbar-box">

            <FaFilter />

            <select
              value={stateFilter}
              onChange={(e) =>
                setStateFilter(e.target.value)
              }
            >

              <option>All</option>

              <option>Tamil Nadu</option>

              <option>Kerala</option>

              <option>Goa</option>

              <option>Himachal Pradesh</option>

              <option>Jammu & Kashmir</option>

            </select>

          </div>

          {/* Sort */}

          <div className="toolbar-box">

            <FaSortAmountDown />

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value)
              }
            >

              <option value="default">
                Default
              </option>

              <option value="price">
                Price
              </option>

              <option value="rating">
                Rating
              </option>

            </select>

          </div>

        </div>

      </section>

      {/* Cards */}

      <section className="container">

        <div className="destination-grid">

          {filteredDestinations.length > 0 ? (

            filteredDestinations.map(
              (destination) => (

                <DestinationCard
                  key={destination.id}
                  destination={destination}
                />
                

              )
            )

          ) : (

            <div className="no-result">

              <h2>
                No Destinations Found
              </h2>

              <p>
                Try another search or filter.
              </p>

            </div>

          )}

        </div>

      </section>

    </div>

  );

}

export default Destinations;