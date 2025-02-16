import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { type BookingItem, type BookingState } from '@/utils/types'
const defaultState: BookingState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
}

const getCartFromLocalStorage = (): BookingState => {
  const cart = localStorage.getItem('cart')
  return cart ? JSON.parse(cart) : defaultState
}
const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage,
  reducers: {
    addItem: (state, action: PayloadAction<BookingItem>) => {
      //const { product } = action.payload
      const newCartItem = action.payload
      const item = state.cartItems.find((i) => i.cartID === newCartItem.cartID)
      if (item) {
        item.amount += newCartItem.amount
      } else {
        state.cartItems.push(newCartItem)
      }
      state.numItemsInCart += newCartItem.amount
      state.cartTotal += Number(newCartItem.price) * newCartItem.amount
      cartSlice.caseReducers.calculateTotals(state)
      localStorage.setItem('cart', JSON.stringify(state))
      toast.success('Item added to cart')
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal
      state.orderTotal = state.cartTotal + state.shipping + state.tax
      localStorage.setItem('cart', JSON.stringify(state))
    },
    clearCart: (state) => {
      localStorage.setItem('cart', JSON.stringify(defaultState))
      return defaultState
    },

    removeItem: (state, action: PayloadAction<string>) => {
      //const { cartID } = action.payload
      const cartID = action.payload

      const product = state.cartItems.find((i) => i.cartID === cartID)
      if (!product) return
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID)

      state.numItemsInCart -= product.amount
      state.cartTotal -= Number(product.price) * product.amount
      cartSlice.caseReducers.calculateTotals(state)
      toast.error('Item removed from cart')
    },
    editItem: (
      state,
      action: PayloadAction<{ cartID: string; amount: number }>
    ) => {
      const { cartID, amount } = action.payload
      const item = state.cartItems.find((i) => i.cartID === cartID)
      if (!item) return
      state.numItemsInCart += amount - item.amount
      state.cartTotal += Number(item.price) * (amount - item.amount)
      item.amount = amount
      cartSlice.caseReducers.calculateTotals(state)
      toast.success('Cart updated')
    },
  },
})

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions

export default cartSlice.reducer
