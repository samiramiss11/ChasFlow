import React,{ useState,useEffect }  from 'react'
import { useAppSelector } from '@/lib/hooks';

import { getFirstDateOfISOWeek } from '@/utils/transaction/date';

/**
 * This code constructs an immutable array by mapping weekdays (dayOfWeek) to formatted dates using
 *  template literal formatting. It first determines the Monday of the given ISO week, then iterates over 
 * the weekdays, computing each day's date by adding an offset. The dates are formatted as "DD/MM"
 *  using toLocaleDateString('sv-SE'), ensuring proper localization. Finally, the resulting array of 
 * formatted strings (e.g., "Måndag 30/12") is stored in React state and updates dynamically 
 * when the week value changes.
 * 
 * - set the date in a globally available state to construct transaction obj
 * @returns 
 */
const SetDayTabs = () => {
  const [currentItem, setCurrentItem] = useState<number>(0)
  const dayOfWeek = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag']
   const [daysWithDates, setDaysWithDates] = useState<string[]>([]);

  const { week } = useAppSelector((state: any) => state.bookingState);

    useEffect(() => {
    const currentYear = new Date().getFullYear();
    const monday = getFirstDateOfISOWeek({year:currentYear, week});

      const daysWithDatesArray = dayOfWeek.map((day, index) => {
      const date = new Date(monday);
        date.setDate(monday.getDate() + index); // Add the offset based on index
        
        const formattedDate = date.toLocaleDateString('sv-SE', {
            day: '2-digit',
            month: '2-digit',
        }); // Outputs "30/12"

        return `${day} ${formattedDate}`;
      // return { //{ day: string; date: string }
      //   day,
      //   date: date.toLocaleDateString(), // Store the formatted date
      //   //new Date(monday.getTime() + index * 24 * 60 * 60 * 1000)
      // };
    });

    setDaysWithDates(daysWithDatesArray);
  }, [week]); //mb can change to only when clicked next or prev

  return (
    <div className='flex justify-center '>
      <input
        type='hidden'
        name='formType'
        value='setDayTabs'
      />
      <input
        type='hidden'
        name='day'
        value={currentItem + 1}
      />
      <div
        role='tablist'
        className=' tabs tabs-lifted md:flex flex-auto sm:center justify-center items-center '>
        {daysWithDates.map((item, index) => {
          return (
            <button
              type='submit'
              key={index}
              onClick={() => setCurrentItem(index)}
              className={`h-[56px] flex-grow tab ${
                index === currentItem
                  ? 'bg-white'
                  : 'tab-active text-primary text-white [--tab-bg:black] [--tab-border-color:white]'
              }`}>
              {item}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default SetDayTabs
