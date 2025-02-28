import React from 'react'
import { RoomType } from '@/features/transaction/rooms/roomSlice'
import Room from '@/components/transaction/Room'
const RoomList = ({ rooms }: { rooms: RoomType[] }) => {
  if (rooms.length == 0) {
    return <div>such empty</div>
  }

  return (
    <>
      {rooms.map((room, index) => {
        return (
          <Room
            key={index}
            roomDetails={room}
          />
        )
      })}
    </>
  )
}

export default RoomList
