// File: src/components/TestBackendConnection.jsx
import React, { useEffect } from 'react';

const TestBackendConnection = () => {
  useEffect(() => {
    fetch('http://localhost:8080/api/ping')
      .then(response => response.text())
      .then(message => {
        console.log('Response from backend:', message);
        alert('Backend is connected: ' + message);
      })
      .catch(error => {
        console.error('Error connecting to backend:', error);
        alert('Failed to connect to backend');
      });
  }, []);

  return <div>Testing backend connection... Check console for details.</div>;
};

export default TestBackendConnection;
