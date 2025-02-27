//BookingForm.tsx 
import React, { useEffect, useState } from 'react';
import { useBooking } from '../../context/BookingContext';
import { fetchAvailableTimeSlots, fetchRoomsForDay } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../../components/Forms/Modal'; // Adjust the path as necessary
import { RoomSelection } from '../../context/BookingContext';

const BookingForm = () => {
  const {
    selectedWeek, setSelectedWeek, selectedDay, setSelectedDay,
    selectedRoom, setSelectedRoom 
  } = useBooking();
  const [rooms, setRooms] = useState<any[]>([]);
  
  const [availableTimeSlots, setAvailableTimeSlots] = useState<any[]>([]);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState<Record<string, { timeSlotID: string, startTime: string, endTime: string }[]>>({});
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [weekOffset, setWeekOffset] = useState(0);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selections, setSelectionsState] = useState<any[]>([]);

  
  useEffect(() => {
    if (selectedWeek && selectedDay) {
      fetchRoomsForDay(selectedWeek, selectedDay)
        .then(data => {
          console.log('Rooms fetched:', data);
          setRooms(data);
        })
        .catch(err => console.error('Error fetching rooms:', err));
    }
  }, [selectedWeek, selectedDay]);

  const handleWeekChange = (week: number) => {
    setSelectedWeek(week);
    setSelectedRoom('');
    setAvailableTimeSlots([]);
    setDropdownOpen(null);
  };

  const nextWeeks = () => {
    setWeekOffset(weekOffset + 1);
  };

  const prevWeeks = () => {
    setWeekOffset(weekOffset - 1);
  };

  const handleDayChange = (day: string) => {
    setSelectedDay(day);
    setDropdownOpen(null);
    if (selectedWeek && day) {
      fetchRoomsForDay(selectedWeek, day)
        .then((data) => {
          setRooms(data);
        })
        .catch((err) => {
          console.error('Error fetching rooms:', err);
        });
    }
  };

  const handleRoomSelect = (roomID: string) => {
    setSelectedRoom(roomID);
    setDropdownOpen(dropdownOpen === roomID ? null : roomID); // Toggle dropdown
    fetchAvailableTimeSlots(selectedWeek, selectedDay, roomID)
    .then(data => {
      setAvailableTimeSlots({
        ...availableTimeSlots,
        [roomID]: data  // Store timeslots by roomID
      });
    })
    .catch(err => console.error('Error fetching time slots:', err));
};



// Handles selection of time slots and updates the local and global context
const handleTimeSlotSelect = (roomID: string, slot: { timeSlotID: string, startTime: string, endTime: string }, isChecked: boolean) => {
  setSelectedTimeSlots(prevSelections => {
    const updatedRooms = { ...prevSelections };
    if (isChecked) {
      // add the slot if checked
      const currentSlots = updatedRooms[roomID] || [];
      updatedRooms[roomID] = [...currentSlots, slot];
    } else {
      // remove the slot if unchecked
      const filteredSlots = (updatedRooms[roomID] || []).filter(s => s.timeSlotID !== slot.timeSlotID);
      if (filteredSlots.length > 0) {
        updatedRooms[roomID] = filteredSlots;
      }
    }
    return updatedRooms;
  });
};

// When "Next" button is clicked, navigate to confirmation page
const handleNavigate = () => {
  const formattedSlots = rooms.reduce((acc, room) => {
    if (selectedTimeSlots[room.roomID]?.length) {
      acc.push({
        roomID: room.roomID,
        roomName: room.roomName,
        timeSlots: selectedTimeSlots[room.roomID].map(slot => ({
          timeSlotID: slot.timeSlotID,
          startTime: slot.startTime,
          endTime: slot.endTime
        }))
      });
    }
    return acc;
  }, []);
 // Log to verify structure before setting state
  console.log("Formatted Slots for Modal:", formattedSlots);
  setSelectedTimeSlots(formattedSlots);  // Ensure this is an array
  setIsModalOpen(true);
};

const newSelections = (updatedSelections: RoomSelection[]) => {
  const initialSlots: Record<string, { timeSlotID: string; startTime: string; endTime: string; }[]> = {};
  // Transform the array back to the structure expected by setSelectedTimeSlots
  const newSlots = updatedSelections.reduce((acc, room) => {
    acc[room.roomID] = room.timeSlots.map(slot => ({
      timeSlotID: slot.timeSlotID,
      startTime: slot.startTime,
      endTime: slot.endTime
    }));
    return acc;
  }, initialSlots);

  // Update the state with the new data
  setSelectedTimeSlots(newSlots);
  setIsModalOpen(true); // Optional: Keep the modal open if needed
};

return (
    <div>
      <h1>Booking Form</h1>

      {/* Week Selection */}
      <div>
        <h2>Select Week:</h2>
        <button onClick={prevWeeks}>Previous</button>
        {[...Array(10)].map((_, index) => {
          const weekNumber = weekOffset + index + 1;
          if (weekNumber <= 52) {
            return (
              <button key={weekNumber} onClick={() => handleWeekChange(weekNumber)}>
                Week {weekNumber}
              </button>
            );
          }
          return null;
        })}
        <button onClick={nextWeeks}>Next</button>
      </div>

      {/* Day Tabs */}
      <div>
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
          <button key={day} onClick={() => handleDayChange(day)}>{day}</button>
        ))}
      </div>

      {/* Room Selection */}
      <div>
      {rooms && rooms.map(room => (
        <div key={room.roomID}>
          <button onClick={() => handleRoomSelect(room.roomID)}>Select time</button>
          {room.roomName}
          
          {dropdownOpen === room.roomID && (
            <div style={{ position: 'absolute', background: 'white', border: '1px solid black' }}>
              {availableTimeSlots[room.roomID]?.map((slot: { timeSlotID: any; startTime: any; endTime: any; }) => (
  <label key={slot.timeSlotID}>
    <input
      type="checkbox"
      checked={selectedTimeSlots[room.roomID]?.some(s => s.timeSlotID === slot.timeSlotID) || false}
      onChange={(e) => handleTimeSlotSelect(room.roomID, slot, e.target.checked)}
    />
    {slot.startTime} - {slot.endTime}
  </label>
))}
             
          
            </div>
          )}
        </div>
      ))}
      </div>

      {/* Next Button */}
      <button onClick={handleNavigate}>Granska val</button>
      {/* Modal Component */}
      <Modal
  key={new Date().toISOString()} // This forces React to re-render the Modal component when the key changes 
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  selections={Array.isArray(selectedTimeSlots) ? selectedTimeSlots : []} // Ensure this is always an array
  week={selectedWeek || 0}
  day={selectedDay || ''}
  setSelections={newSelections}
/>
  </div>
   

  );
};

export default BookingForm;
