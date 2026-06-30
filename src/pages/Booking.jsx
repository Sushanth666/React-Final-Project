import { useReducer, useState } from "react";

import {
  FaCalendarAlt,
  FaClipboardList,
} from "react-icons/fa";

import BookingForm from "../components/BookingForm";
import BookingTable from "../components/BookingTable";

import "./Booking.css";

const initialState = [];

function bookingReducer(state, action) {
  switch (action.type) {
    case "ADD_BOOKING":
      return [
        ...state,
        {
          id: Date.now(),
          ...action.payload,
        },
      ];

    case "UPDATE_BOOKING":
      return state.map((booking) =>
        booking.id === action.payload.id
          ? action.payload
          : booking
      );

    case "DELETE_BOOKING":
      return state.filter(
        (booking) => booking.id !== action.payload
      );

    default:
      return state;
  }
}

function Booking() {
  const [bookings, dispatch] = useReducer(
    bookingReducer,
    initialState
  );

  const [editingBooking, setEditingBooking] =
    useState(null);

  const handleSubmit = (formData) => {
    if (editingBooking) {
      dispatch({
        type: "UPDATE_BOOKING",
        payload: {
          ...formData,
          id: editingBooking.id,
        },
      });

      setEditingBooking(null);
    } else {
      dispatch({
        type: "ADD_BOOKING",
        payload: formData,
      });
    }
  };

  const handleEdit = (booking) => {
    setEditingBooking(booking);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_BOOKING",
      payload: id,
    });
  };

  return (
    <>
      {/* Hero */}

      <section className="booking-hero">

        <div className="booking-overlay"></div>

        <div className="container booking-hero-content">

          <div className="booking-header">

            <div className="booking-icon">

              <FaCalendarAlt />

            </div>

            <div>

              <h1>
                Travel Booking
              </h1>

              <p>
                Fill in the details below to book
                your dream vacation.
              </p>

            </div>

          </div>

          <BookingForm
            onSubmit={handleSubmit}
            editingBooking={editingBooking}
          />

        </div>

      </section>

      {/* Booking List */}

      <section className="booking-list-section">

        <div className="container">

          <div className="booking-list-header">

            <div className="booking-list-icon">

              <FaClipboardList />

            </div>

            <h2>
              Booking List
            </h2>

          </div>

          <BookingTable
            bookings={bookings}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />

        </div>

      </section>
    </>
  );
}

export default Booking;