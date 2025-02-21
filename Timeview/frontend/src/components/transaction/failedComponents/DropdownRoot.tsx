import React from 'react'
import { useState } from 'react'
import { SelectScrollable } from './SelectScrollable'
import Dropdown from '@/components/transaction/Dropdown'
import { Checkbox } from '../../ui/checkbox'
const DropdownRoot = () => {
  const [selectedIntervals, setSelectedIntervals] = useState<string[]>([])
  let [text, setText] = useState('Select an item')
  let [open, setOpen] = useState(false)
  // let controls = useAnimationControls()
  const names = [
    '8.00-8.55',
    '9.00-9.55',
    '10.00-10.55',
    '11.00-11.55',
    '12.00-12.55',
    '13.00-13.55',
    '14.00-14.55',
    '15.00-15.55',
    '16.00-16.55',
    '17.00-17.55',
    '18.00-18.55',
    '19.00-20.00',
  ]

  const handleToggle = (name: string) => {
    setSelectedIntervals((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    )
  }

  return (
    <Dropdown>
      <Dropdown.Button>click on this</Dropdown.Button>

      <Dropdown.Menu>
        {/* <Dropdown.MenuItem onSelect={() => setText('Clicked Item 1')}>
              Item 1
            </Dropdown.MenuItem> */}
        {names.map((name) => (
          <Dropdown.MenuItem key={name}>
            <Checkbox
              checked={selectedIntervals.includes(name)}
              onSelect={() => handleToggle(name)}
            />
            <p>{name}</p>
          </Dropdown.MenuItem>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownRoot
