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
     
      //  Object.keys(newState.rooms).forEach((roomId) => {
      //   if (newState.rooms[roomId].timeBounds.trim() === "") {
      //     delete newState.rooms[roomId];
      //   }
      // });

      // // If all rooms were removed, do not add this entry
      // if (Object.keys(newState.rooms).length === 0) return;

        const filteredRooms = Object.fromEntries(
    Object.entries(newState.rooms).filter(([_, room]) => room.timeBounds.trim() !== "")
      );
      console.log('filtered', filteredRooms)

  // If all rooms are empty, do not update the state
  if (Object.keys(filteredRooms).length === 0) return state;
     
      // Check if there is any room with a selected interval
      console.log(newState, 'addTimeIntervalstate')
      // Check if this (day, week) combo already exists
      const existingEntry = state.sets.find(
        //find instead of some to find existing
        (entry) => entry.day === newState.day && entry.week === newState.week
      );
      console.log("there exist an entry of day",JSON.stringify(existingEntry,null,2))
      if (!existingEntry) {
        Object.keys(newState.rooms).reduce((roomid, room) => { 
          console.log('prevlength initial',  newState.rooms[roomid], room) //correct previous names
          
            return roomid + room; 
        })
        state.sets.push(newState); // ✅ Only push if (day, week) is unique
       console.log( JSON.stringify( "time in total",state.timeInTotal , null, 2))
        state.timeInTotal += newState.totalHours
        console.log(JSON.stringify("timeintotal",state.timeInTotal, null, 2))
      }
      else {
        console.log("before case reducer", newState, JSON.stringify(existingEntry))
        timeIntervalSlice.caseReducers.mutatedRoomSelection(state,{ 
  type: 'mutatedRoomSelection',  // Add the type property
  payload: { 
    newState, 
    existingEntry 
  } 
});       
    
      }
     
      localStorage.setItem('setOfbatches', JSON.stringify(state));
    },

    mutatedRoomSelection: (state, action: PayloadAction<{ newState: TimeIntervalState; existingEntry: TimeIntervalState; }>) => {
      const { newState, existingEntry } = action.payload;

       // ✅ Merge selected intervals instead of adding a duplicate entry
      //  console.log('newstate',JSON.stringify(newState.rooms,null))
        Object.keys(newState.rooms).forEach((roomId,index) => {
          if (!existingEntry.rooms[roomId]) {
            existingEntry.rooms[roomId] = {selectedInterval:[], previousLength:0,  timeBounds:'' };
          }
          const newSetDataSyncronizableIds = newState.rooms[roomId].selectedInterval
          const previousLength = existingEntry.rooms[roomId].previousLength ?? 0;
          const newLengthParticularRoom = newState.rooms[roomId].previousLength ??0
          const newDisplayedTimeIntervals = newState.rooms[roomId].timeBounds;
              const roomToMutate =   previousLength !== 0 &&
  existingEntry.rooms &&
  existingEntry.rooms[roomId]
          //
         existingEntry.rooms[roomId].selectedInterval = newSetDataSyncronizableIds
          existingEntry.rooms[roomId].timeBounds = newDisplayedTimeIntervals
          
          console.log(roomId, index, existingEntry.rooms[roomId] == newState.rooms[roomId])   
          if (
roomToMutate
          ) {
            console.log("Before update:");
console.log("state.timeInTotal:", state.timeInTotal);
console.log("existingEntry.rooms[roomId]?.previousLength:", previousLength);
console.log("newState.totalHours:", newState.totalHours);
 state.timeInTotal += newLengthParticularRoom - previousLength;

    existingEntry.totalHours = newState.totalHours;
              console.log("After update:");
  console.log("state.timeInTotal:", state.timeInTotal);
  console.log("existingEntry.totalHours:", existingEntry.totalHours);
          }
          else if (previousLength == 0 && existingEntry.rooms &&
         
            existingEntry.rooms[roomId]) {
               console.log('hit')
             state.timeInTotal += newLengthParticularRoom + previousLength
  }
existingEntry.rooms[roomId].previousLength = newState.rooms[roomId].previousLength
        });
      
       
    },
    removeLastTimeIntervall: () => {
      localStorage.setItem('setOfbatches', JSON.stringify(defaultState));
       return defaultState;
    },
    filterBookingsForRoomId: (state, action: PayloadAction<{ roomId: string, day: number, week: number }>) => {
  const { roomId, day, week } = action.payload;  
      state.sets = state.sets.map((set) => {
         console.log(JSON.stringify( set.rooms , null, 2) , 'set.rooms')
//  const dayStrings = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag']
        //const ObjectdayString = dayStrings[set.day - 1]
        console.log('ffilter,set',JSON.stringify(set))
        const roomForSpecificDay = set.day !== day
        const roomForSpecificWeek = set.week !== week
        if (!roomForSpecificDay&& !roomForSpecificWeek) {
            console.log(set)
        } 

    const updatedRooms = Object.keys(set.rooms).reduce((newRooms, room) => {
      if (room !== roomId  ) {// && roomForSpecificDay&&roomForSpecificWeek
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