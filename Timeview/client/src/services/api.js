import axios from 'axios';

const API_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchRooms = async () => {
  try {
    const response = await axios.get(`${API_URL}/rooms`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
