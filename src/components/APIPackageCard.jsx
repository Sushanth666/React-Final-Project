function APIPackageCard({ item }) {
  return (
    <div className="package-card">

      <img
        src={item.thumbnail}
        alt={item.title}
      />

      <div className="package-content">

        <h3>{item.title}</h3>

        <p>
          {item.description.substring(0, 80)}...
        </p>

        <h4>₹ {item.price * 90}</h4>

        <p>
          ⭐ {item.rating}
        </p>

        <button>
          Explore
        </button>

      </div>

    </div>
  );
}

export default APIPackageCard;