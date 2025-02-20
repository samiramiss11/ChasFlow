//BookingConsult.tsx keep this
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
    fetchConsultants().then(setConsultants);
    fetchCourses().then(setCourses);
  }, []);

  const handleVerify = () => {
    navigate('/booking-action');  // Navigate to the booking-action page
  };

  return (
    <div>
      <h1>Select Consultant and Course</h1>
      <select onChange={(e) => setConsultantID(e.target.value)}>
        <option value="">Select Consultant</option>
        {consultants.map((consultant: any) => (
          <option key={consultant.consultantID} value={consultant.consultantID}>{consultant.username}</option>
        ))}
      </select>

      <select onChange={(e) => setCourseID(e.target.value)}>
        <option value="">Select Course</option>
        {courses.map((course: any) => (
          <option key={course.courseID} value={course.courseID}>{course.courseCode}</option>
        ))}
      </select>

      <button onClick={handleVerify}>Verify</button>  {/* Use handleVerify for navigation */}
    </div>
  );
};

export default BookingConsult;
