import React, { useEffect, useState } from 'react';
import { useBooking } from '../../context/BookingContext';
import { fetchConsultants, fetchCourses } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const BookingConsult: React.FC = () => {
  const { setConsultantID, setCourseID } = useBooking();
  const [consultants, setConsultants] = useState<any[]>([]);
  const [courses, setCourses] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
  fetchConsultants()
    .then((data) => {
      if (Array.isArray(data)) {
        setConsultants(data);
      } else {
        console.error("Expected an array but got:", data);
        setConsultants([]); // Fallback to an empty array
      }
    })
    .catch((error) => {
      console.error("Error fetching consultants:", error);
      setConsultants([]); // Fallback to an empty array
    });

  fetchCourses()
    .then((data) => {
      if (Array.isArray(data)) {
        setCourses(data);
      } else {
        console.error("Expected an array but got:", data);
        setCourses([]); // Fallback to an empty array
      }
    })
    .catch((error) => {
      console.error("Error fetching courses:", error);
      setCourses([]); // Fallback to an empty array
    });
}, []);
const updatedConsultants = consultants.map(consultant => ({
  id: consultant.consultantID,
  username: consultant.username
}));

  const handleVerify = () => {
    navigate('/booking-action');  // Navigate to the booking-action page
  };

  return (
    <div>
      <h1>Select Consultant and Course</h1>
      <select onChange={(e) => setConsultantID(e.target.value)}>
        <option value="">Select Consultant</option>
        {updatedConsultants.map((consultant: any) => (
          <option key={consultant.id} value={consultant.id}>{consultant.username}</option>
        ))}
      </select>

      <select onChange={(e) => setCourseID(e.target.value)}>
        <option value="">Select Course</option>
        {courses.map((course: any, index) => (
          <option key={index} value={course.id}>{course.courseCode}</option>
        ))}
      </select>

      <button onClick={handleVerify}>Verify</button>  {/* Use handleVerify for navigation */}
    </div>
  );
};

export default BookingConsult;
