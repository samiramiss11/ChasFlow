export type BookingItem = {
  cartID: string
  productID: number
  image: string
  title: string
  price: string
  amount: number
  productColor: string
  company: string
}



export type BookingState = {
  cartItems: BookingItem[]
  numItemsInCart: number
  cartTotal: number
  shipping: number
  tax: number
  orderTotal: number
}

export enum USER_ROLE {
  Employee = "Employee",
  Manager = "Manager",
  Student = 'student'
}