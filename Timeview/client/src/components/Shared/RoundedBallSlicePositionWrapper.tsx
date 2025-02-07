import React from 'react'

const RoundedBallSlicePositionWrapper = ({children}:{children:React.ReactNode}) => {
   return (
    <div className=' py-2 rounded-full flex justify-center items-cente'>
     
      <div className='flex justify-center items-center mx-auto  h-[30vw] w-[60vw] overflow-hidden -m-2'>
         {children}</div></div>
  )
}

export default RoundedBallSlicePositionWrapper