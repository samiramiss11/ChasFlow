import BookingControlContainer from '@/components/Calendar/BookingControlContainer'
import Confirm from '../../components/transaction/Confirm'
import { redirect, useLoaderData, type ActionFunction } from 'react-router'
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

    console.log('clientLoader')
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
import { setTimeSlots } from '@/features/transaction/booking/checkBoxSlice'
import { fetchAvailableTimeSlots, saveBookings } from '@/services/api'
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
        const dayindex = store.getState().bookingState.day
        const dayStrings = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag']
        const dayString = dayStrings[dayindex - 1]
        const week = store.getState().bookingState.week
        console.log(dayString, week)
        // Fetch available timeslots
        try {
         // const currentDropDownState = store.getState().checkboxContextState.slots
    //        if (stoatebookingState.timeslots[roomId]?.[week]?.[dayString]) {
    // return;
  
          const timeslots = await fetchAvailableTimeSlots(week, dayString, roomId);
          store.dispatch(setTimeSlots(timeslots))
   
          return null
         // const stringifiedTimeslots = JSON.stringify(staticTimeslots)
  //         return new Response(JSON.stringify({ success: true, timeslots: stringifiedTimeslots }), {
  //   status: 200,
  //   headers: { "Content-Type": "application/json" },
  // });
        }catch (error) {
      console.error("Failed to fetch time slots:", error);
      return error as any
    }
        // return json({ timeslots })

        console.log('opeen')
      }
      if (actionType === 'save') { //uncomment Record selection in context, send in formAction
        // const room = store.getState().bookingState.rooms[roomId]

        // if (room) {
        //   // Access the selectedInterval for the found room
        //   const selectedTimeSlots = room.selectedInterval
        //   console.log(selectedTimeSlots, 'selection') // This will log the array of selected intervals for the specific room
        //   // const [startTime, endTime] = [
        //   //   selectedTimeSlots[0].split('-')[0],
        //   //   selectedTimeSlots[selectedTimeSlots.length - 1].split('-')[1],
        //   // ]
        //   // You can now perform the save action or any other logic with selectedTimeSlots
        // }
        // Save selected timeslots
        console.log('close')
        const selectedTimeslots =JSON.parse(formData.get('selectedTimeslots') as string) || [];
         const dayindex = store.getState().bookingState.day
        const dayStrings = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag']
        const dayString = dayStrings[dayindex - 1]
        const week = store.getState().bookingState.week
        const consultantID = store.getState().konsultantState.selectedUser?.id
        const courseID = store.getState().konsultantState.selectedCourseCode

         const data = {
        consultantID,
        courseID,
        selectedWeek: week,
        selectedDay: dayString,
        selectedRoom: roomId,
        selectedTimeSlots: selectedTimeslots,
        }
        console.log(data, 'data')
      
        //saveBookings(data)
        console.log(selectedTimeslots)

        // await saveSelectedTimeslotsToDB(roomId, selectedTimeslots)
        // return json({ success: true })
      }
    }

    const formType = formData.get('formType')

    if (formType === 'setDayTabs') {
      const dayFromFormData = formData.get('day') as string
      console.log('set day', dayFromFormData)

      const updatedState = store.getState().bookingState
      localStorage.setItem('batch', JSON.stringify(updatedState))
      store.dispatch(setGlobalProp({ day: dayFromFormData }))
    } else if (formType === 'week') {
      const weekFromFormData = formData.get('week') as string
      const updatedState = store.getState().bookingState
      localStorage.setItem('batch', JSON.stringify(updatedState))
      console.log('set day', weekFromFormData)

      store.dispatch(setGlobalProp({ week: weekFromFormData }))
    } else {
      const payload = {
        day: undefined,
        week: undefined,
      }
      store.dispatch(setGlobalProp(payload))
    }

    /**
     * default behavior
     */
    console.log('formType', formType)
    if (formType === 'confirm') 
          {
    const currentDay_On_WeedBooking = store.getState().bookingState
    //console.log(currentDay_On_WeedBooking)
    console.log(currentDay_On_WeedBooking)
      const currentState = store.getState().bookingState; // ✅ Store before clearing
      console.log(currentState, 'current state')
    if (Object.keys(currentState.rooms).length > 0) {
      // ✅ Ensure rooms exist
      store.dispatch(addTimeIntervalState(currentState)) // ✅ Store first
    }
      store.dispatch(clearIntervals())
      return redirect('/boka/bokningar')
      //console.log('all bookings', store.getState().allBookingState)
      }
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
  //const items = JSON.parse(localStorage.getItem('items'))

  //can scroll section into view with id
  return (
    <section id='section'>
      <BookingControlContainer />

      <GroupedBookings contextWithStaticData={contextWithStaticData} />
      <div className='p-4 flex justify-center'>
        <div className=' border-t  border-chasBlue'>
          <OnlineBooking />
        </div>
      </div>
      <div className='px-20'>
        <Form method='POST'>
            <input
        type='hidden'
        name='formType'
        value='confirm'
      />
          <Confirm />
        </Form>
      </div>
    </section>
  )
}

export default Bookings
