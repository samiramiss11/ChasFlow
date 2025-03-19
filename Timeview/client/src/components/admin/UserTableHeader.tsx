import React from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { ChevronUp } from 'lucide-react'

import { UserData } from '@/pages/Admin/TimeReports'
export type UserWithoutAttributes = Omit<UserData, 'attributes'>
export type tableHeaderProps = {
  openRows: number[]
  order: UserWithoutAttributes
}
const UserTableHeader = ({ openRows, order }: tableHeaderProps) => {
  const columns = [
    { key: 'name', content: order.name, hasIcon: true },
    { key: 'address', content: order.address },
    { key: 'programCode', content: 'Programomkod' },
    { key: 'date', content: order.date },
  ]

  return (
    <>
      {columns.map(({ key, content, hasIcon }) => (
        <TableCell
          key={key}
          className='p-3'>
          {hasIcon ? (
            <span className='flex items-center'>
              <ChevronUp
                className={` ${
                  openRows.includes(order.id)
                    ? 'rotate-180 text-black'
                    : 'text-black'
                } transition-all`}
              />
              {content}
            </span>
          ) : (
            content
          )}
        </TableCell>
      ))}

      <TableCell className='h-full pb-1 p-3'>
        <div className='flex flex-col h-full justify-end '>
          <Button
            type='button'
            size='sm'
            variant='default'
            className='rounded-full'>
            Skriv ut CSV för [konsult namn]
          </Button>
        </div>
      </TableCell>
    </>
  )
}

export default UserTableHeader
