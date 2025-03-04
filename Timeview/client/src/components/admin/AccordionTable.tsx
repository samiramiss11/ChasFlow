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
    <div className=' flex justify-center  rounded-3xl bg-white p-2'>
      {/**previously a table in a table (mapped rows) */}
      <div className=' p-0 mb-2 '>
        <div className=''>
          <Table className=''>
            <TableHeader className='rounded-3xl '>
              <TableRow className='grid grid-cols-5 gap-4'>
                {tableHeaders.map((header, index) => (
                  <TableHead
                    key={index} // ✅ Use TableHead (th) instead of TableCell (td)
                    className={`justify-self-start font-bold text-left  ${
                      index === 0 ? '' : ''
                    }`}
                    colSpan={index === tableHeaders.length - 1 ? 2 : 1} // Ensure last header spans columns
                  >
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

                  {/**---2: Expanded Details */}
                  {openRows.includes(order.id) && (
                    <>
                      {(() => {
                        const attributeEntries = Object.entries(
                          order.attributes
                        )
                        // const attributeEntries = Object.entries(
                        //   order.attributes
                        // ).map(([key, value]) => [
                        //   key,
                        //   Array.isArray(value) ? value : [value], // Convert single values to arrays
                        // ])

                        const maxRows =
                          attributeEntries.length > 0
                            ? Math.max(
                                ...attributeEntries.map(([_, value]) =>
                                  Array.isArray(value) ? value.length : 0
                                )
                              )
                            : 0
                        console.log(maxRows, 'ma')
                        return (
                          <>
                            {/* Header Row for Attributes */}
                            <TableRow className='bg-white p-2'>
                              {attributeEntries.map(([key]) => (
                                <TableHead
                                  key={String(key)}
                                  className=' p-2 '>
                                  {' '}
                                  {/* ✅ Use <TableHead> (th) for headers */}
                                  <p className='font-bold'>{key}</p>
                                </TableHead>
                              ))}
                            </TableRow>

                            {/* Attribute Values (Each row contains values at index `rowIndex`) */}
                            {Array.from({ length: maxRows }).map(
                              (_, rowIndex) => (
                                <TableRow
                                  key={rowIndex}
                                  className='even:bg-gray-100'>
                                  {attributeEntries.map(([key, value]) => (
                                    <TableCell
                                      key={`${value}-${rowIndex}`}
                                      className=''>
                                      {Array.isArray(value)
                                        ? value[rowIndex] || ''
                                        : value}
                                    </TableCell>
                                  ))}
                                </TableRow>
                              )
                            )}
                          </>
                        )
                      })()}
                    </>
                  )}
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
