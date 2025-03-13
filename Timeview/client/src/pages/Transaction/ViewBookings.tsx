import React from 'react'
import TransactionCard from '../../components/transaction/TransactionCard'
import Confirm from '../../components/transaction/Confirm'
import { ReduxStore } from '@/lib/store'
import { OwnedBatch } from '@/features/transaction/booking/setBookings'
import { addTimeIntervalState } from '@/features/transaction/booking/setBookings'
import { clearIntervals } from '@/features/transaction/booking/booking'
/**
 *
 * @returns combine the onboarding and transaction objects and
 * send to backend for further processing
 */

export const clientLoader =
  (store: ReduxStore) => async (): Promise<OwnedBatch> => {
    const currentDay_On_WeedBooking = store.getState().bookingState
    console.log(currentDay_On_WeedBooking)

    const currentState = store.getState().bookingState // ✅ Store before clearing
    if (Object.keys(currentState.rooms).length > 0) {
      // ✅ Ensure rooms exist
      store.dispatch(addTimeIntervalState(currentState)) // ✅ Store first
    }
    store.dispatch(clearIntervals())
    const allbooking = store.getState().allBookingState
    const relatedUser = store.getState().konsultantState

    return { allbooking, relatedUser: relatedUser }
  }
import OrdersList from '@/components/transaction/OrdersList'
import { useLoaderData } from 'react-router-dom'
import CheckoutDialog from '@/components/transaction/CheckoutDialog';
/**
 * IS centered in a TransactionCard with a list of:
 * 1. items
 * 2. display the selected user with totalTime booked for the current session
 * @returns 
 */
const ViewBookings = () => {
  const { allbooking, relatedUser } = useLoaderData() as OwnedBatch
  return (
    <div>
      <TransactionCard>
        <div className=' bg-slate-200 py-12 px-12 flex flex-col justify-center'>
          <div className='max-width-[535px] mx-auto flex flex-col justify-stretch'>
            <OrdersList />
            <div className='p-8'>
              <p>
                Du önska boka <b>{`${allbooking.timeInTotal || 0} timmar`}</b>{' '}
                för <b>{`${relatedUser?.selectedUser?.name}`}</b>
              </p>
            </div>
          </div>

          <div className=''>
            <Confirm > <div><CheckoutDialog /></div></Confirm>
          </div>
        </div>
      </TransactionCard>
    </div>
  )
}

export default ViewBookings
