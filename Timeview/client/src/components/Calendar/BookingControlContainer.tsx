import React from 'react'
import SetDayTabs from './SetDayTabs'
import SetPaginatedWeekCtrl from './SetPaginatedWeekCtrl'
import { useFetcher, Form } from 'react-router-dom'
/**
 * 2025-01-28
 * todo: the week may be set in a absolute position in Layout section of the page
 *
 * - lazy refresh to rerender checkbox context on unique day, week combination
 * @returns
 */
import { FormEvent } from 'react'
const BookingControlContainer = () => {
  let fetcher = useFetcher()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    fetcher.submit(e.target as HTMLFormElement)
    // window.location.reload()
  }
  return (
    <div className='pt-7'>
      <fetcher.Form
        method='POST'
        onSubmit={handleSubmit}
      >
        <SetPaginatedWeekCtrl />
      </fetcher.Form>
      <fetcher.Form
        method='POST'
        onSubmit={handleSubmit}
      >
        <SetDayTabs />
      </fetcher.Form>
    </div>
  )
}

export default BookingControlContainer
