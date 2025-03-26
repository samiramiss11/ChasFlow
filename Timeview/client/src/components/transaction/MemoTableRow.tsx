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
  localId:number
}
import { AppDispatch } from '@/lib/store';
import { useAppDispatch } from '@/lib/hooks';
import { filterBookingsForRoomId } from '@/features/transaction/booking/setBookings';
const MemoTableRow = React.memo(({ day, week, timesBetween, room, roomTitle,localId }: MemoTableRowProps) => {
  const dayOfWeek = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag'];
   
    const dispatch = useAppDispatch()
    
     const handleDelete = ({localId}:Pick<MemoTableRowProps, 'localId'>) => {
         dispatch(filterBookingsForRoomId({roomId:room,localId})); // Dispatch the delete action to the store
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
        <div className="flex items-center justify-between py-1.4" onClick={() => handleDelete({localId})}>
          <Button size="sm" variant="outline" className="self-end mb-2 rounded-full bg-viewBookingButton  hover:bg-viewBookingButton hover:text-inherit ">
            <span className="p-3">Ta bort</span>
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
});

export default MemoTableRow;

// type LastKey<T> = keyof T extends infer K 
//   ? K extends string 
//     ? K extends keyof any[] ? never : K
//     : never
//   : never;

// type LastProp = LastKey<MemoTableRowProps>;

// type Keys = keyof MemoTableRowProps; // 'day' | 'week' | 'timesBetween' | 'room' | 'roomTitle' | 'localId'
// type KeyArray = ['day', 'week', 'timesBetween', 'room', 'roomTitle', 'localId']; 
// type LastKeyManual = KeyArray[KeyArray.length - 1]; // 'localId'
