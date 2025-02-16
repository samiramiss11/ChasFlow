import React from 'react'

/**
 * note hight should be dependent on ballsize? or overfl
 * @param param0
 * @returns
 */
const RoundBallPositioningWrapper = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className='bg-slate-500'>
      <div className='pl-11  w-[70vw] '>{children}</div>
    </div>
  )
}

export default RoundBallPositioningWrapper
