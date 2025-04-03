import React,{useState,useEffect} from 'react'
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
  const optimistic = fetcher.formData
  const isNotIdle = fetcher.state !== 'idle'
  console.log('bookof',optimistic,isNotIdle)
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    fetcher.submit(e.target as HTMLFormElement)
    // window.location.reload()
  }

  const [delayedOptimistic, setDelayedOptimistic] = useState<FormData | null>(null);
  useEffect(() => {
    if (optimistic) {
      console.log('OPTIMISTIC'  ,optimistic,delayedOptimistic)
      const timer = setTimeout(() => {
        setDelayedOptimistic(optimistic);
      }, 2000); // Delay for 2 seconds

      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [optimistic]);//just practicing code..
  return (
    <div className='pt-7'>
      
      <fetcher.Form
        method='POST'
        onSubmit={handleSubmit}
        className='mb-4'
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
