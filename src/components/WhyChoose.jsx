import {
  FaPlaneDeparture,
  FaMoneyBillWave,
  FaHeadset,
  FaShieldAlt,
} from "react-icons/fa";

import "./WhyChoose.css";

const features = [
  {
    icon: <FaPlaneDeparture />,
    title: "Best Destinations",
    desc: "Explore hand-picked destinations around the world.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Affordable Prices",
    desc: "Get the best travel deals without compromising quality.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Travel experts are available whenever you need help.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe Booking",
    desc: "Your booking and payment are always secure.",
  },
];

function WhyChoose() {
  return (
    <section className="why-section container">

      <h2 className="section-title">
        Why Choose TravelGo?
      </h2>

      <div className="why-grid">

        {features.map((item, index) => (
          <div
            className="why-card"
            key={index}
          >
            <div className="why-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default WhyChoose;