import "./Gallery.css";

import ooty from "../assets/images/ooty.jpg";
import munnar from "../assets/images/munnar.jpg";
import goa from "../assets/images/goa.jpg";
import manali from "../assets/images/manali.jpg";
import kashmir from "../assets/images/kashmir.jpg";
import kodaikanal from "../assets/images/kodaikanal.jpg";

const images = [
  {
    id: 1,
    title: "Ooty",
    image: ooty,
  },
  {
    id: 2,
    title: "Munnar",
    image: munnar,
  },
  {
    id: 3,
    title: "Goa",
    image: goa,
  },
  {
    id: 4,
    title: "Manali",
    image: manali,
  },
  {
    id: 5,
    title: "Kashmir",
    image: kashmir,
  },
  {
    id: 6,
    title: "Kodaikanal",
    image: kodaikanal,
  },
];

function Gallery() {
  return (
    <section className="gallery-section container">

      <h2 className="section-title">
        Explore Beautiful Places
      </h2>

      <p className="gallery-subtitle">
        Capture unforgettable travel memories around the world.
      </p>

      <div className="gallery-grid">

        {images.map((item) => (
          <div
            className="gallery-card"
            key={item.id}
          >
            <img
              src={item.image}
              alt={item.title}
            />

            <div className="gallery-overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Gallery;