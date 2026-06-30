import {
  FaMapMarkerAlt,
  FaUserFriends,
  FaCalendarAlt,
  FaEdit,
  FaTrashAlt,
} from "react-icons/fa";

import "./BookingTable.css";

function BookingTable({
  bookings,
  onEdit,
  onDelete,
}) {

  if (bookings.length === 0) {
    return (

      <div className="empty-booking">

        <div className="empty-icon">
          ✈️
        </div>

        <h3>No Bookings Yet</h3>

        <p>
          Your booked trips will appear here.
          Start planning your next adventure!
        </p>

      </div>

    );
  }

  return (

    <div className="table-container">

      <table className="booking-table">

        <thead>

          <tr>

            <th>Traveller</th>

            <th>Destination</th>

            <th>Email</th>

            <th>Phone</th>

            <th>Persons</th>

            <th>Date</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {bookings.map((booking) => (

            <tr key={booking.id}>

              {/* Traveller */}

              <td>

                <div className="traveller-info">

                  <div className="avatar">

                    {booking.name
                      .charAt(0)
                      .toUpperCase()}

                  </div>

                  <span>

                    {booking.name}

                  </span>

                </div>

              </td>

              {/* Destination */}

              <td>

                <div className="destination-info">

                  <FaMapMarkerAlt />

                  <span>

                    {booking.destination}

                  </span>

                </div>

              </td>

              {/* Email */}

              <td>

                {booking.email}

              </td>

              {/* Phone */}

              <td>

                {booking.phone}

              </td>

              {/* Persons */}

              <td>

                <div className="person-badge">

                  <FaUserFriends />

                  <span>

                    {booking.persons}

                  </span>

                </div>

              </td>

              {/* Date */}

              <td>

                <div className="date-badge">

                  <FaCalendarAlt />

                  <span>

                    {booking.date}

                  </span>

                </div>

              </td>

              {/* Actions */}

              <td>

                <div className="action-buttons">

                  <button
                    className="edit-btn"
                    onClick={() =>
                      onEdit(booking)
                    }
                  >

                    <FaEdit />

                    Edit

                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      onDelete(booking.id)
                    }
                  >

                    <FaTrashAlt />

                    Delete

                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default BookingTable;