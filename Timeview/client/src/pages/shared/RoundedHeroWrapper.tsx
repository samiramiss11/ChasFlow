import React from 'react'

const RoundedHeroWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-neutral py-2 text-neutral-content h-[60vw] w-[60vw] rounded-full border-2 border-black flex justify-center items-cente'>
      <div className='flex justify-center items-center mx-auto'>{children}</div>
    </div>
  )
}

export default RoundedHeroWrapper
