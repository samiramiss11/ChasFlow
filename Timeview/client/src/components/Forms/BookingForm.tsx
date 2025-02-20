//BookingForm.tsx keep this
    import React, { useEffect, useState } from 'react';
    import { useBooking } from '../../context/BookingContext';
    import { fetchAvailableTimeSlots, fetchRoomsForDay } from '../../services/api';
    import { useNavigate } from 'react-router-dom';
    
    
    const BookingForm = () => {
      const { selectedWeek, setSelectedWeek, selectedDay, setSelectedDay, selectedRoom, setSelectedRoom, selectedTimeSlots, setSelectedTimeSlots } = useBooking();
      const [rooms, setRooms] = useState<any[]>([]);
      const [availableTimeSlots, setAvailableTimeSlots] = useState<any[]>([]);
      const [dropdownOpen, setDropdownOpen] = useState(false);
      const [weekOffset, setWeekOffset] = useState(0);
      const navigate = useNavigate();
      
    
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
    
      const handleVerify = () => {
        navigate('/booking-confirmation');  // Navigate to the booking-action page
      };

      const handleWeekChange = (week: number) => {
        setSelectedWeek(week);
        setSelectedRoom;
        setAvailableTimeSlots([]);
        setDropdownOpen(false);
      };
    
      const handleDayChange = (day: string) => {
        setSelectedDay(day);
        setDropdownOpen(false);
        if (selectedWeek && day) {
          fetchRoomsForDay(selectedWeek, day)
            .then((data) => {
              console.log('API Response:', data);  
              if (Array.isArray(data)) {   
                setRooms(data);
                console.log('Rooms fetched for the day:', data);
              } else {
                console.error('Data fetched is not an array:', data);
                setRooms([]);  // Set rooms to an empty array if data is not array
              }
            })
            .catch((err) => {
              console.error('Error fetching rooms:', err);
              setRooms([]);  // Ensure rooms is always an array even on error
            });
        }
      };
    
      const handleRoomSelect = (roomID: string) => {
        setSelectedRoom(roomID);
        fetchAvailableTimeSlots(selectedWeek, selectedDay, roomID)
          .then(data => {
            console.log('Time slots fetched:', data);
            setAvailableTimeSlots(data);
            setDropdownOpen(!dropdownOpen); // Toggle dropdown
          })
          .catch(err => console.error('Error fetching time slots:', err));
      };
    
    const handleTimeSlotSelect = (timeSlotID: string) => {
    const updatedTimeSlots = selectedTimeSlots.includes(timeSlotID) ? selectedTimeSlots.filter(id => id !== timeSlotID) : [...selectedTimeSlots, timeSlotID];
     setSelectedTimeSlots(updatedTimeSlots);
    };
    

    const nextWeeks = () => {
      if (weekOffset < 42) { // Ensure we don't exceed the limit
        setWeekOffset(weekOffset + 10);
      }
    };
  
    const prevWeeks = () => {
      if (weekOffset > 0) { // Ensure we don't go below 0
        setWeekOffset(weekOffset - 10);
      }
    };
  return (
    <div>
      <h1>Booking Form</h1>

      {/* Week Selection */}
      <div>
        <h2>Select Week:</h2>
        <button style={{ background: 'lightblue' }} onClick={prevWeeks}>Previous</button>
        {[...Array(10)].map((_, index) => {
          const weekNumber = weekOffset + index + 1;
          if (weekNumber <= 52) {
            return (
              <button key={weekNumber} onClick={() => handleWeekChange(weekNumber)}>
                V {weekNumber}
              </button>
            );
          }
          return null;
        })}
        <button style={{ background: 'lightblue' }} onClick={nextWeeks}>Next</button>
      </div>

      {/* Day Tabs */}
      <div>
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
          <button key={day} onClick={() => handleDayChange(day)}>
            {day}
          </button>
        ))}
      </div>

      {/* Room Selection */}
      <div>
      {rooms && rooms.map(room => (
        <div key={room.roomID}>
          <button  onClick={() => handleRoomSelect(room.roomID)} >Select time</button>
          {room.roomName}
          
          {selectedRoom === room.roomID && dropdownOpen &&(
            <div style={{ position: 'absolute', background: 'white', border: '1px solid black' }}>
              {availableTimeSlots.length > 0 ? (
              availableTimeSlots.map(slot => (
<label key={slot.timeSlotID}>
                  <input
                        type="checkbox"
                        checked={selectedTimeSlots.includes(slot.timeSlotID)}
                        onChange={() => handleTimeSlotSelect(slot.timeSlotID)}
                      />
                      {slot.startTime} - {slot.endTime}
                    </label>
            ))
          ) : (
            <option>No available time slots</option>
          )}
        </div>
          )}
          </div>
        ))}
      </div>


      {/* Next Button */}
      <button style={{ background: 'lightblue' }} onClick={handleVerify}>Nästa Sidan</button>  {/* Use handleVerify for navigation */}    </div>
  );
};

export default BookingForm;
