import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TimeIntervalState } from './booking'
interface SetTimeIntervalState {
  sets: TimeIntervalState[] // Array of TimeIntervalState
}

// Default state
const defaultState: SetTimeIntervalState = {
  sets: [], // Default empty array for sets
}

// Retrieve the set data from localStorage and ensure it matches SetTimeIntervalState
const getSetFromLocalStorage = (): SetTimeIntervalState => {
  const batch = localStorage.getItem('setOfbatches')
  const parsedBatch = batch ? JSON.parse(batch) : null

  // Check if parsedBatch is valid
  if (!parsedBatch || !Array.isArray(parsedBatch.sets)) {
    return defaultState // Return defaultState if the structure is invalid
  }

  return parsedBatch // Return valid data
}

/**
 * i think it is easier to play with booking slice
 * --> then push to set intervalls to avoid playing with too nested data
 */
const timeIntervalSlice = createSlice({
  name: 'timeInterval',
  initialState: getSetFromLocalStorage(),
  reducers: {
    addTimeIntervalState: (state, action: PayloadAction<TimeIntervalState>) => {
      const newState = action.payload
      // Check if there is any room with a selected interval

      // Check if this (day, week) combo already exists
      const existingEntry = state.sets.find(
        //find instead of some to find existing
        (entry) => entry.day === newState.day && entry.week === newState.week
      )

      if (!existingEntry) {
        state.sets.push(newState) // ✅ Only push if (day, week) is unique
      }
      //  const hasSelectedIntervals = Object.values(newState.rooms).some(
      //    (room) => room.selectedInterval.length > 0
      //  )
      //  if (!hasSelectedIntervals) return

      // const lastState = state.sets[state.sets.length - 1]

      // if (
      //   !lastState ||
      //   JSON.stringify(lastState) !== JSON.stringify(newState)
      // ) {
      //   state.sets.push(newState) // Only push if different
      // }
      else {
        // Check if the last stored state is identical to the new one
        // ✅ Merge selected intervals instead of adding a duplicate entry
        Object.keys(newState.rooms).forEach((roomId) => {
          if (!existingEntry.rooms[roomId]) {
            existingEntry.rooms[roomId] = { selectedInterval: [] }
          }

          existingEntry.rooms[roomId].selectedInterval = Array.from(
            new Set([
              ...existingEntry.rooms[roomId].selectedInterval,
              ...newState.rooms[roomId].selectedInterval,
            ])
          )
        })
      }
      console.log(state.sets)
      localStorage.setItem('setOfbatches', JSON.stringify(state.sets))
    },
    removeLastState: (state) => {
      if (state.sets.length > 0) {
        state.sets.pop() // Remove the last saved state
      }
    },
  },
})

export const { addTimeIntervalState, removeLastState } =
  timeIntervalSlice.actions

export default timeIntervalSlice.reducer

// Types
// interface TogglePayload {
//   roomId: string
//   day: string
//   week: string
//   interval: string
// }

interface SetIntervalsPayload {
  roomId: string
  day: string
  week: string
  intervals: string[]
}

interface ClearPayload {
  roomId: string
  day: string
  week: string
}
