import React, { useEffect, useState } from 'react';
import { useBooking } from '../../context/BookingContext';
import { fetchConsultants, fetchCourses } from '../../services/api';

const BookingConsult: React.FC = () => {
  const { setConsultantID, setCourseID } = useBooking();
  const [consultants, setConsultants] = useState([]);
  const [courses, setCourses] = useState([]);
  
  useEffect(() => {
    fetchConsultants().then(setConsultants);
    fetchCourses().then(setCourses);
  }, []);

  return (
    <div>
      <h1>Select Consultant and Course</h1>
      <select onChange={(e) => setConsultantID(e.target.value)}>
        <option value="">Select Consultant</option>
        {consultants.map((consultant: any) => (
          <option key={consultant.id} value={consultant.id}>{consultant.name}</option>
        ))}
      </select>

      <select onChange={(e) => setCourseID(e.target.value)}>
        <option value="">Select Course</option>
        {courses.map((course: any) => (
          <option key={course.id} value={course.id}>{course.name}</option>
        ))}
      </select>

      <button onClick={() => window.location.href = '/booking-action'}>Verify</button>
    </div>
  );
};

export default BookingConsult;
