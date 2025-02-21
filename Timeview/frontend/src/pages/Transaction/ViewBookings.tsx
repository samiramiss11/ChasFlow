import React from 'react'
import TransactionCard from '@/components/nested_components/TransactionCard'
import Confirm from '../../components/transaction/Confirm'
import { ReduxStore } from '@/lib/store'
import { OwnedBatch } from '@/features/transaction/booking/setBookings'

/**
 *
 * @returns combine the onboarding and transaction objects and
 * send to backend for further processing
 */
export const clientLoader =
  (store: ReduxStore) => async (): Promise<OwnedBatch> => {
    const allbooking = store.getState().allBookingState
    return { allbooking }
  }
import OrdersList from '@/components/transaction/OrdersList'
const ViewBookings = () => {
  return (
    <div>
      <TransactionCard>
        <div className='card bg-base-200'>
          <div className='card-body'>
            <OrdersList />
          </div>

          <Confirm />
        </div>
      </TransactionCard>
    </div>
  )
}

export default ViewBookings
