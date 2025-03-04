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
  return (
    <>
      <TableCell>
        <span className='flex items-align '>
          <ChevronUp
            className={` ${
              openRows.includes(order.id)
                ? 'rotate-180 text-gray-800'
                : 'text-gray-600'
            } transiti on-all`}
          />
          {order.name}
        </span>
      </TableCell>
      <TableCell>{order.address}</TableCell>
      <TableCell className=''>{'Programomkod'}</TableCell>
      <TableCell className=''>{order.date}</TableCell>

      <TableCell className='h-full pb-1'>
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
