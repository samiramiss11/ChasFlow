import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import UserTableHeader from '@/components/admin/UserTableHeader'
import React, { useState } from 'react'

import { AccordionResponse } from '@/pages/Admin/TimeReports'

const TableInTableAccordion = ({ propDrilling }: AccordionResponse) => {
  const { tableHeaders, orders } = propDrilling
  const [openRows, setOpenRows] = useState<number[]>([])

  const toggleRow = (id: number) => {
    setOpenRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    )
  }

  const rowProps = (orderId: number) => {
    return {
      className: ` cursor-pointer  ${
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
    <div className='m-4 bg-white h-[539px] flex justify-center p-5 w-full'>
      <Table className='border-separate border-spacing-y-2 w-full'>
        <TableHeader className='p-8 '>
          <TableRow className='bg-gray-100'>
            {/**top levl headers with nested forain array of input */}
            {tableHeaders.map((header, index) => (
              <TableHead
                key={index}
                className={`w-1/5 bg-white ${index === 0 && 'pl-12'} `}
                colSpan={index === tableHeaders.length - 1 ? 2 : 1}>
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className='bg-white shadow-md rounded-lg p-4 mb-2'>
          {/**---1:  */}
          {orders.map((order) => (
            <React.Fragment key={order.id}>
              {/* < Table className='bg-white shadow-md rounded-lg p-4 mb-2 col-span-5'> */}
              {/* Main Row */}
              <TableRow {...rowProps(order.id)}>
                {/**top level user in information*/}
                <UserTableHeader
                  openRows={openRows}
                  order={order}
                />
              </TableRow>

              {/**---2: Expanded Details */}
              {openRows.includes(order.id) && (
                <>
                  {(() => {
                    const attributeEntries = Object.entries(order.attributes)
                    console.log(attributeEntries)
                    // Determine the maximum number of rows needed (longest array length)
                    const maxRows = Math.max(
                      ...attributeEntries.map(([_, value]) =>
                        Array.isArray(value) ? value.length : 1
                      )
                    )

                    return (
                      <>
                        {/* Header Row for Attributes */}
                        <TableRow className=''>
                          {attributeEntries.map(([key, value]) => (
                            <TableCell key={key}>
                              <p className='font-bold'>{key}</p>
                            </TableCell>
                          ))}
                        </TableRow>

                        {/* Attribute Values (Each row contains values at index `rowIndex`) */}
                        {Array.from({ length: maxRows }).map((_, rowIndex) => (
                          <TableRow
                            key={rowIndex}
                            className='odd:bg-gray-100'>
                            {attributeEntries.map(([key, value]) => (
                              <TableCell key={`${value}-${rowIndex}`}>
                                {Array.isArray(value)
                                  ? value[rowIndex] || ''
                                  : value}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </>
                    )
                  })()}
                </>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default TableInTableAccordion
