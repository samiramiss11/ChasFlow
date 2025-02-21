import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { StatiCheckbox } from '@/utils/transaction/checkbox'
interface CheckboxState {
  checkboxes: Record<string, Record<string, StatiCheckbox[]>> // week -> day -> checkboxes
}

const initialState: CheckboxState = {
  checkboxes: {},
}

const checkboxSlice = createSlice({
  name: 'checkbox',
  initialState,
  reducers: {
    setCheckboxes: (
      state,
      action: PayloadAction<{
        week: string
        day: string
        checkboxes: StatiCheckbox[]
      }>
    ) => {
      const { week, day, checkboxes } = action.payload
      if (!state.checkboxes[week]) {
        state.checkboxes[week] = {}
      }
      state.checkboxes[week][day] = checkboxes
    },
    toggleCheckbox: (
      state,
      action: PayloadAction<{ week: string; day: string; name: string }>
    ) => {
      const { week, day, name } = action.payload
      const checkboxes = state.checkboxes[week]?.[day] || []
      state.checkboxes[week][day] = checkboxes.map((cb) =>
        cb.name === name ? { ...cb, selected: !cb.selected } : cb
      )
    },
  },
})

export const { setCheckboxes, toggleCheckbox } = checkboxSlice.actions
export default checkboxSlice.reducer
