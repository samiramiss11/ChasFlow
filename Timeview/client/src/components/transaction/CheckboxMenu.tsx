import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { type StatiCheckbox, timeSlots } from '@/utils/transaction/checkbox'
import { FaChevronDown } from 'react-icons/fa'
import { useFetcher } from 'react-router-dom'
import { useState } from 'react'
import { Checkbox } from '../ui/checkbox'
import { useEffect } from 'react'
/**
 * Default is when everything is default false. if we need to store context as we
 * change between consultants. mb we need  {defaultValue}: {defaultValue:StatiCheckbox[]}
 *
 * i dunno if it is bad to have dispatch in the component or if one later want to move all store in action and loader, but
 * @returns
 */
import { useBooking } from '@/context/BookingContext'
import { useAppDispatch } from '@/lib/hooks'
import { setInterval } from '@/features/transaction/booking/booking'
import { JOURNY_LINSK_CONSTANTS } from '@/utils/links'
const CheckboxMenu = ({ roomId }: { roomId: string }) => {
  const [selectedTimeslots, setSelectedTimeslots] =
    useState<StatiCheckbox[]>(timeSlots)
  const [open, setOpen] = useState<boolean>(false)

  const dispatch = useAppDispatch()
  const fetcher = useFetcher()

  const handleChange = (checked: boolean, staticCheckbox: StatiCheckbox) => {
    setSelectedTimeslots((prev) =>
      prev.map((slot) =>
        slot.name === staticCheckbox.name
          ? { ...slot, selected: !slot.selected }
          : slot
      )
    )
  }
  const handlePopupToggle = (isOpen: boolean) => {
    setOpen(isOpen)
  }

  useEffect(() => {
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
      const onlyCheckedTimeIntervals = selectedTimeslots
        .filter((slot) => slot.selected)
        .map((slot) => slot.name)

      dispatch(setInterval({ roomId, interval: onlyCheckedTimeIntervals }))

      fetcher.submit(
        {
          actionType: 'save',
          roomId,
          selectedTimeslots: onlyCheckedTimeIntervals,
        },
        { method: 'POST' } //, action: '/boka'
      )
    }
  }, [open])

  return (
    <DropdownMenu
      modal={false}
      open={open}
      onOpenChange={handlePopupToggle}>
      {/**dont need callback ()=> */}
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
        <fetcher.Form method='post'>
          {selectedTimeslots.map((timeslot) => (
            <DropdownMenuItem
              key={timeslot.name}
              onSelect={(e) => e.preventDefault()}>
              <label
                htmlFor={timeslot.name}
                className='flex items-center gap-2'>
                <Checkbox
                  id={timeslot.name}
                  checked={timeslot.selected}
                  onCheckedChange={(checked) =>
                    handleChange(Boolean(checked), timeslot)
                  }
                />
                {timeslot.name}
              </label>
            </DropdownMenuItem>
          ))}
        </fetcher.Form>
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
