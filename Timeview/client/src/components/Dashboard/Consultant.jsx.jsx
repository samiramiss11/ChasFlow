import React, { useEffect, useState } from 'react';
import axios from 'axios';

const consultant = () => {
  const [consultants, setConsultants] = useState([]);

  useEffect(() => {
    // Fetch consultants from the API
    const fetchConsultants = async () => {
      try {
        const response = await axios.get('/api/consultants'); // Update this endpoint to match your backend
        setConsultants(response.data);
      } catch (error) {
        console.error('Error fetching consultants:', error);
      }
    };

    fetchConsultants();
  }, []);

  return (
    <div className="consultants-tab">
      <h2>Consultants</h2>
      {consultants.length === 0 ? (
        <p>No consultants found.</p>
      ) : (
        <ul>
          {consultants.map((consultant) => (
            <li key={consultant.id}>
              {consultant.firstName} {consultant.lastName} - {consultant.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default consultant;
