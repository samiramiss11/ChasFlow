import BookingControlContainer from '@/components/Calendar/BookingControlContainer'
import Confirm from '../../components/transaction/Confirm'
import { useLoaderData, type ActionFunction } from 'react-router'
import GroupedBookings from '@/components/transaction/GroupedBookings'
/**
 *
 * @returns display 6 rooms
 */
import {
  ROOMS,
  type GroupedRoomResponse,
} from '@/features/transaction/rooms/roomSlice'
export const clientLoader =
  (store: ReduxStore) => async (): Promise<GroupedRoomResponse> => {
    return { contextWithStaticData: ROOMS }
  }

/**
 * checkbox for multiple id.
 * @returns
 */
import { ReduxStore } from '@/lib/store'
import {
  setGlobalProp,
  clearIntervals,
} from '@/features/transaction/booking/booking'
import { addTimeIntervalState } from '@/features/transaction/booking/setBookings'
export const clientAction =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<Response | null> => {
    //const affectGlobalProps = store.getState().bookingState
    const formData = await request.formData()
    // const data = Object.fromEntries(formData)
    // console.log(data)
    const actionType = formData.get('actionType') as string
    const roomId = formData.get('roomId') as string
    if (roomId) {
      if (actionType === 'fetch') {
        // Fetch available timeslots
        // const timeslots = await fetchAvailableTimeSlots(roomId)
        // return json({ timeslots })
        console.log('opeen')
      }
      if (actionType === 'save') {
        // Save selected timeslots
        console.log('close')
        const selectedTimeslots = formData.getAll(
          'selectedTimeslots[]'
        ) as string[]
        // await saveSelectedTimeslotsToDB(roomId, selectedTimeslots)
        // return json({ success: true })
      }
    }

    const formType = formData.get('formType')

    if (formType === 'setDayTabs') {
      const dayFromFormData = formData.get('day') as string
      store.dispatch(setGlobalProp({ day: dayFromFormData }))
    } else if (formType === 'week') {
      const weekFromFormData = formData.get('week') as string
      store.dispatch(setGlobalProp({ week: weekFromFormData }))
    } else {
      const payload = {
        day: undefined,
        week: undefined,
      }
      store.dispatch(setGlobalProp(payload))
    }
    const currentDay_On_WeedBooking = store.getState().bookingState
    //console.log(currentDay_On_WeedBooking)

    const currentState = store.getState().bookingState // ✅ Store before clearing
    if (Object.keys(currentState.rooms).length > 0) {
      // ✅ Ensure rooms exist
      store.dispatch(addTimeIntervalState(currentState)) // ✅ Store first
    }
    store.dispatch(clearIntervals())
    //console.log('all bookings', store.getState().allBookingState)
    return null
  }
import OnlineBooking from '@/components/transaction/OnlineBooking'
import { Form } from 'react-router-dom'
/**
 * on this page popovers are displayed to construct objects from 2 form requests.
 * one type of formRequest come from either GroupedBookings or OnlineBooking that map the room id to toggle checkbox values
 * @returns
 */
const Bookings = () => {
  const { contextWithStaticData } = useLoaderData() as GroupedRoomResponse
  // console.log(contextWithStaticData)

  return (
    <div>
      <BookingControlContainer />

      <GroupedBookings contextWithStaticData={contextWithStaticData} />
      <div className='p-4 flex justify-center'>
        <div className=' border-t  border-chasBlue'>
          <OnlineBooking />
        </div>
      </div>
      <div className='px-20'>
        <Form method='POST'>
          <Confirm />
        </Form>
      </div>
    </div>
  )
}

export default Bookings
