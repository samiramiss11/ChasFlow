import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

export type User = {
  user: string
  jwt: string
  token: string
}
type UserState = {
  user: User | null
  isDarkTheme: boolean
}

const getUserFromLocalStorage = (): User | null => {
  const user = localStorage.getItem('user') || null
  if (!user) return null
  return JSON.parse(user)
}

const themes = {
  darkTheme: 'darkTheme',
  default: 'dark-theme',
}

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true'
  document.body.classList.toggle('dark-theme', isDarkTheme)
  return isDarkTheme
}

interface State {
  user: User | null
  isDarkTheme: boolean
}

// const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled)
const initialState: UserState = {
  user: getUserFromLocalStorage(),
  isDarkTheme: checkDefaultTheme(),
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
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

export  const USER = {user: 'sd', jwt:'...',token:'...'}