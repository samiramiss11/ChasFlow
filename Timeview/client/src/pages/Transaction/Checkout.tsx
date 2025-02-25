import React from 'react'
import TransactionCard from '../../components/transaction/TransactionCard'
import Confirm from '../../components/transaction/Confirm'
import { ReduxStore } from '@/lib/store'
import { useLoaderData } from 'react-router'
import { OwnedBatch } from '@/features/transaction/booking/setBookings'

export const clientAction = () => async () => {
  return null
}

export const clientLoader =
  (store: ReduxStore) => async (): Promise<OwnedBatch> => {
    const relatedUser = store.getState().konsultantState
    const allbooking = store.getState().allBookingState

    // const fixedRelatedUser = {
    //   ...relatedUser,
    //   users: {
    //     ...relatedUser.users,
    //     selectedUser: relatedUser.users.selectedUser, // Ensure this is only set once
    //     participants: relatedUser.users.participants, // Ensure this is only set once
    //   },
    // }

    return { relatedUser: relatedUser, allbooking }
  }

const Checkout = () => {
  const { relatedUser, allbooking } = useLoaderData() as OwnedBatch
  const consernedUserjsonString = JSON.stringify({ relatedUser }, null, 2) // Beautified JSON
  const transactionFromUserjsonString = JSON.stringify({ allbooking }, null, 2) // Beautified JSON

  return (
    <div>
      Bokning Klar
      <TransactionCard>
        <Confirm />
      </TransactionCard>
      <div>
        <h3>Here is the JSON Data: konsultants</h3>
        <pre>{consernedUserjsonString}</pre>{' '}
        {/* Display JSON in a readable format */}
        <h3>Here is the JSON Data: transaction</h3>
        <pre>{transactionFromUserjsonString}</pre>{' '}
      </div>
    </div>
  )
}

export default Checkout
