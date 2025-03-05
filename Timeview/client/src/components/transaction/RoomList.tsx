import React from 'react'
import { RoomType } from '@/features/transaction/rooms/roomSlice'
import Room from '@/components/transaction/Room'

/**
 * room alignment between two columns is challanging
 * @param param0
 * @returns
 */
const RoomList = ({ rooms }: { rooms: RoomType[] }) => {
  if (rooms.length == 0) {
    return <div>such empty</div>
  }

  return (
    <>
      <div className='flex-wrap justify-around lex flex-col gap-4'>
        {rooms.map((room, index) => (
          <Room
            key={index}
            roomDetails={room}
          />
        ))}
      </div>
    </>
  )
}

export default RoomList
