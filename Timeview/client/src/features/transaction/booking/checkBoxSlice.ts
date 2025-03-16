import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TimeSlot {
  timeSlotID: number //|null
  startTime: string
  endTime: string
  roomID: number //|null
  created_at: string //|null
}

interface TimeSlotState {
  slots: TimeSlot[]
}

const initialState: TimeSlotState = {
  slots: []
//     { startTime: "8.00", endTime: "8.55" }, //dont mutate state directly
//     { startTime: "9.00", endTime: "9.55" },
//     { startTime: "10.00", endTime: "10.55" },
//     { startTime: "11.00", endTime: "11.55" },
//     { startTime: "12.00", endTime: "12.55" },
//     { startTime: "13.00", endTime: "13.55" },
//     { startTime: "14.00", endTime: "14.55" },
//     { startTime: "15.00", endTime: "15.55" },
//     { startTime: "16.00", endTime: "16.55" },
//     { startTime: "17.00", endTime: "17.55" },
//     { startTime: "18.00", endTime: "18.55" },
//     { startTime: "19.00", endTime: "20.00" },
//   ].map((slot, index) => ({
//     timeSlotID:null,
//     startTime: slot.startTime,
//     endTime: slot.endTime,
//     roomID: null, // Placeholder
//     created_at: null, // Placeholder
//   })),
};


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
