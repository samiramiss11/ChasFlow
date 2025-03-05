import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { UserData } from '@/pages/Admin/TimeReports'
type TriggeredDataLoad = {
  openRows: number[]
  order: UserData
}

const PopulatedTableBody = ({ openRows, order }: TriggeredDataLoad) => {
  return (
    <>
      {openRows.includes(order.id) && (
        <>
          {(() => {
            const attributeEntries = Object.entries(order.attributes)
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
                      className=' p-1 px-3 '>
                      {' '}
                      {/* ✅ Use <TableHead> (th) for headers */}
                      <p className='font-bold'>{key}</p>
                    </TableHead>
                  ))}
                </TableRow>

                {/* Attribute Values (Each row contains values at index `rowIndex`) */}
                {Array.from({ length: maxRows }).map((_, rowIndex) => (
                  <TableRow
                    key={rowIndex}
                    className='even:bg-gray-100'>
                    {attributeEntries.map(([key, value]) => (
                      <TableCell
                        key={`${value}-${rowIndex}`}
                        className=''>
                        {Array.isArray(value) ? value[rowIndex] || '' : value}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </>
            )
          })()}
        </>
      )}
    </>
  )
}

export default PopulatedTableBody
