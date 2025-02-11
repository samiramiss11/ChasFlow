import React, { useEffect, useState } from 'react';
import axios from 'axios';

// this interface defines structure of each booked room.
interface BookedRoom {
  id: number;
  roomName: string;
  courseName: string;
  consultantFirstName: string;
  consultantLastName: string;
  startTime: string;
  endTime: string;
  totalHours: number;
}


const timeReport = () => {
  const [bookedRooms, setBookedRooms] = useState<BookedRoom[]>([]);

  useEffect(() => {
    // Fetch booked rooms from the API
    const fetchBookedRooms = async () => {
      try {
        const response = await axios.get('/api/booked-rooms'); // Update this endpoint to match your backend
        setBookedRooms(response.data);
      } catch (error) {
        console.error('Error fetching booked rooms:', error);
      }
    };

    fetchBookedRooms();
  }, []);

  return (
    <div className="booked-rooms-tab">
      <h2>Booked Rooms</h2>
      {bookedRooms.length === 0 ? (
        <p>No booked rooms found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Room Name</th>
              <th>Course</th>
              <th>Consultant</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Total Hours</th>
            </tr>
          </thead>
          <tbody>
            {bookedRooms.map((room) => (
              <tr key={room.id}>
                 <td>{room.courseName}</td>
                <td>
                  {room.consultantFirstName} {room.consultantLastName}
                </td>
                <td>{room.startTime}</td>
                <td>{room.endTime}</td>
                <td>{room.totalHours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default timeReport;
