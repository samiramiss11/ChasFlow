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
import { ActionFunction, useLoaderData } from 'react-router-dom'
import CheckoutDialog from '@/components/transaction/CheckoutDialog';
import { Form } from 'react-router-dom'
/**
 * IS centered in a TransactionCard with a list of:
 * 1. items
 * 2. display the selected user with totalTime booked for the current session
 * @returns 
 */

import { saveBookings } from '@/services/api'
export const clientAction =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<Response | null> => {
    const formData = await request.formData()
    const requestData = Object.fromEntries(formData)
    console.log(requestData)

    const allbooking = store.getState().allBookingState
    const dayStrings = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag']

    try {
      allbooking.sets.forEach((set) => {
        console.log(`Day: ${set.day}, Week: ${set.week}`)

        Object.entries(set.rooms).forEach(([roomId, roomData]) => {
          console.log(`  Room ${roomId}:`)

          // Extract selected time slots
//           const bookingIds = roomData.selectedInterval.map((interval) => {
//   console.log(interval.selectedTimeSlots); // Debugging
//   return interval.selectedTimeSlots; // Ensure return
          // });
          const nrOfId = roomData.selectedInterval.map((interval) => (interval.selectedTimeSlots)).length
//           console.log(nrOfId, 'nrOfId')
//           const bookingIds = roomData.selectedInterval.flatMap(interval => 
//   interval.selectedTimeSlots.split(', ').map(Number) // Split & Convert to Numbers
// );
//           console.log(bookingIds, 'bookingIds')
          const bookingIds = [ ...new Set(roomData.selectedInterval.flatMap(interval => 
      interval.selectedTimeSlots.split(', ').map(String) // Convert to string
    )
  )
];

          const dayString = dayStrings[set.day - 1]
          const week = store.getState().bookingState.week
          const consultantID = store.getState().konsultantState.selectedUser?.id
          const courseID = store.getState().konsultantState.selectedCourseCode

          // Prepare data for API call
          const bookingData = {
            consultantID,
            courseID,
            selectedWeek: set.week,
            selectedDay: dayString,
            selectedRoom: roomId,
            selectedTimeSlots: bookingIds, // Use array instead of undefined variable
          }

          console.log(bookingData, 'data')

          // Send booking to API
          saveBookings(bookingData)
        })
      })
    } catch (error) {
      console.error('Error in clientAction:', error)
    }

    return null
  }
  

const ViewBookings = () => {
  const { allbooking, relatedUser } = useLoaderData() as OwnedBatch


      // window.location.reload()

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
            <Confirm >   <Form
                    method='POST'
                   
                  ><CheckoutDialog /></Form></Confirm>
          </div>
        </div>
      </TransactionCard>
    </div>
  )
}

export default ViewBookings
