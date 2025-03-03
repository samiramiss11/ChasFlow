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
   
         <div className="flex flex-wrap ">
    {rooms.map((room, index) => (
       <div key={index} className="p-4 min-h-[150px] flex flex-col">
        <Room roomDetails={room} />
      </div>
    ))}
  </div>
  
    </>
  )
}

export default RoomList
