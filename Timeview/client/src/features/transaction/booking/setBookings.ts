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
      console.log(newState, 'addTimeIntervalstate')
      // Check if this (day, week) combo already exists
      const existingEntry = state.sets.find(
        //find instead of some to find existing
        (entry) => entry.day === newState.day && entry.week === newState.week
      );
      console.log("there exist an entry of day",JSON.stringify(existingEntry,null,2))
      if (!existingEntry) {
        state.sets.push(newState); // ✅ Only push if (day, week) is unique
       console.log( JSON.stringify( state.timeInTotal , null, 2))
        state.timeInTotal = newState.totalHours
        console.log(JSON.stringify( state.timeInTotal , null, 2))
      }
      else {
        // Check if the last stored state is identical to the new one
        // ✅ Merge selected intervals instead of adding a duplicate entry
        Object.keys(newState.rooms).forEach((roomId,index) => {
          if (!existingEntry.rooms[roomId]) {
            existingEntry.rooms[roomId] = {previousLength:0,  timeBounds:'' };
          }
          const previousLength = existingEntry.rooms[roomId].previousLength ?? 0;
          //const newLength = newState.rooms[roomId].timeBounds.length || 0;

          existingEntry.rooms[roomId].timeBounds = newState.rooms[roomId].timeBounds;
          existingEntry.rooms[roomId].previousLength = newState.rooms[roomId].previousLength
          console.log(roomId,index,  existingEntry.rooms[roomId] == newState.rooms[roomId])
          if (
  previousLength !== 0 &&
  existingEntry.rooms &&
  existingEntry.rooms[roomId] &&
true
          ) {
            console.log("Before update:");
console.log("state.timeInTotal:", state.timeInTotal);
console.log("existingEntry.rooms[roomId]?.previousLength:", existingEntry.rooms[roomId]?.previousLength ?? 0);
console.log("newState.totalHours:", newState.totalHours);
 state.timeInTotal += newState.totalHours - previousLength;

    existingEntry.totalHours = newState.totalHours;
              console.log("After update:");
  console.log("state.timeInTotal:", state.timeInTotal);
  console.log("existingEntry.totalHours:", existingEntry.totalHours);
          }
          else if(  previousLength == 0 && existingEntry.rooms &&
            existingEntry.rooms[roomId]) {
             state.timeInTotal += newState.totalHours
  }

        });
       
    
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
      else {
        console.log('dd')
        const previousLength = set.rooms[room]?.previousLength ?? 0
        console.log(previousLength)
          state.timeInTotal -= previousLength;
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
        
   // existingEntry.rooms[roomId].selectedInterval = Array.from(
          //   new Set([
          //     ...existingEntry.rooms[roomId].selectedInterval,
          //     ...newState.rooms[roomId].selectedInterval,
          //   ])
// );
          
   // Calculate the difference in time
      // const previousLength = existingEntry.rooms[roomId].previousLength ?? 0;
      // const newLength = newState.rooms[roomId].timeBounds.length || 0;

      // // Update room properties
      // existingEntry.rooms[roomId].timeBounds = newState.rooms[roomId].timeBounds;
      // existingEntry.rooms[roomId].previousLength = newLength;

      //     // Correctly adjust `timeInTotal`
      //     if(previousLength !=0)
      // state.timeInTotal += newLength //- previousLength;
      //   });