import React from 'react'

const RoundedBallSlicePositionWrapper = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className='relative rounded-full flex flex-col justify-center items-cente'>
        {/* Half Circle (Top Hat) */}
      
      <div className='flex justify-center items-center mx-auto  h-[37vw] w-[60vw] overflow-hidden -m-2'>
        {children}
      </div>
    </div>
  )
}

export default RoundedBallSlicePositionWrapper
