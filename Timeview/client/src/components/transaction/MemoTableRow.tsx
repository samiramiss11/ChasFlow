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
    
     const handleDelete = () => {
         dispatch(filterBookingsForRoomId(room)); // Dispatch the delete action to the store
         console.log('delete')
  };
  return (
    <TableRow>
      <TableCell className="p-3">
        <p>
          <b className="font-extrabold text-muted-foreground">
            {day + '/' + week}
          </b>
          {' ' + dayOfWeek[day - 1]}
        </p>
      </TableCell>
      <TableCell className="p-3">
        <p>
          kl{' '}
          <b className="text-muted-foreground">
                      {timesBetween}
          </b>
        </p>
      </TableCell>
      <TableCell className="p-3 w-full md:min-w-[180px]">
        <p>
          i rum {room}{' '}
          <b className="font-extrabold text-muted-foreground">{roomTitle}</b>
        </p>
      </TableCell>
      <TableCell className="px-8 ">
        <div className="flex items-center justify-between" onClick={() => handleDelete()}>
          <Button size="sm" variant="outline" className="self-end mb-2 rounded-full bg-viewBookingButton">
            <span className="p-3">Ta bort</span>
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
});

export default MemoTableRow;
