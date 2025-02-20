import React from 'react';
import { useBooking } from '../../context/BookingContext';
import { saveBookings } from '../../services/api';

const BookingConfirmation: React.FC = () => {
  const { consultantID, courseID, selectedWeek, selectedDay, selectedRoom, selectedTimeSlots } = useBooking();

  const handleSaveBookings = () => {
    saveBookings({
      consultantID,
      courseID,
      selectedWeek,
      selectedDay,
      selectedRoom,
      selectedTimeSlots,
    }).then(() => {
      console.log('Bookings saved successfully');
    }).catch(err => console.error('Error saving bookings:', err));
  };

  return (
    <div>
      <h1>Booking Confirmation</h1>
      <ul>
        {selectedTimeSlots.map((slotID, index) => (
          <li key={index}>
            Time Slot ID: {slotID}
            {/* Add delete button if necessary */}
          </li>
        ))}
      </ul>
      <button onClick={handleSaveBookings}>Save Bookings</button>
    </div>
  );
};

export default BookingConfirmation;
