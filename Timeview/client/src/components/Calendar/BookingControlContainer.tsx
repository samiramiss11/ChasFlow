import React from 'react'
import SetDayTabs from './SetDayTabs'
import SetPaginatedWeekCtrl from './SetPaginatedWeekCtrl'
/**
 * 2025-01-28
 * todo: the week may be set in a absolute position in Layout section of the page
 * @returns 
 */
const BookingControlContainer = () => {
  return (
    <div className='pt-7'>
         <SetPaginatedWeekCtrl/>
        <SetDayTabs/>
       
    </div>
  )
}

export default BookingControlContainer