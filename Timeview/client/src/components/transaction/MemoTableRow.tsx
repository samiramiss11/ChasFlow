import React from 'react'
import {
  TableCell,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'

interface MemoTableRowProps {
  day: number;
  week: number;
  startTime: string;
  endTime: string;
  room: string;
  roomTitle: string;
}
const MemoTableRow = React.memo(({ day, week, startTime, endTime, room, roomTitle }: MemoTableRowProps) => {
  const dayOfWeek = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag'];

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
            {startTime + '-' + endTime}
          </b>
        </p>
      </TableCell>
      <TableCell className="p-3">
        <p>
          i rum {room}{' '}
          <b className="font-extrabold text-muted-foreground">{roomTitle}</b>
        </p>
      </TableCell>
      <TableCell className="p-3">
        <div className="flex items-center justify-between">
          <Button size="sm" variant="outline" className="self-end mb-2 rounded-full bg-viewBookingButton">
            <span className="p-3">Ta bort</span>
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
});

export default MemoTableRow;
