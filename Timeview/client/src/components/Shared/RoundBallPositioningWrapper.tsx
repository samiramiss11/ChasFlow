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
    <div className=''>
      <div className=' pl-12'>{children}</div>
    </div>
  )
}

export default RoundBallPositioningWrapper
