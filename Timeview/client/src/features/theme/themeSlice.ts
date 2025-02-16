import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Theme = 'dark' | 'light' | 'system'

type ThemeState = {
  theme: Theme
}
import { applyTheme } from '@/utils/helpfull/utillity'
const initializeTheme = (): Theme => {
  const theme = (localStorage.getItem('theme') as Theme) || 'system'
  applyTheme(theme)
  return theme
}

const initialState: ThemeState = {
  theme: initializeTheme(),
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
})

export const {} = themeSlice.actions

export default themeSlice.reducer
