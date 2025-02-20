// src/components/BookingAction.tsx
import React from 'react';
import { useBooking } from '../../context/BookingContext';  // Import the custom hook to use context
import { useNavigate } from 'react-router-dom';  // Import to handle navigation

const BookingAction: React.FC = () => {
  const { consultantID, setConsultantID } = useBooking();  // Access consultant ID and setter from context
  const navigate = useNavigate();  // Use to navigate to other pages

  // Function to handle "Book a Room" action
  const handleBookRoom = () => {
    navigate('/booking-form');  // Redirect to the booking form page
  };

  // Function to handle "Delete a Booking" action
  const handleDeleteBooking = () => {
    navigate('/edit-booking');  // Redirect to the EditBooking page
  };

  // Function to handle "Change Consultant" action
  const handleChangeConsultant = () => {
    setConsultantID('');  // Reset consultant ID in the context
    navigate('/booking-consult');  // Navigate back to BookingConsult.tsx
  };

  return (
    <div>
      <h2>Booking Actions</h2>
      <div>
        {/* Book a Room Button */}
        <button onClick={handleBookRoom}>Book a Room</button>
      </div>
      <div>
        {/* Delete a Booking Button */}
        <button onClick={handleDeleteBooking}>Delete a Booking</button>
      </div>
      <div>
        {/* Change Consultant Button */}
        <button onClick={handleChangeConsultant}>Change Consultant</button>
      </div>
    </div>
  );
};

export default BookingAction;
