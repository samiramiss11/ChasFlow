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
      <TableCell className=''>{'ss'}</TableCell>
      <TableCell className=''>{order.date}</TableCell>

      <TableCell>
        <Button> Skriv ut CSV för [konsult namn]</Button>
      </TableCell>
    </>
  )
}

export default UserTableHeader
