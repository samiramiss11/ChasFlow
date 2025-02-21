import React from 'react'
import { Outlet } from 'react-router-dom'

const clientAction = () => async () => {}
import { ReduxStore } from '@/lib/store'
export const clientLoader = (store: ReduxStore) => async () => {
  store.getState().userState.user
  return null
}
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { JOURNY_LINSK_CONSTANTS } from '@/utils/links'
import { HeroLayout, RoundedHeroWrapper } from '@/components/Shared'
import { useLocation } from 'react-router'
import { RoundedBallSlicePositionWrapper } from '@/components/Shared'
import { Button } from '@/components/ui/button'
/**
 * the navigation is mostly contained in the page sections, except for one navigation from the index page within the prefix group
 * @returns
 */
const TransactionLayout = () => {
  const location = useLocation()

  const LinkToOnBoardingPrefix = () => {
    return (
      <div className='flex align-items   items-center'>
        <Button
          size='sm'
          variant='default'
          className='self-start mb-2 rounded-full chasBlue ml-[100px]'
        >
          <Link to={'../' + JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1}>
            Byt utbildare
          </Link>
        </Button>
      </div>
    )
  }
  return (
    <div>
      <div className='bg-banner'>
        <RoundedBallSlicePositionWrapper>
          <RoundedHeroWrapper>
            <HeroLayout>
              <div className='flex align-items  items-center gap-4 pt-8'>
                {location.pathname ==
                  `/${JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP1}` &&
                  LinkToOnBoardingPrefix()}
              </div>
            </HeroLayout>
          </RoundedHeroWrapper>
        </RoundedBallSlicePositionWrapper>
      </div>

      <Outlet />
    </div>
  )
}

export default TransactionLayout
