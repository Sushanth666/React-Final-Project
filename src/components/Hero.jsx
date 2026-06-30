// import "./Hero.css";
// import Counter from "./Counter";
// import {
//   FaMapMarkerAlt,
//   FaCalendarAlt,
//   FaUsers,
// } from "react-icons/fa";

// function Hero() {
//   return (
//     <section className="hero">

//       <div className="overlay"></div>

//       <div className="container hero-content">

//         <div className="hero-text">

//           <span className="hero-tag">
//             ✈️ Explore The World
//           </span>

//           <h1>
//             Adventure Awaits,
//             <br />
//             Memories Forever
//           </h1>

//           <div className="hero-buttons">



//           </div>

//         </div>

//          <div className="booking-card">

//           <h2>Book Your Dream Trip</h2>

//           <div className="input-box">

//             <FaMapMarkerAlt />

//             <input
//               type="text"
//               placeholder="Destination"
//             />

//           </div>

//           <div className="input-box">

//             <FaCalendarAlt />

//             <input type="date" />

//           </div>

//           <div className="input-box">

//             <FaUsers />

//             <input
//               type="number"
//               placeholder="Guests"
//             />

//           </div> 

//           <button className="search-btn">
//             Search Packages
//           </button>

//         </div>

//       </div>
      

//       <div className="stats">

//   {/* <div className="stat-card">
//     <Counter
//       end={500}
//       duration={2000}
//       suffix="+"
//     />
//     <p>Trips Completed</p>
//   </div> */}
  

//   {/* <div className="stat-card">
//     <Counter
//       end={10000}
//       duration={2500}
//       suffix="+"
//     />
//     <p>Happy Travelers</p>
//   </div>

//   <div className="stat-card">
//     <Counter
//       end={50}
//       duration={1800}
//       suffix="+"
//     />
//     <p>Destinations</p>
//   </div>

//   <div className="stat-card">
//     <Counter
//       end={5}
//       duration={1500}
//       suffix="★"
//     />
//     <p>Customer Rating</p>
//   </div> */}
//    </div>

//     </section>
//   );
// }

// export default Hero;
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Hero.css";
import Counter from "./Counter";

import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";

function Hero() {

  const navigate = useNavigate();

  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [guests, setGuests] = useState("");

  const handleSearch = () => {

    navigate(
      `/packages?search=${encodeURIComponent(destination)}`
    );

  };

  return (

    <section className="hero">

      <div className="overlay"></div>

      <div className="container hero-content">

        {/* Left */}

        <div className="hero-text">

          <span className="hero-tag">

            ✈️ Explore The World

          </span>

          <h1>

            Adventure Awaits,
            <br />
            Memories Forever

          </h1>

          <p>

            Discover breathtaking destinations,
            unforgettable adventures and premium
            holiday packages crafted for every
            traveler.

          </p>

        </div>

        {/* Right */}

        <div className="booking-card">

          <h2>

            Book Your Dream Trip

          </h2>

          {/* Destination */}

          <div className="input-box">

            <FaMapMarkerAlt />

            <input
              type="text"
              placeholder="Destination"
              value={destination}
              onChange={(e) =>
                setDestination(e.target.value)
              }
            />

          </div>

          {/* Date */}

          <div className="input-box">

            <FaCalendarAlt />

            <input
              type="date"
              value={travelDate}
              onChange={(e) =>
                setTravelDate(e.target.value)
              }
            />

          </div>

          {/* Guests */}

          <div className="input-box">

            <FaUsers />

            <input
              type="number"
              min="1"
              placeholder="Guests"
              value={guests}
              onChange={(e) =>
                setGuests(e.target.value)
              }
            />

          </div>

          <button
            className="search-btn"
            onClick={handleSearch}
          >

            Search Packages

          </button>

        </div>

      </div>

      {/* Statistics */}

      <div className="stats">

        

      </div>

    </section>

  );

}

export default Hero;