import api from '@/features/api'
export const fetchAdminProfile = async () => {
  try {
    const response = await api.get('/users/profile')
    return response.data
  } catch (error) {
    throw error
  }
}
