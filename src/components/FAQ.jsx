import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./FAQ.css";

const faqData = [
  {
    id: 1,
    question: "How can I book a travel package?",
    answer:
      "You can book a package by visiting the Booking page, filling in your travel details, and submitting the booking form.",
  },
  {
    id: 2,
    question: "Can I cancel my booking?",
    answer:
      "Yes. Bookings can be cancelled according to our cancellation policy. Contact our support team for assistance.",
  },
  {
    id: 3,
    question: "Are flights included in the packages?",
    answer:
      "Some packages include flights, while others include only accommodation and sightseeing. Check the package details before booking.",
  },
  {
    id: 4,
    question: "Do you offer honeymoon packages?",
    answer:
      "Yes. We provide honeymoon packages for destinations like Maldives, Bali, Switzerland, and many more.",
  },
  {
    id: 5,
    question: "Is customer support available 24/7?",
    answer:
      "Yes. Our travel support team is available 24 hours a day to assist you.",
  },
];

function FAQ() {
  const [active, setActive] = useState(null);

  const toggleFAQ = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="faq-section">
      <div className="container">

        <h2 className="section-title">
          Frequently Asked Questions
        </h2>

        <p className="faq-subtitle">
          Everything you need to know before planning your next trip.
        </p>

        <div className="faq-container">

          {faqData.map((item) => (
            <div
              className="faq-item"
              key={item.id}
            >
              <div
                className="faq-question"
                onClick={() => toggleFAQ(item.id)}
              >
                <h3>{item.question}</h3>

                {active === item.id ? (
                  <FaMinus />
                ) : (
                  <FaPlus />
                )}
              </div>

              {active === item.id && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;