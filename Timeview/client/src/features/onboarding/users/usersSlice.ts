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
    id: '0',
    name: 'Erik',
    role: USER_ROLE.Manager,
  },
  {
    id: '1',
    name: 'Alice',
    role: USER_ROLE.Employee,
  },
  {
    id: ' 2',
    name: 'Bob',
    role: USER_ROLE.Employee2,
  },
  {
    id: '3',
    name: 'Charlie',
    role: USER_ROLE.Student,
  },
]

export type ComplexUserPrivilage = Staff | ReadOnly
export type SetComplexUserPrivilages = ComplexUserPrivilage[] | null

export type UserState = {
  readonly users: SetComplexUserPrivilages
  selectedUser: Staff | null | Manager
  selectedCourseCode: String | null
  //participants: ReadOnly[]
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

// const getParticipantsFromLocalStorage = (): ReadOnly[] | null => {
//   const user = localStorage.getItem('participants') || null
//   if (!user) return null
//   return JSON.parse(user) as ReadOnly[]
// }

const initialState: UserState = {
  users: getUserFromLocalStorage(),
  selectedUser: JSON.parse(localStorage.getItem('selectedUser') || 'null'),
  selectedCourseCode: JSON.parse(
    localStorage.getItem('selectedCourseCode') || 'null'
  ),
  //participants: getParticipantsFromLocalStorage() || [PRIVILAGED_USERS[2]],
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    populateKonsultants: (state, action: PayloadAction<Staff[]>) => {
      state.users = action.payload
    },
    selectedUser: (state, action: PayloadAction<Staff | string | null>) => {
      let newKonsultantId = action.payload

      if (typeof newKonsultantId === 'string' && state.users) {
        const foundKonsultant = state.users.find(
          (user) => user.name === newKonsultantId
        )

        if (foundKonsultant) {
          state.selectedUser = foundKonsultant ?? null
        } else {
          console.warn('User not found, keeping existing selectedUser')
        }
      } else if (newKonsultantId) {
        state.selectedUser = null //newKonsultantId // If payload is already a valid user object
        //mb ill look intoo it more later
      }

      // }
      localStorage.setItem('users', JSON.stringify(state))
    },
    setSelectedCourseCode: (state, action: PayloadAction<string | null>) => {
      let newCourseCode = action.payload ?? ''
      console.log(newCourseCode)
      state.selectedCourseCode = newCourseCode //.push
      // }
      localStorage.setItem('users', JSON.stringify(state))
    },
  },
})

export const { populateKonsultants, selectedUser, setSelectedCourseCode } =
  userSlice.actions

export default userSlice.reducer

import { USER_ROLE } from '@/utils/types'
