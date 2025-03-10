import React, { useEffect } from 'react'
import { redirect, useLoaderData, useNavigate, useLocation } from 'react-router'
import { ReduxStore } from '@/lib/store'
import { loginUser } from '@/features/onboarding/user/userSlice'

import {
  populateKonsultants,
  selectedUser,
} from '@/features/onboarding/users/usersSlice'
import { USER } from '@/features/onboarding/user/userSlice'
import { PRIVILAGED_USERS } from '@/features/onboarding/users/usersSlice'
/**
 *
 * @param store create a default user
 * @returns
 */
import { USER_ROLE } from '@/utils/types'
export const clientLoader =
  (store: ReduxStore, queryClient: any) => async () => {
    const randomIndex = false
      ? Math.floor(Math.random() * PRIVILAGED_USERS.length)
      : 0
    const randomUser = PRIVILAGED_USERS[randomIndex]

   // store.dispatch(loginUser({ user: randomUser, jwt: '...', token: '...' }))
   // store.dispatch(populateKonsultants(PRIVILAGED_USERS))
   // store.dispatch(selectedUser(PRIVILAGED_USERS[1])) //employe

    const user = store.getState().userState.user
    // Perform any meta or auth check

    if (!user) {
      return redirect('/login') // Redirect if user is not found
    }
console.log('redirect user')
    switch (user.role) {
      case USER_ROLE.Employee:
        console.log(USER_ROLE.Employee)

        return redirect(
          `/${JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP1}/${JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP1}`
        )
      case USER_ROLE.Manager:
        console.log(USER_ROLE.Manager)

        return redirect(
          `/${JOURNY_LINSK_CONSTANTS.ADMIN_STEP0}/${JOURNY_LINSK_CONSTANTS.ADMIN_STEP2}`
        )
      case USER_ROLE.Employee2:
        console.log(USER_ROLE.Employee2)

        return redirect(
          `/${JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1}/${JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1}`
        )
      case USER_ROLE.Student:
        console.log(USER_ROLE.Student)

        return redirect(
          `/${JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1}/${JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP1}`
        )
      default:
        console.log('default')
        return redirect(
          `/${JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP1}/${JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP1}`
        )
    }
  }

/**
 * can redirect on server if we upgrade to react router v7 in clientLoader
 * currently the component is bundled and sent to client before redirect
 * @returns
 */
import { JOURNY_LINSK_CONSTANTS } from '../../utils/links'
const Landing = () => {
  const { meta } = useLoaderData() as any
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // Perform navigation in useEffect to avoid rendering issues
    navigate(
      `/${JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1}/${JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP2}`,
      {
        state: { from: location.pathname }, // Pass serializable state
        replace: true,
      }
    )
  }, [navigate, location.pathname])

  return null // Prevent rendering anything since we're redirecting
}

export default Landing
