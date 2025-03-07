import React from 'react'
import RoomList from '@/components/transaction/RoomList'
import {
  type GroupedRoomResponse,
  type ReducedGroupOfRooms,
} from '@/features/transaction/rooms/roomSlice'
const GroupedBookings = ({ contextWithStaticData }: GroupedRoomResponse) => {
  return (
    <div className='flex  py-12   gap-4'>
      {contextWithStaticData.slice(0, 2).map((group, index) => {
        //if (index < 2), better slice than check unnecessary groups, can still use index 'for key

        const groupedRooms = group.rooms.reduce<ReducedGroupOfRooms>(
          (acc, room) => {
            if (!acc[room.layer]) {
              acc[room.layer] = { id: String(room.layer), rooms: [] } // Create array if layer doesn't exist
            }
            acc[room.layer].rooms.push(room) // Add room to corresponding layer
            return acc
          },
          {}
        ) //as Record<string, GroupedLayerRoomObject>)
        const sortedLayers = Object.values(groupedRooms).sort(
          (a, b) => Number(b.id) - Number(a.id) // Sort numerically (descending order)
        )

        return (
          <div
            key={index}
            className='w-1/2  p-4 border-r last:border-r-0  border-chasBlue'>
            {Object.values(sortedLayers).map((layer, index) => {
              return (
                <div key={index}>
                  <div className='flex justify-center'>
                    <div>
                      <h1 className='text-xl font-bold'>{group.id} room</h1>
                      <h1 className='text-xl font-bold'> Våning {layer.id}</h1>
                    </div>
                  </div>
                  <div className='flex '>
                    {
                      <div className='container'>
                        {' '}
                        <RoomList rooms={layer.rooms} />
                      </div>
                    }
                  </div>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default GroupedBookings
