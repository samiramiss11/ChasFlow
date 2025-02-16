import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

export type UserRole = 'teacher' | 'sales' | 'consultant' | string

type ReadOnly = { id: string; name: string; role: UserRole }
type Employee = { id: string; name: string; role: UserRole }
export type Manager = {
  id: string
  name: string
  employees: Employee[]
  role: UserRole
}

type Staff = Employee | Manager

export const PRIVILAGED_USERS = [
  {
    id: '1',
    name: 'Alice',
    role: USER_ROLE.Employee,
  },
  {
    id: ' 2',
    name: 'Bob',
    role: USER_ROLE.Employee,
  },
  {
    id: '3',
    name: 'Charlie',
    role: USER_ROLE.Student,
    employees: [
      { id: ' 1', name: 'Alice', role: USER_ROLE.Employee },
      { id: '2', name: 'Bob', role: USER_ROLE.Employee },
    ],
  },
]

export type ComplexUserPrivilage = Staff | ReadOnly
export type SetComplexUserPrivilages = ComplexUserPrivilage[] | null

type UserState = {
  readonly users: SetComplexUserPrivilages
  selectedUser: Staff
  participants: ReadOnly[]
}

/**
 * assume th
 * @returns
 */
const getUserFromLocalStorage = (): SetComplexUserPrivilages => {
  const user = localStorage.getItem('users') || null
  if (!user) return null
  return JSON.parse(user) as SetComplexUserPrivilages
}

const getParticipantsFromLocalStorage = (): ReadOnly[] | null => {
  const user = localStorage.getItem('participants') || null
  if (!user) return null
  return JSON.parse(user) as ReadOnly[]
}

const initialState: UserState = {
  users: getUserFromLocalStorage(),
  selectedUser: PRIVILAGED_USERS[1],
  participants: getParticipantsFromLocalStorage() || [PRIVILAGED_USERS[2]],
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    populateKonsultants: (state, action: PayloadAction<Staff[]>) => {
      state.users = action.payload
    },
    selectedUser: (state, action: PayloadAction<Staff>) => {
      let newKonsultant = action.payload
      state.selectedUser = newKonsultant //.push
      // }
      localStorage.setItem('users', JSON.stringify(state))
    },
  },
})

export const { populateKonsultants, selectedUser } = userSlice.actions

export default userSlice.reducer

import { USER_ROLE } from '@/utils/types'
