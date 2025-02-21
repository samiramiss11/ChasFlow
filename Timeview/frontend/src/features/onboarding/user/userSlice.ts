import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { ComplexUserPrivilage } from '../users/usersSlice'
export type User = {
  user: ComplexUserPrivilage
  jwt: string
  token: string
}
type UserState = {
  user: ComplexUserPrivilage | null
}

const getUserFromLocalStorage = (): ComplexUserPrivilage | null => {
  const user = localStorage.getItem('user') || null
  if (!user) return null
  return JSON.parse(user)
}

// const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled)
const initialState: UserState = {
  user: getUserFromLocalStorage(),
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      if (!action.payload) {
        console.error('Payload is null')
        return // Exit early to prevent errors
      }

      const user = {
        ...(action.payload.user as any),
        token: action.payload.jwt,
      }
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },
    logoutUser: (state: any) => {
      state.user = null
      // localStorage.clear()
      localStorage.removeItem('user')
      toast.success('Logged out successfully')
    },
    toggleTheme: (state: any) => {
      const newDarkTheme = !state.isDarkTheme
      state.isDarkTheme = newDarkTheme
      document.body.classList.toggle('dark-theme', newDarkTheme)
      localStorage.setItem('darkTheme', JSON.stringify(newDarkTheme))
    },
  },
})

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions

export default userSlice.reducer
import { Manager } from '../users/usersSlice'
export const USER: Manager = {
  id: '1', // Add a valid id
  name: 'Erik Manager', // Add a valid name
  role: 'admin',
  employees: [], // Ensure it's an array of Employee[]
}
