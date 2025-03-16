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
import {SyncronizedDisplayContainerRecord} from '@/features/transaction/booking/booking'
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
      const newState = action.payload;
      // Check if there is any room with a selected interval

      // Check if this (day, week) combo already exists
      const existingEntry = state.sets.find(
        //find instead of some to find existing
        (entry) => entry.day === newState.day && entry.week === newState.week
      );

      if (!existingEntry) {
        state.sets.push(newState); // ✅ Only push if (day, week) is unique
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
            existingEntry.rooms[roomId] = {  timeBounds:'' };
          }
           existingEntry.rooms[roomId].timeBounds = newState.rooms[roomId].timeBounds;
          // existingEntry.rooms[roomId].selectedInterval = Array.from(
          //   new Set([
          //     ...existingEntry.rooms[roomId].selectedInterval,
          //     ...newState.rooms[roomId].selectedInterval,
          //   ])
          // );

        });
        
        state.timeInTotal += newState.totalHours;
      }

      localStorage.setItem('setOfbatches', JSON.stringify(state));
    },
    removeLastTimeIntervall: () => {
      localStorage.setItem('setOfbatches', JSON.stringify(defaultState));
       return defaultState;
    },
    filterBookingsForRoomId: (state, action: PayloadAction<string>) => {
      const roomId = action.payload;
      
      state.sets = state.sets.map((set) => {
         console.log(JSON.stringify( set.rooms , null, 2) , 'set.rooms')

    const updatedRooms = Object.keys(set.rooms).reduce((newRooms, room) => {
      if (room !== roomId) {
        newRooms[room] = set.rooms[room]; // Keep the rooms that don't match roomId
      }
      return newRooms;
    }, {} as Record<string, any>);

    console.log('updatedRooms after delete:', JSON.stringify(updatedRooms, null, 2));

    // Return the updated set with the new rooms object
    return { ...set, rooms: updatedRooms };
      });
      localStorage.setItem('setOfbatches', JSON.stringify(state));
       return state;
  },
  }
})

export const { addTimeIntervalState, removeLastTimeIntervall,filterBookingsForRoomId } =
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

// state.sets.forEach((set) => { //room on particular day
      //   Object.keys(set.rooms).forEach((room) => {
      //     console.log(room, 'room')
      //     if (room !== roomId) {
      //       delete set.rooms[room]
      //     }
      //   })
      // })
      // state.sets.forEach((set) => {
      //   // Check if the rooms object exists within the set
      //   if (set.rooms) {
      //     // Create a new rooms object by filtering out the room that matches roomId
      //     const updatedRooms = Object.keys(set.rooms).reduce((newRooms, room) => {
      //       console.log(newRooms, 'newRooms')
      //       if (room !== roomId) {
      //         newRooms[room] = set.rooms[room]; // Keep the rooms that don't match roomId
      //       }
      //       return newRooms;
      //     }, {} as Record<string, { selectedInterval: SyncronizedDisplayContainerRecord[] }>);; // Starting with an empty object for the new rooms

      //     // Update the set's rooms with the updatedRooms
      //     set.rooms = updatedRooms;
      //   }
// })
      
//in states.map
  //        const updatedRooms = Object.keys(set.rooms).reduce((newRooms, room) => {
  //          console.log(newRooms, 'newRooms')
  //          console.log(room, roomId)
  //     if (room !== roomId) {
  //       newRooms[room] = set.rooms[room]; // Keep the rooms that don't match roomId
  //     }
      
  //     return newRooms;
  //        }, {} as Record<string, any>);
  //        console.log(updatedRooms, 'updatedRooms')

        //   return { ...set, rooms: updatedRooms };
        // Make a shallow copy of rooms and filter out the room with roomId