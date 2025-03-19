import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import UserTableHeader from '@/components/admin/UserTableHeader'

export type TableEntries = {
  Datum: Date
  Tid: string
  prograomkod: string
  rum: string
  sammanlagdatimmar: number
}
export type UserData = {
  id: number
  name: string
  address: string
  date: string
  attributes: TableEntries
}
import { AccordionResponse } from '@/pages/Admin/TimeReports'
import PopulatedTableBody from './PopulatedTableBody'
const AccordionTable = ({ propDrilling }: AccordionResponse) => {
  const { tableHeaders, orders } = propDrilling
  const [openRows, setOpenRows] = useState<number[]>([])

  const toggleRow = (id: number) => {
    setOpenRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    )
  }

  const rowProps = (orderId: number) => {
    return {
      className: ` cursor-pointer rounded-3xl  ${
        openRows.includes(orderId) ? 'bg-white' : ''
      }`,
      onClick: (e: React.MouseEvent<HTMLTableRowElement>) => {
        e.preventDefault()
        const target = e.target as HTMLElement

        // Prevent toggle if a button inside the row was clicked
        if (
          target.tagName.toLowerCase() === 'button' ||
          target.closest('button')
        ) {
          return
        }

        toggleRow(orderId)
      },
    }
  }

  return (
    <div className=' flex justify-center  rounded-3xl bg-white p-2 w-full'>
      {/**previously a table in a table (mapped rows) */}
      <div className=' p-0 mb-2 w-full'>
        <div className=''>
          <Table className='w-full'>
            <TableHeader className='rounded-3xl'>
              <TableRow className='grid grid-cols-6 gap-1'>
                {tableHeaders.map((header, index) => (
                  <TableHead
                    key={index}
                    className={`justify-self-start  xl:justify-self-center text-left w-1/5 text-black 
    ${index === tableHeaders.length - 1 ? 'col-span-2' : 'col-span-1'}
  `}>
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
          </Table>
        </div>
        <div className=''>
          {/**---1:  */}
          {orders.map((order) => (
            <React.Fragment key={order.id}>
              <Table className=' mb-2 rounded-3xl border-collapse overflow-hidden shadow-md  drop-shadow-lg'>
                <TableHeader className=' '>
                  <TableRow {...rowProps(order.id)}>
                    {/**top level user in information*/}
                    <UserTableHeader
                      openRows={openRows}
                      order={order}
                    />
                  </TableRow>
                </TableHeader>
                <TableBody className='  p-8 mb-2 bg-white'>
                  {/* Main Row */}
                  {openRows.includes(order.id) && (
                    <PopulatedTableBody
                      openRows={openRows}
                      order={order}
                    />
                  )}
                  {/**---2: Expanded Details */}
                </TableBody>
              </Table>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AccordionTable
