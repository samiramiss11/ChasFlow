import React, { useEffect, useState } from 'react';
import { useBooking } from '../../context/BookingContext';
import { fetchAvailableTimeSlots, createBooking } from '../../services/api'; 

// Importing the fetch function

const BookingForm: React.FC = () => {
  const { consultantID, courseID, roomID, timeSlotID, week, day, setRoomID, setTimeSlotID, setWeek, setDay } = useBooking();
  const [timeSlots, setTimeSlots] = useState<any[]>([]);

  useEffect(() => {
    if (roomID && day && week) {
      // Fetch available time slots for the selected room, day, and week
      fetchAvailableTimeSlots(roomID, day, week)
        .then((data) => setTimeSlots(data))
        .catch((error) => console.error('Error fetching time slots:', error));
    }
  }, [roomID, day, week]); // Re-run when any of these values change

  const handleBooking = () => {
    if (!consultantID || !courseID || !roomID || !timeSlotID || !week || !day) {
      console.log('Missing booking information.');
      return;
    }
    //const newBooking = { consultantID, courseID, roomID, timeSlotID, week, day };
        // Add booking to the context (temporary state)
        //addBooking(newBooking);

    // Create the booking with the selected information
    createBooking({ consultantID, courseID, roomID, timeSlotID, week, day })
      .then((response) => {
        console.log('Booking confirmed:', response);
        // Redirect to confirmation page or handle success
      })
      .catch((error) => console.error('Error confirming booking:', error));
  };

  
  return (
    <div>
      <h1>Booking Form</h1>

      {/* Week and Day Selection */}
      <div>
        <h2>Select Week:</h2>
        <button onClick={() => setWeek(week ? week - 1 : 1)}>Previous Week</button>
        <span>{week}</span>
        <button onClick={() => setWeek(week ? week + 1 : 1)}>Next Week</button>
      </div>

      {/* Day Tabs (Monday - Friday) */}
      <div>
        <button onClick={() => setDay('Monday')}>Monday</button>
        <button onClick={() => setDay('Tuesday')}>Tuesday</button>
        <button onClick={() => setDay('Wednesday')}>Wednesday</button>
        <button onClick={() => setDay('Thursday')}>Thursday</button>
        <button onClick={() => setDay('Friday')}>Friday</button>
      </div>

      {/* Room Selection */}
      <div>
        <h2>Select Room:</h2>
        <button onClick={() => setRoomID('Room 001')}>Room 001</button>
        <button onClick={() => setRoomID('Room 002')}>Room 002</button>
        <button onClick={() => setRoomID('Room 003')}>Room 003</button>
        <button onClick={() => setRoomID('Room 004')}>Room 004</button>
        <button onClick={() => setRoomID('Room 005')}>Room 005</button>
        <button onClick={() => setRoomID('Room 006')}>Room 006</button>
        <button onClick={() => setRoomID('Room 007')}>Room 007</button>
      </div>

      {/* Time Slot Selection */}
      <div>
        <h2>Select Time Slot for {roomID}:</h2>
        <select onChange={(e) => setTimeSlotID(e.target.value)} value={timeSlotID || ""}>
          {timeSlots.map((slot) => (
            <option key={slot.timeSlotID} value={slot.timeSlotID}>
              {slot.startTime} - {slot.endTime}
            </option>
          ))}
        </select>
      </div>

      {/* Booking Confirmation */}
      <button onClick={handleBooking}>Confirm Booking</button>
    </div>
  );

  //function handleBooking() {
    // Make the API request to create the booking
    // Pass consultantID, courseID, room, date, timeSlot
  //}
  

//};

};

export default BookingForm;
