import BookingControlContainer from "@/components/Calendar/BookingControlContainer";
import Confirm from "../../components/transaction/Confirm";
import { useLoaderData } from "react-router";

/**
 * 
 * @returns display 6 rooms
 */
import {ROOMS} from '@/features/transaction/rooms/roomSlice'
export const clientLoader = () => async ()=>{

    const data =ROOMS
     return data
}

/**
 * checkbox for multiple id.
 * @returns 
 */
export const clientAction = () => async () =>{

}

const Bookings = () => {
    const contextWithStaticData = useLoaderData()
  
    const toDo = {
           bookingArray : [
    {
        day: '',
        time: { start: 'time', end: 'time'},
        room: 'room',
        konsultant: 'name'

    }],
     antalTimmar : 8,
     konsult : 'konsult-name'
    }
  return (
    <div>
        <BookingControlContainer/>
        <div>
            <Confirm/>
        </div>
        <div className='flex flex-end'>
            <button>Tillbaka</button>
            <p>Du önska Boka {toDo.antalTimmar} för {toDo.konsult}</p>
            <button>Bekräfta</button>
        </div>
        
    </div>
  )
}

export default Bookings