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
export const clientLoader = (): GroupedRoomResponse => {
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
    console.log(currentDay_On_WeedBooking)

    const currentState = store.getState().bookingState // ✅ Store before clearing
    if (Object.keys(currentState.rooms).length > 0) {
      // ✅ Ensure rooms exist
      store.dispatch(addTimeIntervalState(currentState)) // ✅ Store first
    }
    store.dispatch(clearIntervals())
    console.log('all bookings', store.getState().allBookingState)
    return null
  }

const Bookings = () => {
  const { contextWithStaticData } = useLoaderData() as GroupedRoomResponse
  console.log(contextWithStaticData)
  const toDo = {
    bookingArray: [
      {
        day: '',
        time: { start: 'time', end: 'time' },
        room: 'room',
        konsultant: 'name',
      },
    ],
    antalTimmar: 8,
    konsult: 'konsult-name',
  }
  return (
    <div>
      <BookingControlContainer />

      <GroupedBookings contextWithStaticData={contextWithStaticData} />
      <div className='flex flex-end'>
        <button>Tillbaka</button>
        <p>
          Du önska Boka {toDo.antalTimmar} för {toDo.konsult}
        </p>
        <button>Bekräfta</button>
        <Confirm />
      </div>
    </div>
  )
}

export default Bookings
