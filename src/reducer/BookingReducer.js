export const initialState = {
  bookings: JSON.parse(localStorage.getItem("bookings")) || [],
};

export function bookingReducer(state, action) {
  switch (action.type) {

    case "ADD_BOOKING":

      return {
        ...state,
        bookings: [...state.bookings, action.payload],
      };

    case "DELETE_BOOKING":

      return {
        ...state,
        bookings: state.bookings.filter(
          (booking) => booking.id !== action.payload
        ),
      };

    case "UPDATE_BOOKING":

      return {
        ...state,
        bookings: state.bookings.map((booking) =>
          booking.id === action.payload.id
            ? action.payload
            : booking
        ),
      };

    default:
      return state;
  }
}