import React, { Children } from 'react'

const ResponsiveBallContent = ({
  children,
  nrFr = 2,
}: {
  children: React.ReactNode
  nrFr?: number
}) => {
  return (
    <div className='w-full flex justify-center'>
      <div
        className={`grid w-9/12 gap-8 items-start ${
          nrFr === 1 ? 'grid-cols-[1fr]' : 'grid-cols-[1fr_1fr]'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default ResponsiveBallContent
