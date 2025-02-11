// src/components/BookingConfirmation.tsx
import React from 'react';
import { useBooking } from '../../context/BookingContext';
import { deleteBooking, saveBookings } from '../../services/api';

const BookingConfirmation: React.FC = () => {
    const { bookings, setBookings } = useBooking();

    const handleDeleteBooking = async (bookingID: string) => {
        try {
          await deleteBooking(bookingID);  // Call the delete API function
          setBookings(bookings.filter(booking => booking.bookingID !== bookingID));  // Remove the booking from state
          console.log('Booking deleted:', bookingID);
        } catch (error) {
          console.error('Error deleting booking:', error);
        }
      };
    
      const handleSaveBookings = async () => {
        try {
          await saveBookings(bookings);  // Call the save API function
          console.log('Bookings saved:', bookings);
        } catch (error) {
          console.error('Error saving bookings:', error);
        }
      };
      return (
        <div>
          <h2>Confirm Bookings</h2>
          <ul>
            {bookings.map((booking) => (
              <li key={booking.bookingID}>
                {`Date: ${booking.date}, Room: ${booking.roomID}, Time Slot: ${booking.timeSlotID}`}
                <button onClick={() => handleDeleteBooking(booking.bookingID)}>Delete</button>
              </li>
            ))}
          </ul>
          <button onClick={handleSaveBookings}>Save All Bookings</button>
        </div>
    );
};

export default BookingConfirmation;
