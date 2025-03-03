import Room from './Room'
import { onlineRooms } from '@/features/transaction/rooms/roomSlice'
const OnlineBooking = () => {
  return (
    <div className='w-[80vw]  flex flex-col items-center'>
      <div className='p-8'>
        <h5 className='font-bold'>Online</h5>
      </div>
      <div className='max-w-[60%] mx-auto'>
        {' '}
        <Room roomDetails={onlineRooms} />
      </div>
    </div>
  )
}

export default OnlineBooking
