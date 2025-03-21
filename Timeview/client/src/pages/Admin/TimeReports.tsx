import React from 'react'

export type TableEntries = {
  datum: string[] //Date;
  tid: string[]
  programKod: string[] // **(Typo)**
  rum: string[]
  sammanlagda_timmar: number[]
}
export type UserData = {
  id: number
  name: string
  address: string
  date: string
  attributes: TableEntries
}

export type AccordionResponse = {
  propDrilling: { tableHeaders: string[]; orders: UserData[] }
}
import TableInTableAccordion from '@/components/admin/TableInTableAccordion'
import AccordionTable from '@/components/admin/AccordionTable'

import { useLoaderData } from 'react-router-dom'
import { ReduxStore } from '@/lib/store'

export const clientLoader = (store: ReduxStore) => async () => {
  store.getState().userState.user
  return 'nulls'
}

const TimeReports = () => {
  const users = useLoaderData()
  console.log(users)
  const orders = [
    {
      id: 1,
      name: 'John Doe',
      address: '123 Main St',
      date: '2025-02-24',
      attributes: {
        datum: ['2025-02-20T08'],
        tid: ['08:30 - 10:00'],
        programKod: ['CS101'],
        rum: ['Room A1'],
        sammanlagda_timmar: [1],
      },
    },
    {
      id: 2,
      name: 'Alice Brown',
      address: '123 Main St',
      date: '2025-02-23',
      attributes: {
        datum: ['2025-02-22T', '2025-02-22T1'],
        tid: ['13:00 - 14:30', '13:00 - 14:30'],
        programKod: ['PHYS103', 'PHYS302'],
        Rum: ['Room C3', 'Room C3'],
        sammanlagda_timmar: [1, 1],
      },
    },
    {
      id: 3,
      name: 'Jane Smith',
      address: '123 Main St',
      date: '2025-02-24',
      attributes: {
        datum: ['2025-02-21T1'],
        tid: ['10:15 - 11:45'],
        programKod: ['MATH202'],
        rum: ['Room B2'],
        sammanlagda_timmar: [1],
      },
    },
  ]
  const tableHeaders = ['Namn', 'Efternamn', 'Timmar/vecka', 'Timmar/månad', '']
  const transformedOrders = orders.map((order) => ({
    ...order,
    attributes: {
      datum: order.attributes.datum || [''], // Ensure it’s always an array
      tid: order.attributes.tid || [''],
      programKod: order.attributes.programKod || [''],
      rum: order.attributes.Rum || [''],
      sammanlagda_timmar: order.attributes.sammanlagda_timmar || [0],
    },
  }))
  const data = { tableHeaders: tableHeaders, orders: transformedOrders }
  return (
    <div className=' -min-h-[539px] flex justify-center p-3 pt-5 w-full'>
      {false ? (
        <TableInTableAccordion propDrilling={data} />
      ) : (
        <AccordionTable propDrilling={data} />
      )}
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
