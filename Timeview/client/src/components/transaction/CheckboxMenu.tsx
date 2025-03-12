import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { FaChevronDown } from 'react-icons/fa'
import React, { useState, useEffect,useRef } from 'react'

/**
 * Default is when everything is default false. if we need to store context as we
 * change between consultants. mb we need  {defaultValue}: {defaultValue:StatiCheckbox[]}
 *
 * i dunno if it is bad to have dispatch in the component or if one later want to move all store in action and loader, but
 * @returns
 */

import { useAppDispatch } from '@/lib/hooks'
import { setInterval } from '@/features/transaction/booking/booking'
import { JOURNY_LINSK_CONSTANTS } from '@/utils/links'
import { useFetcher } from 'react-router-dom'
import CheckboxWaterFall from './CheckboxWaterFall'
const CheckboxMenu = ({ roomId }: { roomId: string }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [selectedTimeSlots, setSelectedTimeSlots] = useState<
    Record<string, { timeSlotID: string; startTime: string; endTime: string }[]>
  >({})
 // console.log('selectedTimes', selectedTimeSlots)
  //const dispatch = useAppDispatch()
  const fetcher = useFetcher()
  //const isFirstRender = useRef(true);
     const hasOpened = useRef(false);

  const handlePopupToggle = (isOpen: boolean) => {
    setOpen(isOpen)
  }

  useEffect(() => {
    // if (isFirstRender.current) {
    //   isFirstRender.current = false; // Skip first render
    //   return;
    // }
     if (!hasOpened.current && !open) {
    return; // Skip the first effect run when component mounts
  }
  
  hasOpened.current = true; 
    if (open) {
      // Fetch available timeslots when opening
      fetcher.submit(
        { actionType: 'fetch', roomId },
        {
          method: 'POST',
        }
      )
    } else {
      // Save selected timeslots when closing
      // const onlyCheckedTimeIntervals = selectedTimeslots
      //   .filter((slot) => slot.selected)
      //   .map((slot) => slot.name)

      const timeSlotsArray = Object.values(selectedTimeSlots).flat() || []; //each component can noly hold a single record
      console.log(timeSlotsArray, 'sdf')
      const bookingIds = timeSlotsArray.map((slot) => slot.timeSlotID)
      
      
      // dispatch(setInterval({ roomId, interval: onlyCheckedTimeIntervals }))

      fetcher.submit(
        {
          actionType: 'save',
          roomId,
          selectedTimeslots: JSON.stringify(bookingIds),
        },
        { method: 'POST' } //, action: '/boka'
      )
    }
  }, [open])

  return (
    <DropdownMenu
      modal={false}
      open={open}
      onOpenChange={setOpen}>
      <DropdownMenuTrigger
        asChild
        className=' rounded-full select-none  px-4 text-2xl bg-white text-chasBlue border-2 border-chasBlue hover:bg-chasBlue hover:text-white focus-visible:outline-none data-[state=open]:bg-chasBlue data-[state=open]:text-white'>
        <Button className='flex gap-2 text-base'>
          {' '}
          <span>Se lediga tider</span>
          <FaChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='mt-1 overflow-hidden rounded bg-white/75 p-2 text-left shadow backdrop-blur hover:bg-gray-200/50'>
        <CheckboxWaterFall
          setSelectedTimeSlots={setSelectedTimeSlots}
          selectedTimeSlots={selectedTimeSlots}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default CheckboxMenu

// const handleChange = (checked: boolean, staticCheckbox: StatiCheckbox) => {
//   setSelectedTimeslots((prev) => {
//     const updatedTimeslots = prev.map((slot) =>
//       slot.name === staticCheckbox.name
//         ? { ...slot, selected: !slot.selected }
//         : slot
//     )

//     // Extract only selected timeslots
//     const onlyCheckedTimeIntervals = updatedTimeslots
//       .filter((slot) => slot.selected)
//       .map((slot) => slot.name)

//     // Dispatch updated intervals
//     dispatch(setInterval({ roomId, interval: onlyCheckedTimeIntervals }))

//     return updatedTimeslots // ✅ Ensure local state is updated correctly
//   })
// }
