import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">

      <div className="container">

        <h2>
          Subscribe for Travel Deals
        </h2>

        <p>
          Receive exclusive offers and travel updates.
        </p>

        <div className="newsletter-box">

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;