import api from '@/features/api'
export const fetchRooms = async () => {
  try {
    const response = await api.get('/rooms')
    return response.data
  } catch (error) {
    throw error
  }
}
