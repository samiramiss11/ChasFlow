import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { OwnedBatch } from '@/features/transaction/booking/setBookings'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ROOMS } from '@/features/transaction/rooms/roomSlice'
const OrdersList = () => {
  const { allbooking, relatedUser } = useLoaderData() as OwnedBatch
  const flattenedRooms = ROOMS.flatMap((group) =>
    group.rooms.map(({ id, title }) => ({ id, title }))
  )
  //const { day, week, rooms } = allbooking || {}

  const dayOfWeek = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag']

  return (
    <div>
      <ScrollArea className='h-[350px]'>
        <div className='p-3.7'>
          <Table className=' max-hight-[345px]'>
            <TableHeader>
              <TableRow>
                <TableHead>Datum</TableHead>
                <TableHead>Tid</TableHead>
                <TableHead>Rum</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allbooking.sets.map((entry, index) =>
                Object.entries(entry.rooms).map(
                  ([room, details]: [string, any]) => {
                    const { selectedInterval } = details
                    const firstTime = selectedInterval[0].replace('-', '')
                    const lastTime = selectedInterval[
                      selectedInterval.length - 1
                    ].replace('-', '')

                    const startTime = firstTime.slice(
                      0,
                      Math.ceil(firstTime.length / 2)
                    ) // First half
                    const endTime = lastTime.slice(
                      Math.floor(lastTime.length / 2)
                    )
                    return (
                      <TableRow key={`${index}-${room}`}>
                        <TableCell>
                          <p>
                            {' '}
                            <b className='font-extrabold text-muted-foreground'>
                              {entry.day + '/' + entry.week}
                            </b>
                            {' ' + dayOfWeek[entry.day - 1]}
                          </p>
                        </TableCell>
                        <TableCell>
                          <p>
                            kl{' '}
                            <b className='text-muted-foreground'>
                              {startTime + '-' + endTime}
                            </b>
                          </p>
                        </TableCell>
                        <TableCell>
                          {' '}
                          <p>
                            i rum {room}{' '}
                            <b className='font-extrabold text-muted-foreground'>
                              {' '}
                              {flattenedRooms.find((r) => r.id === room)?.title}
                            </b>
                          </p>
                        </TableCell>
                        <TableCell>
                          <div className='flex items-center justify-between '>
                            {' '}
                            <Button
                              size='sm'
                              variant='outline'
                              className='self-end mb-2 rounded-full bg-viewBookingButton 
] '
                            >
                              <span className='p-3'> Ta bort</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    )
                  }
                )
              )}
            </TableBody>
          </Table>
        </div>
      </ScrollArea>
    </div>
  )
}

export default OrdersList

//  <div>
//               {tags.map((tag) => (
//                 <div key={tag}>
//                   <div className='flex items-center justify-between'>
//                     <div className='text-sm'>{tag}</div>
//                     <Button
//                       size='sm'
//                       variant='outline'
//                       className='self-end mb-2 rounded-full '
//                     >
//                       <span className='px-1'> Välj</span>
//                     </Button>
//                   </div>
//                   <Separator className='my-2' />
//                 </div>
//               ))}
//             </div>
