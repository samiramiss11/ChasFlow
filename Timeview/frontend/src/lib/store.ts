import { configureStore } from '@reduxjs/toolkit'

import cartReducer from '../features/transaction/cart/cartSlice' //not necessary //mb remove soon
import roomWithouTimeConsiderationReducer from '../features/transaction/booking/booking'
import setOfBookingsForDiffDaysreducer from '../features/transaction/booking/setBookings'

import checkBoxContextreducer from '../features/transaction/booking/checkBoxSlice'
//we store the grouped data in the loader context and ignore it afterwards //no need to set up json managment
//import roomReducer from '../features/transaction/rooms/roomSlice'

import userReducer from '../features/onboarding/user/userSlice'
import usersReducer from '../features/onboarding/users/usersSlice'

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
    konsultantState: usersReducer, //note the extra s
    checkboxContextState: checkBoxContextreducer,

    bookingState: roomWithouTimeConsiderationReducer,
    allBookingState: setOfBookingsForDiffDaysreducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type ReduxStore = {
  getState: () => RootState
  dispatch: AppDispatch
}
