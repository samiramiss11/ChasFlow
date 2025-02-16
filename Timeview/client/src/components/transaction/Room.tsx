import React from 'react'
import { RoomType } from '@/features/transaction/rooms/roomSlice'
import CheckboxMenu from './CheckboxMenu'
/**
 * fit largest sibling
 * @param param0
 * @returns
 */
const Room = ({ roomDetails }: { roomDetails: RoomType }) => {
  return (
    <div className='flex gap-4 justify-around  min-h-fit py-6 items-center'>
      <img
        src={roomDetails.image}
        alt='room i '
        className='w-[8vw] max-w-sm'
      />
      <div className='space-y-2'>
        <h6>
          {' '}
          <b>{roomDetails.title}</b>
        </h6>
        <p>{roomDetails.capacity}</p>
      </div>
      <div>
        <CheckboxMenu roomId={roomDetails.id} />
      </div>
    </div>
  )
}

export default Room
