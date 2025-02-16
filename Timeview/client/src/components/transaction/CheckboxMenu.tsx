import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { type StatiCheckbox, timeSlots } from '@/utils/transaction/checkbox'
import { FaChevronDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Pencil } from 'lucide-react'
import { useState } from 'react'
import { Checkbox } from '../ui/checkbox'
/**
 * Default is when everything is default false. if we need to store context as we
 * change between consultants. mb we need  {defaultValue}: {defaultValue:StatiCheckbox[]}
 *
 * i dunno if it is bad to have dispatch in the component or if one later want to move all store in action and loader, but
 * @returns
 */
import { useAppDispatch } from '@/lib/hooks'
import { setInterval } from '@/features/transaction/booking/booking'
const CheckboxMenu = ({ roomId }: { roomId: string }) => {
  const [selectedTimeslots, setSelectedTimeslots] =
    useState<StatiCheckbox[]>(timeSlots)
  const [open, setOpen] = useState<boolean>(false)

  const dispatch = useAppDispatch()

  const handleChange = (checked: boolean, staticCheckbox: StatiCheckbox) => {
    setSelectedTimeslots((prev) => {
      const updatedTimeslots = prev.map((slot) =>
        slot.name === staticCheckbox.name
          ? { ...slot, selected: !slot.selected }
          : slot
      )

      // Extract only selected timeslots
      const onlyCheckedTimeIntervals = updatedTimeslots
        .filter((slot) => slot.selected)
        .map((slot) => slot.name)

      // Dispatch updated intervals
      dispatch(setInterval({ roomId, interval: onlyCheckedTimeIntervals }))

      return updatedTimeslots // ✅ Ensure local state is updated correctly
    })
  }

  return (
    <DropdownMenu
      modal={false}
      open={open}
      onOpenChange={setOpen}
    >
      <DropdownMenuTrigger
        asChild
        className=' rounded-full select-none  px-4 text-2xl bg-white text-chasBlue border-2 border-chasBlue hover:bg-chasBlue hover:text-white focus-visible:outline-none data-[state=open]:bg-chasBlue data-[state=open]:text-white'
      >
        <Button className='flex gap-2 text-base'>
          {' '}
          <span>Se lediga tider</span>
          <FaChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='mt-1 overflow-hidden rounded bg-white/75 p-2 text-left shadow backdrop-blur hover:bg-gray-200/50'>
        {selectedTimeslots.map((timeslot) => (
          <DropdownMenuItem
            key={timeslot.name}
            onSelect={(e) => e.preventDefault()}
            className='data-[state=checked]:bg-gray-300 hover:bg-gray-200'
          >
            <label
              htmlFor={timeslot.name}
              className='flex items-center gap-2'
            >
              <Checkbox
                id={timeslot.name}
                checked={timeslot.selected}
                onCheckedChange={(checked) =>
                  handleChange(Boolean(checked), timeslot)
                }
                className='border border-black data-[state=checked]:bg-black data-[state=checked]:text-white hover:bg-gray-200 !bg-gray-200'
              />
              {timeslot.name}
            </label>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default CheckboxMenu
