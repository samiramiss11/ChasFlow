import api from '@/features/api'
// Create a New Booking
export const createBooking = async (bookingData: any) => {
  try {
    const response = await api.post('/booking/create', bookingData)
    return response.data
  } catch (error) {
    throw error
  }
}
// Save booking
export const saveBookings = async (bookings: any) => {
  try {
    const response = await api.post(`/booking/save`, bookings)
    return response.data
  } catch (error) {
    throw error
  }
}
