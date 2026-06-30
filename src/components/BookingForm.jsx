// import { useState, useEffect, useRef } from "react";
// import {
//   FaUser,
//   FaMapMarkerAlt,
//   FaEnvelope,
//   FaPhone,
//   FaUsers,
//   FaCalendarAlt,
// } from "react-icons/fa";

// function BookingForm({ onSubmit, editingBooking }) {
//   const nameRef = useRef(null);

//   const [formData, setFormData] = useState({
//     name: "",
//     destination: "",
//     email: "",
//     phone: "",
//     persons: "",
//     date: "",
//   });

//   useEffect(() => {
//     nameRef.current.focus();
//   }, []);

//   useEffect(() => {
//     if (editingBooking) {
//       setFormData({
//         name: editingBooking.name,
//         destination: editingBooking.destination,
//         email: editingBooking.email,
//         phone: editingBooking.phone,
//         persons: editingBooking.persons,
//         date: editingBooking.date,
//       });

//       nameRef.current.focus();
//     }
//   }, [editingBooking]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const validateForm = () => {
//     if (formData.name.trim().length < 3) {
//       alert("Name must contain at least 3 characters.");
//       return false;
//     }

//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailPattern.test(formData.email)) {
//       alert("Enter a valid email address.");
//       return false;
//     }

//     if (!/^[0-9]{10}$/.test(formData.phone)) {
//       alert("Phone number must contain exactly 10 digits.");
//       return false;
//     }

//     if (Number(formData.persons) < 1) {
//       alert("Persons must be at least 1.");
//       return false;
//     }

//     if (!formData.date) {
//       alert("Please select a travel date.");
//       return false;
//     }

//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     onSubmit(formData);

//     setFormData({
//       name: "",
//       destination: "",
//       email: "",
//       phone: "",
//       persons: "",
//       date: "",
//     });

//     nameRef.current.focus();
//   };

//   return (
//     <form className="booking-form" onSubmit={handleSubmit}>
//       <input
//         ref={nameRef}
//         type="text"
//         name="name"
//         placeholder="Full Name"
//         value={formData.name}
//         onChange={handleChange}
//       />

//       <input
//         type="text"
//         name="destination"
//         placeholder="Destination"
//         value={formData.destination}
//         onChange={handleChange}
//       />

//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={handleChange}
//       />

//       <input
//         type="tel"
//         name="phone"
//         placeholder="Phone Number"
//         value={formData.phone}
//         onChange={handleChange}
//       />

//       <input
//         type="number"
//         name="persons"
//         placeholder="Number of Persons"
//         value={formData.persons}
//         onChange={handleChange}
//       />

//       <input
//         type="date"
//         name="date"
//         value={formData.date}
//         onChange={handleChange}
//       />

//       <button type="submit">
//         {editingBooking ? "Update Booking" : "Book Now"}
//       </button>
//     </form>
//   );
// }

// export default BookingForm;
// import { useState, useEffect, useRef } from "react";

// function BookingForm({ onSubmit, editingBooking }) {
//   const nameRef = useRef(null);

//   const [formData, setFormData] = useState({
//     name: "",
//     destination: "",
//     email: "",
//     phone: "",
//     persons: "",
//     date: "",
//   });

//   useEffect(() => {
//     nameRef.current.focus();
//   }, []);

//   useEffect(() => {
//     if (editingBooking) {
//       setFormData({
//         name: editingBooking.name,
//         destination: editingBooking.destination,
//         email: editingBooking.email,
//         phone: editingBooking.phone,
//         persons: editingBooking.persons,
//         date: editingBooking.date,
//       });

//       nameRef.current.focus();
//     }
//   }, [editingBooking]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const validateForm = () => {
//     if (formData.name.trim().length < 3) {
//       alert("Name must contain at least 3 characters.");
//       return false;
//     }

//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailPattern.test(formData.email)) {
//       alert("Enter a valid email address.");
//       return false;
//     }

