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
    <div className='flex flex-wrap gap-2 justify-around    items-center min-h-[200px] lg:min-h-[110px]'>
      {/**1st box */}
      <div>
        <img
          src={roomDetails.image}
          alt='room i '
          className='w-[10vw] max-w-sm'
        />
      </div>
      {/**2nd box */}
      <div className='space-y-1'>
        <h6 className=''>
          {' '}
          <b>{roomDetails.title}</b>
        </h6>
        <p className='min-w-[20ch] max-w-[20ch] break-words '>
          {roomDetails.capacity}
        </p>
      </div>
      {/**3rd box */}
      <div>
        <CheckboxMenu roomId={roomDetails.id} />
      </div>
    </div>
  )
}

export default Room
