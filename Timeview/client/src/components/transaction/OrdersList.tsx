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
  const noRooms = allbookingRooms.sets.every((set) => Object.keys(set.rooms).length === 0);

  console.log(allbookingRooms)
  return (
    <div>
      <ScrollArea className='h-[350px] px-12 ml-4'>
        <div className='p-3.7'>
          <Table className=' max-hight-[345px]'>
            <TableHeader>
              <TableRow>
                 <TableHead className=" py-4 lg:min-w-[130px] text-left text-black">Datum</TableHead>
      <TableHead className="py-4 lg:min-w-[130px] text-lef text-blackt">Tid</TableHead>
                <TableHead className=" py-4 lg:min-w-[130px] text-left text-black">Rum</TableHead>
                      <TableHead className="md:px-6 py-4 min-w-[120px] text-left"></TableHead>

              </TableRow>
            </TableHeader>
            
            <TableBody className=''>
              {!noRooms ? (
              allbookingRooms.sets.map((entry, setIndex) => 

     (
      Object.entries(entry.rooms).map(([room, details],entryIndex) => {
        const { timeBounds } = details || {timeBounds:'?'};        
        const roomTitle = flattenedRooms.find((r) => r.id === room)?.title || (onlineRooms.id === room ? 'Online' : 'Rum saknas');
        console.log(entry.day)
        return (
          <MemoTableRow
            key={`${entryIndex}-${room}`}
            day={entry.day}
            week={entry.week}
            timesBetween={timeBounds}
            room={room}
            roomTitle={roomTitle}
            localId={setIndex}
          />
        );
      })
    ))
            ) : (
              <TableRow className="h-[50px]">
                <TableCell  className="text-center text-gray-500">
                
                    </TableCell>
                    <TableCell  className="text-center text-gray-500">
               
                    </TableCell>
                    
                    <TableCell  className="text-center text-gray-500">
                  
                    </TableCell>
                    <TableCell className="p-3 w-full md:min-w-[160px]">
        <p>
      
          <b className="font-extrabold text-muted-foreground "></b>
        </p>
      </TableCell>
      <TableCell className="px-8 ">
        <div className="flex items-center justify-between ">
        
        </div>
      </TableCell>
              </TableRow>
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
