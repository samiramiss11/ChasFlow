import React, { useState, useEffect } from 'react'
import { Checkbox } from '../ui/checkbox'
import { useFetcher } from 'react-router-dom'
import { useBooking } from '@/context/BookingContext'
import { type StatiCheckbox, timeSlots } from '@/utils/transaction/checkbox'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { useAppSelector } from '@/lib/hooks'
import { RootState } from '@/lib/store'
const CheckboxWaterFall = ({
  setSelectedTimeSlots,
}: {
  setSelectedTimeSlots: (
    slots: Record<
      string,
      { timeSlotID: string; startTime: string; endTime: string }[]
    >
  ) => void
}) => {
  const checkboxes = useAppSelector(
    (state: RootState) => state.checkboxContextState.slots
  )
  console.log(checkboxes)
  const [selectedTimeslots, setLocalSelectedTimeslots] =
    useState<StatiCheckbox[]>(timeSlots)
  const fetcher = useFetcher()
  const handleChange = (checked: boolean, staticCheckbox: StatiCheckbox) => {
    setLocalSelectedTimeslots((prev) =>
      prev.map((slot) =>
        slot.name === staticCheckbox.name
          ? { ...slot, selected: !slot.selected }
          : slot
      )
    )
  }
  return (
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
  )
}

export default CheckboxWaterFall
