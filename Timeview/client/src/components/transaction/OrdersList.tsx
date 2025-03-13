import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { OwnedBatch } from '@/features/transaction/booking/setBookings'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import MemoTableRow from './MemoTableRow'
import { ROOMS } from '@/features/transaction/rooms/roomSlice'
import { onlineRooms } from '@/features/transaction/rooms/roomSlice'
const OrdersList = () => {
  const { allbooking, relatedUser } = useLoaderData() as OwnedBatch
  const flattenedRooms = ROOMS.flatMap((group) =>
    group.rooms.map(({ id, title }) => ({ id, title }))
  )
  //const { day, week, rooms } = allbooking || {}



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
                    console.log(selectedInterval)
                    // const firstTime =
                    //   selectedInterval[0]?.replace('-', '') || ''
                    // const lastTime =
                    //   selectedInterval[selectedInterval.length - 1]?.replace(
                    //     '-',
                    //     ''
                    //   ) || ''
                    const times: string[][] = (selectedInterval.selectedTimeSlots ?? [].filter(Boolean)).map((interval: string) =>
  interval.split('-')
); // Extract start & end times

// const smallestTime = times.reduce((a, b) => (a[0] < b[0] ? a : b))[0]; // Get earliest start time
// const greatestTime = times.reduce((a, b) => (a[1] > b[1] ? a : b))[1]; // Get latest end time
const smallestTime =
  times.length > 0
    ? times.reduce((a, b) => (a[0] < b[0] ? a : b))[0]
    : '23:59'; // Default latest possible time

const greatestTime =
  times.length > 0
    ? times.reduce((a, b) => (a[1] > b[1] ? a : b))[1]
    : '00:00'; // Default earliest possible time
console.log("Start Time:", smallestTime);
console.log("End Time:", greatestTime);

                    const startTime = smallestTime?.slice(
                      0,
                      Math.floor(smallestTime.length / 2)
                    ) // First half
                    const endTime = greatestTime?.slice(
                      Math.ceil(greatestTime.length / 2)
                    )
                   const roomTitle =  flattenedRooms.find((r) => r.id === room)?.title || (onlineRooms.id === room ? 'Online' : 'Rum saknas')
                    return (
                       <MemoTableRow
                          key={index}
                          day={entry.day}
                          week={entry.week}
                          startTime={startTime}
                          endTime={endTime}
                          room={room}
                          roomTitle={roomTitle}
        />
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