//     if (!/^[0-9]{10}$/.test(formData.phone)) {
//       alert("Phone number must contain exactly 10 digits.");
//       return false;
//     }

//     if (Number(formData.persons) < 1) {
//       alert("Persons must be at least 1.");
//       return false;
//     }

//     if (!formData.date) {
//       alert("Please select a travel date.");
//       return false;
//     }

//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     onSubmit(formData);

//     setFormData({
//       name: "",
//       destination: "",
//       email: "",
//       phone: "",
//       persons: "",
//       date: "",
//     });

//     nameRef.current.focus();
//   };

//   return (
//     <form className="booking-form" onSubmit={handleSubmit}>
//       <input
//         ref={nameRef}
//         type="text"
//         name="name"
//         placeholder="Full Name"
//         value={formData.name}
//         onChange={handleChange}
//       />

//       <input
//         type="text"
//         name="destination"
//         placeholder="Destination"
//         value={formData.destination}
//         onChange={handleChange}
//       />

//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={handleChange}
//       />

//       <input
//         type="tel"
//         name="phone"
//         placeholder="Phone Number"
//         value={formData.phone}
//         onChange={handleChange}
//       />

//       <input
//         type="number"
//         name="persons"
//         placeholder="Number of Persons"
//         value={formData.persons}
//         onChange={handleChange}
//       />

//       <input
//         type="date"
//         name="date"
//         value={formData.date}
//         onChange={handleChange}
//       />

//       <button type="submit">
//         {editingBooking ? "Update Booking" : "Book Now"}
//       </button>
//     </form>
//   );
// }

// export default BookingForm;
import { useEffect, useRef, useState } from "react";

import {
  FaUser,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaUsers,
  FaCalendarAlt,
  FaPlaneDeparture,
} from "react-icons/fa";

import "./BookingForm.css";

function BookingForm({
  onSubmit,
  editingBooking,
}) {

  const nameRef = useRef(null);

  const [formData, setFormData] = useState({

    name: "",
    destination: "",
    email: "",
    phone: "",
    persons: "",
    date: "",

  });

  useEffect(() => {

    nameRef.current.focus();

  }, []);

  useEffect(() => {

    if (editingBooking) {

      setFormData(editingBooking);

      nameRef.current.focus();

    }

  }, [editingBooking]);

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    onSubmit(formData);

    if (!editingBooking) {

      setFormData({

        name: "",
        destination: "",
        email: "",
        phone: "",
        persons: "",
        date: "",

      });

    }

    nameRef.current.focus();

  };

  return (

    <div className="booking-form-card">

      <div className="form-title">

        <FaPlaneDeparture
          className="plane-icon"
        />

        <h2>
          Book Your Dream Vacation
        </h2>

        <p>
          Fill in your details and start your next adventure.
        </p>

      </div>

      <form
        className="booking-form"
        onSubmit={handleSubmit}
      >

        <div className="form-grid">

          {/* Name */}

          <div className="input-group">

            <FaUser className="input-icon" />

            <input
              ref={nameRef}
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>

          {/* Destination */}

          <div className="input-group">

            <FaMapMarkerAlt
              className="input-icon"
            />

            <input
              type="text"
              name="destination"
              placeholder="Destination"
              value={formData.destination}
              onChange={handleChange}
              required
            />

          </div>

          {/* Email */}

          <div className="input-group">

            <FaEnvelope
              className="input-icon"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          {/* Phone */}

          <div className="input-group">

            <FaPhone
              className="input-icon"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

          </div>

          {/* Persons */}

          <div className="input-group">

            <FaUsers
              className="input-icon"
            />

            <input
              type="number"
              name="persons"
              placeholder="Number of Persons"
              value={formData.persons}
              onChange={handleChange}
              required
            />

          </div>

          {/* Date */}

          <div className="input-group">

            <FaCalendarAlt
              className="input-icon"
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />

          </div>

        </div>

        <button type="submit">

          {editingBooking
            ? "Update Booking"
            : "Book Now"}

        </button>

      </form>

    </div>

  );

}

export default BookingForm;