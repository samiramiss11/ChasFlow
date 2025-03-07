//api.ts fronted :
import axios from 'axios';

// Create an Axios instance with the base URL from environment variables
const API_URL = import.meta.env.VITE_API_BASE_URL;
const api = axios.create({
  baseURL: API_URL,  // Set the base URL for all requests
  headers: {
    'Content-Type': 'application/json',
    // Add any other necessary headers, like authorization tokens
  },
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

// Fetch Rooms// Fetch Rooms
export const fetchRoomsForDay = async (week: number, day: string) => {
  try {
    const response = await api.get(`/rooms/${week}/${day}`);  // Ensure this matches your backend route
    return response.data;
  } catch (error) {
    console.error('Error fetching rooms:', error);  // Log any errors for debugging
    throw error;
  }
};
//fetch available time slots
export const fetchAvailableTimeSlots = async (week: number | null, day: string | null, roomID: string | null) => {
  try {
    const response = await api.get(`/timeslots/${week}/${day}/${roomID}`);
    console.log("Time Slots Data:", response.data);
    return response.data; // This should return { availableTimeSlots: [...] }
  } catch (error) {
    console.error('Error fetching time slots:', error);
    throw error;
  }
};


// Fetch Admin Profile
export const fetchAdminProfile = async () => {
  const response = await api.get('/auth/profile');
  return response.data;
};

// admin login
export const loginUser = async (email: string, password: string) => {
  const response = await api.post('/auth/login-page', { email, password });
  const { token } = response.data;
  localStorage.setItem('token', token);
};



export const fetchConsultants = async () => {
  try {
    const response = await api.get('/consultants')
    const data = response.data // Return the consultants data

    const frontendTypeConvertedConsultants = data.map((obj: any) => ({
      id: obj.consultantID, // Use obj instead of consultants
      name: obj.username,
      role: USER_ROLE.Employee,
    }))
    
    //const FitSelectComponentConverted = consultants.map((obj) =>  obj.courseCode))
    const konsultantNamesMeta = frontendTypeConvertedConsultants.map(
      (userWithRole: any) => userWithRole.name
    )
    return konsultantNamesMeta
  } catch (error) {
    console.error('Error fetching consultants:', error)
    return error
  }
}

export const fetchCourses = async () => {
  try {
    const response = await api.get('/courses')
    const data = response.data
    const courseMeta = data.map((withoutId: any) => withoutId.courseCode)
    return courseMeta
  } catch (error) {
    return error
  }
}
import { USER_ROLE } from '@/utils/types'

// Fetch consultant by ID
export const fetchConsultantById = async (consultantID: string) => {
  try {
    const response = await axios.get('/consultants');
    return response.data; // { id, username, email, ... }
  } catch (error) {
    throw error;
  }
};



// Save booking
export const saveBookings = async (data: any) => {
  try {
    const response = await api.post('/bookings', data);
    return response.data;
  } catch (error) {
    console.error('Error saving bookings:', error);
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


/*
// Create a New Booking
export const createBooking = async (bookingData: any) => {
  try {
    const response = await api.post('/booking/create', bookingData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
*/
/* export const fetchAvailableTimeSlots = async (roomID: string, day: string, week: number) => {
try {
    if (!roomID || !day || !week) {
      console.error("Invalid data: roomID, day or week missing");
      return;
    }
    const response = await api.get('/timeSlots', {
      params: { roomID, day, week }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching time slots:', error);
    throw error;
  }
}; */ 