import api from '@/features/api'
export const fetchCourses = async () => {
  try {
    const response = await api.get('/courses')
    return response.data
  } catch (error) {
    throw error
  }
}

// Fetch Consultants
export const fetchConsultants = async () => {
  try {
    const response = await api.get('/consultants')
    return response.data // Return the consultants data
  } catch (error) {
    console.error('Error fetching consultants:', error)
    throw error
  }
}
