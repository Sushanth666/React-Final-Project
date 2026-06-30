import "./Testimonials.css";

const reviews = [
  {
    id: 1,
    name: "Rahul",
    city: "Chennai",
    review:
      "Fantastic trip! Everything was perfectly organized.",
  },
  {
    id: 2,
    name: "Priya",
    city: "Bangalore",
    review:
      "Affordable packages and excellent customer support.",
  },
  {
    id: 3,
    name: "Arjun",
    city: "Hyderabad",
    review:
      "Our honeymoon package exceeded all expectations.",
  },
];

function Testimonials() {
  return (
    <section className="testimonial-section">

      <div className="container">

        <h2 className="section-title">
          What Our Travelers Say
        </h2>

        <div className="testimonial-grid">

          {reviews.map((item) => (
            <div
              className="testimonial-card"
              key={item.id}
            >
              <h3>{item.name}</h3>

              <small>{item.city}</small>

              <p>"{item.review}"</p>

              <div className="stars">
                ★★★★★
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;