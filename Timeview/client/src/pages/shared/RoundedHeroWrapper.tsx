import React from 'react'

const RoundedHeroWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-chasGray py-2 text-neutral-content h-[55vw] w-[55vw]  max-w-[760px] max-h-[760px] rounded-full flex'>
      <div className='flex items-center mx-auto'>{children}</div>
    </div>
  )
}

export default RoundedHeroWrapper
