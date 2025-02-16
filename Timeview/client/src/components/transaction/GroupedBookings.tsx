import React from 'react'
import RoomList from '@/components/transaction/RoomList'
import { type GroupedRoomResponse } from '@/features/transaction/rooms/roomSlice'
const GroupedBookings = ({ contextWithStaticData }: GroupedRoomResponse) => {
  return (
    <div className='flex  pt-3  gap-4'>
      {contextWithStaticData.slice(0, 2).map((group, index) => {
        //if (index < 2), better slice than check unnecessary groups, can still use index 'for key
        return (
          <div
            key={index}
            className='w-1/2 p-4 border-r last:border-r-0'
          >
            <div className='flex justify-center'>
              <h1 className='text-xl font-bold'>{group.id}</h1>
            </div>
            <div className='flex col'>
              {
                <div className='container'>
                  {' '}
                  <RoomList rooms={group.rooms} />
                </div>
              }
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default GroupedBookings
