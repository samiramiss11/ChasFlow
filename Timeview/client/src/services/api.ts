import axios from 'axios';

// Create an Axios instance with the base URL from environment variables
const API_URL = import.meta.env.VITE_API_BASE_URL;
const api = axios.create({
  baseURL: API_URL,  // Set the base URL for all requests
});

// Add the Authorization header globally if token exists in localStorage
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//
export const fetchAvailableTimeSlots = async (roomID: string, day: string, week: number) => {
  try {
    const response = await api.get(`/timeSlots`, { params: { roomID, day, week } });
    return response.data;
  } catch (error) {
    throw error;
  }
};
// Fetch Admin Profile
export const fetchAdminProfile = async () => {
  try {
    const response = await api.get('/users/profile');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Fetch Rooms
export const fetchRooms = async () => {
  try {
    const response = await api.get('/rooms');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Fetch Courses
export const fetchCourses = async () => {
  try {
    const response = await api.get('/courses');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Fetch Consultants
export const fetchConsultants = async () => {
  try {
    const response = await api.get('/consultants');
    return response.data;  // Return the consultants data
  } catch (error) {
    console.error('Error fetching consultants:', error);
    throw error;
  }
};

// Fetch consultant by ID
export const fetchConsultantById = async (consultantID: string) => {
  try {
    const response = await axios.get('/consultants');
    return response.data; // { id, username, email, ... }
  } catch (error) {
    throw error;
  }
};

// Create a New Booking
export const createBooking = async (bookingData: any) => {
  try {
    const response = await api.post('/booking/create', bookingData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
// Save booking
export const saveBookings = async (bookings: any) => {
  try {
    const response = await api.post(`/booking/save`, bookings);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete a Booking
export const deleteBooking = async (bookingID: string) => {
  try {
    const response = await api.delete(`/booking/delete/${bookingID}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Change Consultant for a Booking
export const handlechangeConsultant = async (bookingID: string, newConsultantID: string) => {
  try {
    const response = await api.post(`/booking/handlechangeConsultant`, { bookingID, newConsultantID });
    return response.data;
  } catch (error) {
    throw error;
  }
};
