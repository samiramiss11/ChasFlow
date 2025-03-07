import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TimeSlot {
  timeSlotID: number
  startTime: string
  endTime: string
  roomID: number
  created_at: string
}

interface TimeSlotState {
  slots: TimeSlot[]
}

const initialState: TimeSlotState = {
  slots: [],
}

const timeSlotSlice = createSlice({
  name: 'timeSlots',
  initialState,
  reducers: {
    setTimeSlots: (state, action: PayloadAction<TimeSlot[]>) => {
      state.slots = action.payload
    },
    addTimeSlot: (state, action: PayloadAction<TimeSlot>) => {
      state.slots.push(action.payload)
    },
    clearTimeSlots: (state) => {
      state.slots = []
    },
  },
})

export const { setTimeSlots, addTimeSlot, clearTimeSlots } =
  timeSlotSlice.actions
export default timeSlotSlice.reducer
