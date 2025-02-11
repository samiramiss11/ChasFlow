import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Consultant {
  firstName: string;
  isActive: boolean;
  // Add other properties as per your data model
}
const Consultant = () => {
  const [consultants, setConsultants] = useState<Consultant[]>([]);

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

  function toggleActive(id: any): void {
    throw new Error('Function not implemented.');
  }

  return (
<div>
      {consultants.map(consultant => (
        <div key={consultant.firstName}>
          <p>Name: {consultant.firstName}</p>
          <p>Status: {consultant.isActive ? 'Active' : 'Inactive'}</p>
        </div>
      ))}
    </div>
  );
};

export default Consultant;
