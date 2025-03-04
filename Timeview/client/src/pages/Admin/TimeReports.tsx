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

const TimeReports = () => {
  const [openRows, setOpenRows] = useState<number[]>([])

  const toggleRow = (id: number) => {
    setOpenRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    )
  }

  const orders = [
    {
      id: 1,
      name: 'John Doe',
      address: '123 Main St',
      date: '2025-02-24',
      attributes: {
        datum: ['2025-02-20T08:30:00Z'],
        tid: ['08:30 - 10:00'],
        Programkod: ['CS101'],
        Rum: ['Room A1'],
        Sammanlagda_timmar: [1],
      },
    },
    {
      id: 2,
      name: 'Alice Brown',
      address: '123 Main St',
      date: '2025-02-23',
      attributes: {
        datum: ['2025-02-22T13:00:00Z', '2025-02-22T13:00:00Z'],
        tid: ['13:00 - 14:30', '13:00 - 14:30'],
        Programkod: ['PHYS303', 'PHYS303'],
        Rum: ['Room C3', 'Room C3'],
        Sammanlagda_timmar: [1, 1],
      },
    },
    {
      id: 3,
      name: 'Jane Smith',
      address: '123 Main St',
      date: '2025-02-24',
      attributes: {
        datum: ['2025-02-21T10:15:00Z'],
        tid: ['10:15 - 11:45'],
        Programkod: ['MATH202'],
        Rum: ['Room B2'],
        Sammanlagda_timmar: [1],
      },
    },
  ]
  const tableHeaders = [
    'Namn',
    'Efternamn',
    'Timmar denna vecka',
    'Timmar denna månad',
    '',
  ]
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
    <div className='m-4 bg-white h-[539px] flex justify-center p-5'>
      <Table className='border-separate border-spacing-y-2 w-full'>
        <TableHeader className='p-8 '>
          <TableRow className='bg-gray-100'>
            {/**top levl headers with nested forain array of input */}
            {tableHeaders.map((header, index) => (
              <TableHead
                key={index}
                className={`w-1/5 bg-white ${index === 0 && 'pl-12'} `}
                colSpan={index === tableHeaders.length - 1 ? 2 : 1}
              >
                
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
              <TableRow {...rowProps(order.id)} >
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

export default TimeReports

// <div className='m-4 bg-white h-[539px]'>
//       <div className='mt-16 table-fixed'>
//         <Table>
//           <TableHeader>
//             <TableRow cla>
//               <TableHead>Name</TableHead>
//               <TableHead>Address</TableHead>
//               <TableHead className='w-[100px]'>Products</TableHead>
//               <TableHead className='w-[100px]'>Cost</TableHead>
//               <TableHead>Date</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {orders.map((order) => {
//               const { datum, tid, Programkod, Rum } = order.attributes
//               return (
//                 <TableRow
//                   key={order.id}
//                   className='even:bg-gray-100'
//                 >
//                   <TableCell>{new Date(datum).toDateString()}</TableCell>
//                   <TableCell>{tid}</TableCell>
//                   <TableCell className='text-center'>{Programkod}</TableCell>
//                   <TableCell>{Rum}</TableCell>
//                   <TableCell>{}</TableCell>
//                   <div className='w-full'>the remaining width</div>
//                 </TableRow>
//               )
//             })}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
