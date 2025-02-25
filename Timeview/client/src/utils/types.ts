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
  Employee = 'teacher',
  Employee2 = 'Coordinators',
  Manager = 'admin',
  Student = 'student',
}

export type groupedAcordion = {
  _id: string
  items: AccordionWithControll[]
}

export type AccordionWithControll = {
  categori: string
  text: TableEntries[]
}

export type Accordion = {
  accordion: TableEntries
}

export type TableEntries = {
  Datum: Date
  Tid: string
  prograomkod: string
  rum: string
  sammanlagdatimmar: string
}
