import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// interface TimeIntervalState {
//   selectedIntervals: string[]
// }
//  support multiple rooms, each having its own set of selected intervals
export interface TimeIntervalState {
  day: number
  week: number
  rooms: Record<string, { selectedInterval: string[] }> //nicer syntax, keep room seperate form global properties
  // [roomId: string]: {
  //   selectedInterval: string[]                     //This conflict causes the TS2411 error.----
  // }
}
//Dynamic room IDs without predefining them.
//Independent selection management for each room.

const defaultState: TimeIntervalState = {
  day: 1,
  week: 1,
  rooms: {},
}

const getCartFromLocalStorage = (): TimeIntervalState => {
  const batch = localStorage.getItem('batch')
  return batch ? JSON.parse(batch) : defaultState
}

const timeIntervalSlice = createSlice({
  name: 'timeInterval',
  initialState: getCartFromLocalStorage(),
  reducers: {
    // toggleInterval: (state, action: PayloadAction<string>) => {
    //   const interval = action.payload
    //   if (state.selectedIntervals.includes(interval)) {
    //     state.selectedIntervals = state.selectedIntervals.filter(
    //       (i) => i !== interval
    //     )
    //   } else {
    //     state.selectedIntervals.push(interval)
    //   }
    // },
    // setIntervals: (state, action: PayloadAction<string[]>) => {
    //   state.selectedIntervals = action.payload
    // },
    // clearIntervals: (state) => {
    //   state.selectedIntervals = []
    // },
    toggleInterval: (state, action: PayloadAction<TogglePayload>) => {
      //dont need select since it is frontend specific
      const { roomId, interval } = action.payload

      if (!state.rooms[roomId]) {
        state.rooms[roomId] = { selectedInterval: [] } // Initialize if missing
      }

      // if (!state[roomId]) {
      //   state[roomId] = { day: '', week: '', selectedInterval: [] }  //not set the global + specific simultaneously
      // }

      const selectedIntervals = state.rooms[roomId].selectedInterval

      // if (selectedIntervals.includes(interval)) {
      //   state.rooms[roomId].selectedIntervals = selectedIntervals.filter(
      //     (i) => i !== interval
      //   )
      // } else {
      //   selectedIntervals.push(interval)
      // }
    },
    setGlobalProp: (state, action: PayloadAction<globalPropPayload>) => {
      if (action.payload.day !== undefined) {
        state.day = Number(action.payload.day)
      } else if (action.payload.week !== undefined) {
        state.week = Number(action.payload.week)
      }
    },
    // toggleFeature: (state, action: PayloadAction<Feature>) => {
    //   const feature = action.payload
    //   console.log('Payload:', JSON.stringify(feature, null, 2))
    //   // Check if the feature already exists in the state
    //   const existingFeatureIndex = state.features.findIndex(
    //     (f) => f.name === feature.name
    //   )

    //   if (existingFeatureIndex > -1) {
    //     // Feature exists, toggle its selected state
    //     state.features[existingFeatureIndex] = {
    //       ...state.features[existingFeatureIndex],
    //       selected: !state.features[existingFeatureIndex].selected,
    //     }
    //   } else {
    //     // Feature does not exist, add it to the list if selected
    //     if (feature.selected) {
    //       state.features.push(feature)
    //     }
    //   }
    //   console.log('Updated features:', JSON.stringify(state.features, null, 2))
    // },

    setInterval: (state, action: PayloadAction<TogglePayload>) => {
      const { roomId, interval } = action.payload

      if (!state.rooms[roomId]) {
        state.rooms[roomId] = { selectedInterval: [] } // Initialize if missing
      }

      state.rooms[roomId].selectedInterval = interval
      console.log('current interval', state.rooms[roomId].selectedInterval)
      // state.rooms[roomId].selectedIntervals = {
      //   day: '',
      //   week: '',
      //   selectedIntervals: intervals,
      // }
    },

    clearIntervals: () => {
      localStorage.setItem('batch', JSON.stringify(defaultState))
      return defaultState
    },
  },
})

export const { toggleInterval, setInterval, clearIntervals, setGlobalProp } =
  timeIntervalSlice.actions
export default timeIntervalSlice.reducer

//the global day + week is added in another form request
interface TogglePayload {
  roomId: string
  interval: string[]
}

interface SetIntervalsPayload {
  roomId: string
  intervals: string[]
}

interface globalPropPayload {
  day?: string
  week?: string
}
