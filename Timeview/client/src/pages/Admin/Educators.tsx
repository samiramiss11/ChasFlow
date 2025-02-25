import React from 'react'

const clientAction = () => async () => {}
import { ReduxStore } from '@/lib/store'

export const clientLoader = (store: ReduxStore) => async () => {
  store.getState().userState.user
  return null
}

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
const Educators = () => {
  const orders = [
    {
      id: 1,
      attributes: {
        firstName: 'Alice',
        lastName: 'Johnson',
        email: 'alice.johnson@example.com',
      },
    },
    {
      id: 2,
      attributes: {
        firstName: 'Bob',
        lastName: 'Smith',
        email: 'bob.smith@example.com',
      },
    },
    {
      id: 3,
      attributes: {
        firstName: 'Charlie',
        lastName: 'Brown',
        email: 'charlie.brown@example.com',
      },
    },
  ]
  return (
    <div className='m-4 bg-white h-[699px] p-4 w-full'>
      <div className='mt-16'>
        <Table className='w-full'>
          <TableHeader>
            <TableRow className='grid grid-cols-3 gap-4'>
              <TableHead>Namn</TableHead>
              <TableHead>Efternamn</TableHead>
              <TableHead className='w-[100px]'>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className='w-full'>
            {orders.map((order) => {
              const { firstName, lastName, email } = order.attributes
              return (
                <TableRow
                  key={order.id}
                  className='grid grid-cols-3 gap-4 bg-white shadow-md rounded-lg p-4 mb-2'
                >
                  <TableCell>{firstName}</TableCell>
                  <TableCell>{lastName}</TableCell>
                  <TableCell className='text-center'>{email}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Educators
