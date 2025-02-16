import * as React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox' // Import Checkbox
import { cn } from '@/lib/utils' // Utility for conditional classNames (optional)

/**
 * i thought it was a good idea to group since origionally there were only 2 checkbox to pick fm  || em
 * radix select element is wrong since the popover always close when closed.
 */

// Define timezones for cleaner data handling
const timezones = [
  {
    group: 'North America',
    items: [
      { value: 'est', label: 'Eastern Standard Time (EST)' },
      { value: 'cst', label: 'Central Standard Time (CST)' },
      { value: 'mst', label: 'Mountain Standard Time (MST)' },
      { value: 'pst', label: 'Pacific Standard Time (PST)' },
      { value: 'akst', label: 'Alaska Standard Time (AKST)' },
      { value: 'hst', label: 'Hawaii Standard Time (HST)' },
    ],
  },
  {
    group: 'Europe & Africa',
    items: [
      { value: 'gmt', label: 'Greenwich Mean Time (GMT)' },
      { value: 'cet', label: 'Central European Time (CET)' },
      { value: 'eet', label: 'Eastern European Time (EET)' },
      { value: 'west', label: 'Western European Summer Time (WEST)' },
      { value: 'cat', label: 'Central Africa Time (CAT)' },
      { value: 'eat', label: 'East Africa Time (EAT)' },
    ],
  },
  {
    group: 'Asia',
    items: [
      { value: 'msk', label: 'Moscow Time (MSK)' },
      { value: 'ist', label: 'India Standard Time (IST)' },
      { value: 'cst_china', label: 'China Standard Time (CST)' },
      { value: 'jst', label: 'Japan Standard Time (JST)' },
      { value: 'kst', label: 'Korea Standard Time (KST)' },
      {
        value: 'ist_indonesia',
        label: 'Indonesia Central Standard Time (WITA)',
      },
    ],
  },
  {
    group: 'Australia & Pacific',
    items: [
      { value: 'awst', label: 'Australian Western Standard Time (AWST)' },
      { value: 'acst', label: 'Australian Central Standard Time (ACST)' },
      { value: 'aest', label: 'Australian Eastern Standard Time (AEST)' },
      { value: 'nzst', label: 'New Zealand Standard Time (NZST)' },
      { value: 'fjt', label: 'Fiji Time (FJT)' },
    ],
  },
  {
    group: 'South America',
    items: [
      { value: 'art', label: 'Argentina Time (ART)' },
      { value: 'bot', label: 'Bolivia Time (BOT)' },
      { value: 'brt', label: 'Brasilia Time (BRT)' },
      { value: 'clt', label: 'Chile Standard Time (CLT)' },
    ],
  },
]

export function SelectScrollable() {
  const [selectedValues, setSelectedValues] = React.useState<string[]>([])

  const handleToggle = (value: string) => {
    setSelectedValues(
      (prevSelected) =>
        prevSelected.includes(value)
          ? prevSelected.filter((item) => item !== value) // Deselect
          : [...prevSelected, value] // Select
    )
  }

  return (
    <Select>
      <SelectTrigger className='w-[280px]'>
        <SelectValue
          placeholder='Select timezones'
          className={cn(selectedValues.length && 'text-white')} // Optional conditional styling
        >
          {selectedValues.length > 0
            ? selectedValues.join(', ')
            : 'Select timezones'}
        </SelectValue>
      </SelectTrigger>

      <SelectContent className='max-h-60 overflow-y-auto'>
        {timezones.map((group) => (
          <SelectGroup key={group.group}>
            <SelectLabel>{group.group}</SelectLabel>
            {group.items.map((timezone) => (
              <SelectItem
                key={timezone.value}
                value={timezone.value}
                onClick={(e) => {
                  e.preventDefault() // Prevent default single-select behavior
                  handleToggle(timezone.value)
                }}
                className='flex items-center space-x-2'
              >
                <Checkbox
                  checked={selectedValues.includes(timezone.value)}
                  onCheckedChange={() => handleToggle(timezone.value)}
                  className='mr-2'
                />
                <span>{timezone.label}</span>
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  )
}
