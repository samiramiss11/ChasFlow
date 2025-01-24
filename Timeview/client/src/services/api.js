/* eslint-disable no-console */
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // Access the environment variable
});

export default async function fetchEvents() {
  try {
    const response = await api.get("/events");
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
}
