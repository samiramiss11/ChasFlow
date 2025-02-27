//Modal.tsx
import React, { useEffect, useState } from 'react';
import { RoomSelection } from '../../context/BookingContext';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selections: RoomSelection[];
  week: number;
  day: string;
  setSelections: (selections: RoomSelection[]) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, selections, week, day, setSelections }) => {
  const [localSelections, setLocalSelections] = useState<RoomSelection[]>([]);
  useEffect(() => {
    setLocalSelections(selections);
  }, [selections]);

  const handleDeleteTimeSlot = (roomID: React.Key, timeSlotID: React.Key) => {
    const updatedSelections = localSelections.map(room => {
      if (room.roomID === roomID) {
        const updatedTimeSlots = room.timeSlots.filter(slot => slot.timeSlotID !== timeSlotID);
        return { ...room, timeSlots: updatedTimeSlots };
      }
      return room;
    });
    setLocalSelections(updatedSelections); // Only update local state
    // Do not call setSelections here if it resets global state incorrectly
  };

  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'gray', padding: '20px', zIndex: 1000 }}>
      <h1>Booking Confirmation</h1>
      <h2>Week: {week}, Day: {day}</h2>
      {localSelections.map(room => (
        <div key={room.roomID}>
          <h3>{room.roomName}</h3>
          {room.timeSlots.map(slot => (
            <div key={slot.timeSlotID}>
              {slot.startTime} - {slot.endTime}
              <button onClick={() => handleDeleteTimeSlot(room.roomID, slot.timeSlotID)}>Delete</button>
            </div>
          ))}
        </div>
      ))}
      <button onClick={onClose}>Tillbaka</button>
    </div>
  );
};

export { Modal };
