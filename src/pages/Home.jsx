// import { useEffect, useRef, useState } from "react";
// import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

// import Hero from "../components/Hero";
// import DestinationCard from "../components/DestinationCard";
// import WhyChoose from "../components/WhyChoose";
// import Testimonials from "../components/Testimonials";
// import Gallery from "../components/Gallery";
// import FAQ from "../components/FAQ";
// import Newsletter from "../components/Newsletter";
// import ScrollReveal from "../components/ScrollReveal";
// import destinations from "../data/destinations";

// function Home() {
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("All");

//   const searchRef = useRef(null);

//   useEffect(() => {
//     if (searchRef.current) {
//       searchRef.current.focus();
//     }
//   }, []);

//   const filteredDestinations = destinations.filter((destination) => {
//     const matchesSearch = destination.name
//       .toLowerCase()
//       .includes(search.toLowerCase());

//     const matchesFilter =
//       filter === "All" || destination.state === filter;

//     return matchesSearch && matchesFilter;
//   });

//   return (
//     <>
//       {/* Hero Section */}

//       <Hero />

//       {/* Search & Filter */}

//       <section className="search-filter-container">

//         <div className="container">

//           <div className="search-header">

//             <h2>
//               Find Your Dream Destination
//             </h2>

//             <p>
//               Search your favorite destination and explore amazing travel experiences.
//             </p>

//           </div>

//           <div className="search-filter-box">

//             <div className="search-box">

//               <FaSearch className="search-icon" />

//               <input
//                 ref={searchRef}
//                 type="text"
//                 placeholder="Search destination..."
//                 value={search}
//                 onChange={(e) =>
//                   setSearch(e.target.value)
//                 }
//               />

//             </div>

//             <div className="filter-box">

//               <FaMapMarkerAlt className="filter-icon" />

//               <select
//                 value={filter}
//                 onChange={(e) =>
//                   setFilter(e.target.value)
//                 }
//               >
//                 <option value="All">
//                   All States
//                 </option>

//                 <option value="Tamil Nadu">
//                   Tamil Nadu
//                 </option>

//                 <option value="Kerala">
//                   Kerala
//                 </option>

//                 <option value="Goa">
//                   Goa
//                 </option>

//                 <option value="Himachal Pradesh">
//                   Himachal Pradesh
//                 </option>

//                 <option value="Jammu & Kashmir">
//                   Jammu & Kashmir
//                 </option>

//               </select>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* Popular Destinations */}

//       <section className="destination-section">

//         <div className="container">

//           <div className="destination-heading">

//             <span className="sub-title">
//               ✈ EXPLORE DESTINATIONS
//             </span>

//             <h2>
//               Find Your Next Adventure
//             </h2>

//             <p>
//               Discover hand-picked destinations with unforgettable experiences,
//               breathtaking landscapes, and affordable travel packages.
//             </p>

//           </div>

//           <div className="destination-grid">

//             {filteredDestinations.length > 0 ? (

//               filteredDestinations.map((destination) => (

//                 <DestinationCard
//                   key={destination.id}
//                   destination={destination}
//                 />

//               ))

//             ) : (

//               <h2 className="no-result">
//                 No destinations found.
//               </h2>

//             )}

//           </div>

//         </div>

//       </section>

//       {/* Why Choose Us */}

//       <ScrollReveal>
//         <WhyChoose />
//       </ScrollReveal>

//       {/* Testimonials */}

//       <ScrollReveal>
//         <Testimonials />
//       </ScrollReveal>

//       {/* Gallery */}

//       <ScrollReveal>
//         <Gallery />
//       </ScrollReveal>

//       {/* FAQ */}

//       <ScrollReveal>
//         <FAQ />
//       </ScrollReveal>

//       {/* Newsletter */}

//       <ScrollReveal>
//         <Newsletter />
//       </ScrollReveal>

//     </>
//   );
// }

// export default Home;
import Hero from "../components/Hero";
import DestinationCard from "../components/DestinationCard";
import WhyChoose from "../components/WhyChoose";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import Newsletter from "../components/Newsletter";
import ScrollReveal from "../components/ScrollReveal";

import destinations from "../data/destinations";

function Home() {
  return (
    <>
      {/* Hero */}

      <Hero />

      {/* Destinations */}

      <section className="destination-section">

        <div className="container">

          <div className="destination-grid">

            {destinations.map((destination) => (

              <DestinationCard
                key={destination.id}
                destination={destination}
              />

            ))}

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <ScrollReveal>
        <WhyChoose />
      </ScrollReveal>

      {/* Testimonials */}

      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      {/* Gallery */}

      <ScrollReveal>
        <Gallery />
      </ScrollReveal>

      {/* FAQ */}

      <ScrollReveal>
        <FAQ />
      </ScrollReveal>

      {/* Newsletter */}

      <ScrollReveal>
        <Newsletter />
      </ScrollReveal>

    </>
  );
}

export default Home;