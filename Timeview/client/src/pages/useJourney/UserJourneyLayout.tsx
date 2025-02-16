import React from 'react'
import { Outlet } from 'react-router'
import { RoundBallPositioningWrapper } from '@/components/Shared'
/**
 * move the ball position to the
 * @returns
 */
const UserJourneyLayout = () => {
  return (
    <RoundBallPositioningWrapper>
      <Outlet />
    </RoundBallPositioningWrapper>
  )
}

export default UserJourneyLayout
