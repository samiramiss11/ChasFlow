import React from 'react'
import { useState } from 'react'

const SetDayTabs = () => {
  const [currentItem, setCurrentItem] = useState<number>(0)
  const dayOfWeek = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag']
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
        className=' tabs tabs-lifted md:flex flex-auto sm:center justify-center items-center '
      >
        {dayOfWeek.map((item, index) => {
          return (
            <button
              type='submit'
              key={index}
              onClick={() => setCurrentItem(index)}
              className={
                index === currentItem
                  ? 'tab flex-grow bg-white '
                  : 'tab tab-active text-primary text-white flex-grow [--tab-bg:black]  [--tab-border-color:white]'
              }
            >
              {item}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default SetDayTabs
