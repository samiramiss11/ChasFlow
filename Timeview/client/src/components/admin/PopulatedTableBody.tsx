import React, { useState, useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { TableEntries, UserData } from '@/pages/Admin/TimeReports'
import { Divide } from 'lucide-react'
type TriggeredDataLoad = {
  openRows: number[]
  order: UserData
}

/**
 * this component is rendered conditionally onto the DOM and is a fetch on waterfall trigger the pages second request
 * @param param0
 * @returns
 */
const PopulatedTableBody = ({ openRows, order }: TriggeredDataLoad) => {
  // const [orderAttributes, setOrderAttributes] = useState<Record<string, any>>(
  //   {}
  // )
  // const [loadingOrders, setLoadingOrders] = useState<Record<string, boolean>>(
  //   {}
  // )
  const [attributes, setAttributes] = useState<TableEntries | null>(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    console.log('waterfall')
    if (openRows.includes(order.id) && !attributes) {
      setLoading(true)
      setTimeout(() => {
        setAttributes({
          datum: ['2025-02-22T', '2025-02-22T1'],
          tid: ['13:00 - 14:30', '13:00 - 14:30'],
          programKod: ['PHYS103', 'PHYS302'],
          rum: ['Room C3', 'Room C3'],
          sammanlagda_timmar: [1, 1],
        })
        setLoading(false)
      }, 2000)
    }
  }, [openRows, order.id])

  if (loading || attributes == null) {
    return (
      <>
         <TableRow className="bg-white p-2">
  {Object.keys({
    datum: [],
    tid: [],
    programKod: [],
    rum: [],
    sammanlagda_timmar: [],
  }).map((key) => (
    <TableHead key={key} className="p-1 px-3">
      <p className="font-bold">{key}</p>
    </TableHead>
  ))}
</TableRow>
        {Array.from({ length: 2 }).map((_, rowIndex) => (
          <TableRow
            key={rowIndex}
            className='even:bg-chasLightGray'>
            {Array.from({ length: 5 }).map((_, index) => (
              <TableCell
                key={index}
                className=''>
                loading
              </TableCell>
            ))}
          </TableRow>
        ))}
      </>
    )
  }

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
