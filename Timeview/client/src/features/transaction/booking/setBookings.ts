import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TimeIntervalState } from './booking'
interface SetTimeIntervalState {
  sets: TimeIntervalState[] // Array of TimeIntervalState
  timeInTotal: number
}

// Default state
const defaultState: SetTimeIntervalState = {
  sets: [], // Default empty array for sets,
  timeInTotal: 0,
}
import {
  SetComplexUserPrivilages,
  UserState,
} from '@/features/onboarding/users/usersSlice'
export interface OwnedBatch {
  allbooking: SetTimeIntervalState
  relatedUser?: UserState
}

// Retrieve the set data from localStorage and ensure it matches SetTimeIntervalState
const getSetFromLocalStorage = (): SetTimeIntervalState => {
  const batch = localStorage.getItem('setOfbatches')
  //console.log(batch, 'this is a batch')
  const parsedBatch = batch ? JSON.parse(batch) : defaultState

  // // Check if parsedBatch is valid
  // if (!parsedBatch || !Array.isArray(parsedBatch.sets)) {
  //   return defaultState // Return defaultState if the structure is invalid
  // }

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
        
          state.timeInTotal += newState.totalHours
      }

      localStorage.setItem('setOfbatches', JSON.stringify(state))
    },
    removeLastTimeIntervall: () => {
      localStorage.setItem('setOfbatches', JSON.stringify(defaultState))
    },
  },
})

export const { addTimeIntervalState, removeLastTimeIntervall } =
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
