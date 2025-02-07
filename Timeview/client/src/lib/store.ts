import { configureStore } from '@reduxjs/toolkit'

import cartReducer from '../features/transaction/cart/cartSlice'
import userReducer from '../features/onboarding/user/userSlice'
import usersReducer from '../features/onboarding/users/usersSlice'

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
    konsultantState: usersReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type ReduxStore = {
  getState: () => RootState
  dispatch: AppDispatch
}
