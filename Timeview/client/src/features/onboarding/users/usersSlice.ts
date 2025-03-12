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

export type setCourseCodes = {
  courseID: number
  courseCode: string
}[]

export type UserState = {
  readonly users: SetComplexUserPrivilages
  readonly courseCodes:setCourseCodes
  selectedUser: Staff | null | Manager
  selectedCourseCode: number | null
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

const getCourseCodesFromLocalStorage = (): setCourseCodes => {
  const codes = localStorage.getItem('courseCodes');
  if (!codes) return [];
  try {
    return JSON.parse(codes) as setCourseCodes;
  } catch (error) {
    console.error('Error parsing course codes from local storage:', error);
    return [];
  }
};

const initialState: UserState = {
  users: getUserFromLocalStorage(),
  courseCodes:getCourseCodesFromLocalStorage(),
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
     populateCourseCodes: (state, action: PayloadAction<setCourseCodes>) => {
       state.courseCodes = action.payload
       localStorage.setItem('courseCodes', JSON.stringify(state.courseCodes))
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
      localStorage.setItem('selectedUser', JSON.stringify(state.selectedUser))
    },
    setSelectedCourseCode: (state, action: PayloadAction<number | null>) => {
      let newCourseCode = action.payload ?? null
      console.log(newCourseCode)
      state.selectedCourseCode = newCourseCode //.push
      // }
 localStorage.setItem(
        'selectedCourseCode',
        JSON.stringify(state.selectedCourseCode)
      )    },
  },
})

export const { populateKonsultants, selectedUser, setSelectedCourseCode,populateCourseCodes } =
  userSlice.actions

export default userSlice.reducer

import { USER_ROLE } from '@/utils/types'
