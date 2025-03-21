import React from 'react'
import {
  TableCell,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'

interface MemoTableRowProps {
  day: number;
  week: number;
  timesBetween: string;
  room: string;
  roomTitle: string;
}
import { AppDispatch } from '@/lib/store';
import { useAppDispatch } from '@/lib/hooks';
import { filterBookingsForRoomId } from '@/features/transaction/booking/setBookings';
const MemoTableRow = React.memo(({ day, week, timesBetween, room, roomTitle }: MemoTableRowProps) => {
  const dayOfWeek = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag'];
   
    const dispatch = useAppDispatch()
    
     const handleDelete = ({day, week}:{day:string, week:string}) => {
         dispatch(filterBookingsForRoomId({roomId:room,day,week })); // Dispatch the delete action to the store
         console.log('delete')
  };
  return (
    <TableRow>
      <TableCell className="p-3 py-5">
        <p>
          <b className="font-extrabold text-black">
            {day + '/' + week}
          </b>
          {' ' + dayOfWeek[day - 1]}
        </p>
      </TableCell>
      <TableCell className="p-3 py-5">
        <p>
          kl{' '}
          <b className="text-black">
                      {timesBetween}
          </b>
        </p>
      </TableCell>
      <TableCell className="p-3 py-5 w-full md:min-w-[180px]">
        <p>
          i rum {room}{' '}
          <b className="font-extrabold text-black">{roomTitle}</b>
        </p>
      </TableCell>
      <TableCell className="px-8 ">
        <div className="flex items-center justify-between py-1.4" onClick={() => handleDelete({day, week})}>
          <Button size="sm" variant="outline" className="self-end mb-2 rounded-full bg-viewBookingButton  hover:bg-viewBookingButton hover:text-inherit ">
            <span className="p-3">Ta bort</span>
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
});

export default MemoTableRow;
