import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { OwnedBatch } from '@/features/transaction/booking/setBookings'
import { ScrollArea } from '@/components/ui/scroll-area'
import { getTimes, getSmallestTime,getGreatestTime,getFormattedTime } from '@/utils/transaction/Formating'

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
import { useAppSelector } from '@/lib/hooks'
const OrdersList = () => {
  const {  relatedUser } = useLoaderData() as OwnedBatch //allbooking, hmm don't want to delete from clientLoader context
  const flattenedRooms = ROOMS.flatMap((group) =>
    group.rooms.map(({ id, title }) => ({ id, title }))
  )

  const allbookingRooms = useAppSelector((state) => state.allBookingState)
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
              {allbookingRooms.sets.map((entry, index) =>
                Object.entries(entry.rooms).map(
                  ([room, details]: [string, any]) => {
                    const { selectedInterval } = details
                    const times: string[][] = getTimes(selectedInterval.selectedTimeSlots);
                    const smallestTime = getSmallestTime(times); // Get earliest start time
                    const greatestTime = getGreatestTime(times); // Get latest end time
                    const startTime = getFormattedTime(smallestTime, true); // Get formatted start time
                    const endTime = getFormattedTime(greatestTime, false); // Get formatted end time


                   const roomTitle =  flattenedRooms.find((r) => r.id === room)?.title || (onlineRooms.id === room ? 'Online' : 'Rum saknas')
                    return (
                       <MemoTableRow
                          key={`${index}-${room}`}
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
