import React from 'react'
import { Outlet } from 'react-router'
import { RoundBallPositioningWrapper } from '../../components/Shared'
/**
 * move the ball position to the
 * @returns
 */
import CentralizedBanner from '../../components/Shared/CenteralizedBanner'
const UserJourneyLayout = () => {
  const heroContent = {
    hero: 'ChasPass',
    subheader: '-Effektivitet med stil',
    paragraph:
      'Här skapar du enkelt ditt schema, hanterar bokningar och fakturering - allt i ett smidigt och fraftfullt verktyg. ChasPass för det enkelt att hålla koll på dina arbetstider och hålla verksamheten igång utan krångel',
  }

  return (
    <div className=' w-full '>
      {/**put in two colums */}
      <CentralizedBanner heroContent={heroContent}>
        <RoundBallPositioningWrapper>
          <Outlet />
        </RoundBallPositioningWrapper>
      </CentralizedBanner>
    </div>
  )
}

export default UserJourneyLayout
