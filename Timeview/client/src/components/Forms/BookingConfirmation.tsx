// BookingConfirmation.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking, RoomSelection } from '../../context/BookingContext';
//import { RoomSelection } from '../../context/BookingContext';


const BookingConfirmation = () => {
  const navigate = useNavigate();
  const { selectedTimeSlots, setSelectedTimeSlots } = useBooking();
  const [localSelections, setLocalSelections] = useState<any[]>([]);

  

  
  const handleConfirm = () => {
    // Process confirmation logic here
    console.log("Confirmed", selectedTimeSlots);
    navigate('booking-consult'); // navigate to dashboard or wherever you need
  };

  const handleCancel = () => {
    setSelectedTimeSlots([]); // Clear selections on cancel
    navigate('/booking-form'); // navigate back to booking form
  };

  const handleDeleteTimeSlot = (roomID: any, timeSlotID: React.Key | null | undefined) => {
    const updatedSelections = localSelections.map(room => room.roomID === roomID ? {
      ...room,
      timeSlots: room.timeSlots.filter((slot: { timeSlotID: React.Key; }) => slot.timeSlotID !== timeSlotID)
    } : room).filter(room => room.timeSlots.length > 0);

    setSelectedTimeSlots(updatedSelections);
  };


  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'gray', padding: '20px', zIndex: 1000 }}>
      <h1>Booking Confirmation</h1>
      
      {localSelections.map(room => (
        <div key={room.roomID}>
          <h3>{room.roomName}</h3>
          {room.timeSlots.map((slot: { timeSlotID: React.Key | null | undefined; startTime: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; endTime: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
            <div key={slot.timeSlotID}>
              {slot.startTime} - {slot.endTime}
              <button onClick={() => handleDeleteTimeSlot(room.roomID, slot.timeSlotID)}>Delete</button>
            </div>
          ))}
        </div>
      ))}
               <button onClick={handleConfirm}>Confirm</button>
               <button onClick={handleCancel}>Cancel</button>
    </div>

  
  );
};

export default BookingConfirmation;
