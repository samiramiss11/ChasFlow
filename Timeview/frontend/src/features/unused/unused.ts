import api from '@/features/api'
// Add the Authorization header globally if token exists in localStorage
/**
 * can set directly by accessing it from related slice (avoid config.headers headace)
 * https://blog.logrocket.com/using-axios-set-request-headers/ (i dunno mb good for roles, but its easy to work around)
 */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/**
 * mb do later, for now just reset the checkbox context
 * @param roomID
 * @param day
 * @param week
 * @returns
 */
export const fetchAvailableTimeSlots = async (
  roomID: string,
  day: string,
  week: number
) => {
  try {
    const response = await api.get(`/timeSlots`, {
      params: { roomID, day, week },
    })
    return response.data
  } catch (error) {
    throw error
  }
}

/**
 * already fetch all konsultants and picked on of them.
 * the choise is already stored
 * @param consultantID
 * @returns
 */
export const fetchConsultantById = async (consultantID: string) => {
  try {
    const response = await api.get('/consultants')
    return response.data // { id, username, email, ... }
  } catch (error) {
    throw error
  }
}

/**
 * uh the above its handled either on the client or on server cashe.
 * @param bookingID
 * @param newConsultantID
 * @returns
 */
// Change Consultant for a Booking
export const handlechangeConsultant = async (
  bookingID: string,
  newConsultantID: string
) => {
  try {
    const response = await api.post(`/booking/handlechangeConsultant`, {
      bookingID,
      newConsultantID,
    })
    return response.data
  } catch (error) {
    throw error
  }
}

// Delete a Booking
/**
 * dunno mb later, we cant see our bookings yet
 * @param bookingID
 * @returns
 */
export const deleteBooking = async (bookingID: string) => {
  try {
    const response = await api.delete(`/booking/delete/${bookingID}`)
    return response.data
  } catch (error) {
    throw error
  }
}
