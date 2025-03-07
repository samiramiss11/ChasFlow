import React, { useState, useEffect } from 'react'
import { Checkbox } from '../ui/checkbox'
import { useFetcher } from 'react-router-dom'
import { useBooking } from '@/context/BookingContext'
//import { type StatiCheckbox, timeSlots } from '@/utils/transaction/checkbox'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { useAppSelector } from '@/lib/hooks'
import { RootState } from '@/lib/store'
import { timeSlots } from '@/utils/transaction/checkbox'
const CheckboxWaterFall = ({
  selectedTimeSlots,
  setSelectedTimeSlots,
}: {
  selectedTimeSlots: Record<
    string,
    { timeSlotID: string; startTime: string; endTime: string }[]
  >
  setSelectedTimeSlots: (
    slots: Record<
      string,
      { timeSlotID: string; startTime: string; endTime: string }[]
    >
  ) => void
}) => {
  const checkboxes = useAppSelector(
    (state: RootState) => state.checkboxContextState.slots || []
  )

  const fetcher = useFetcher()
  //   const [selectedTimeslots, setLocalSelectedTimeslots] =
  //     useState<StatiCheckbox[]>(timeSlots)
  //   const handleChange = (checked: boolean, staticCheckbox: StatiCheckbox) => {
  //     setLocalSelectedTimeslots((prev) =>
  //       prev.map((slot) =>
  //         slot.name === staticCheckbox.name
  //           ? { ...slot, selected: !slot.selected }
  //           : slot
  //       )
  //     )
  //   }

  const handleTimeSlotSelect = ({
    roomID,
    slot,
    isChecked,
  }: {
    roomID: string
    slot: { timeSlotID: string; startTime: string; endTime: string }
    isChecked: boolean
  }) => {
    setSelectedTimeSlots((prevSelections) => {
      const updatedRooms = { ...prevSelections }

      // Ensure at least one slot is selected per room
      const currentSlots = updatedRooms[roomID] || []

      if (isChecked) {
        // Add the slot if checked
        updatedRooms[roomID] = [...currentSlots, slot]
      } else {
        if (currentSlots.length === 1) {
          updatedRooms[roomID] = [] // Clear all slots
        }
        // If this is the last slot, do not uncheck it (ensure at least one slot is selected)
        else if (currentSlots.length > 1) {
          const filteredSlots = currentSlots.filter(
            (s) => s.timeSlotID !== slot.timeSlotID
          )
          updatedRooms[roomID] = filteredSlots
        }
      }

      return updatedRooms
    })
  }

  return (
    <fetcher.Form method='post'>
      {checkboxes.map((timeslot) => {
        const isChecked =
          selectedTimeSlots[timeslot.roomID]?.some(
            (slot) => slot.timeSlotID === String(timeslot.timeSlotID)
          ) || false

        return (
          <DropdownMenuItem
            key={timeslot.timeSlotID}
            onSelect={(e) => e.preventDefault()}>
            <label
              htmlFor={`timeslot-${timeslot.timeSlotID}`}
              className='flex items-center gap-2'>
              <Checkbox
                id={`timeslot-${timeslot.timeSlotID}`}
                checked={
                  isChecked || false
                  //selectedTimeSlots?.has(timeslot.timeSlotID) || false
                }
                onCheckedChange={(checked) =>
                  // handleChange(Boolean(checked), timeslot)
                  handleTimeSlotSelect({
                    roomID: String(timeslot.roomID),
                    slot: {
                      timeSlotID: String(timeslot.timeSlotID), // Convert number to string
                      startTime: timeslot.startTime,
                      endTime: timeslot.endTime,
                    },
                    isChecked: Boolean(checked),
                  })
                }
              />
              {timeslot.startTime} - {timeslot.endTime}
            </label>
          </DropdownMenuItem>
        )
      })}
    </fetcher.Form>
  )
}

export default CheckboxWaterFall
