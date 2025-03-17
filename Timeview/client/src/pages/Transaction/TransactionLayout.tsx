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
import { JOURNY_LINSK_CONSTANTS } from '../../utils/links'
import {
  HeroLayout,
  RoundedHeroWrapper,
  RoundedBallSlicePositionWrapper,
} from '../../components/Shared'
import CentralizedBanner from '../../components/Shared/CenteralizedBanner'
import { useLocation } from 'react-router'
import {} from '../../components/Shared'
import ConfirmDialog from '../../components/Shared/ConfirmDialog'
import { Button } from '@/components/ui/button'
/**
 * the navigation is mostly contained in the page sections, except for one navigation from the index page within the prefix group
 * @returns
 */
const TransactionLayout = () => {
  const location = useLocation()

  const LinkToOnBoardingPrefix = () => {
    const textValues = {
      trigger: (
        <Button
          size='sm'
          variant='default'
          className='self-start mb-2 rounded-full chasBlue ml-[100px]'>
          Byt utbildare
        </Button>
      ),
      title: 'Du har inte sparat din bokningar',
      description:
        'Är du säker på att du vill byta utbildare utan att spara din bokningar?',
    }
    const confirmButton = (
      <Link
        to={
          '../' +
          JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1 +
          '/' +
          JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP3
        }>
        <Button
          size='sm'
          variant='default'
          className='mb-2 rounded-full chasBlue w-40 text-center whitespace-nowrap'>
          Byt utbildare
        </Button>
      </Link>
    )
    return (
      <div className='flex align-items   items-center'>
        <ConfirmDialog
          textValues={textValues}
          confirmButton={confirmButton}
        />
        {/* <Button
          size='sm'
          variant='default'
          className='self-start mb-2 rounded-full chasBlue ml-[100px]'
        >
          <Link to={'../' + JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1}>
            Byt utbildare
          </Link>
        </Button> */}
      </div>
    )
  }
   const heroContent = {
    hero: 'ChasPass',
    subheader: '-Effektivitet med stil',
    paragraph:
      'Här skapar du enkelt ditt schema, hanterar bokningar och fakturering - allt i ett smidigt och fraftfullt verktyg. ChasPass för det enkelt att hålla koll på dina arbetstider och hålla verksamheten igång utan krångel',
  }

  return (
    <div>
      <div className=''>
        <CentralizedBanner heroContent={heroContent} cutBottom={true}>
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
          </CentralizedBanner>
      </div>

      <Outlet />
    </div>
  )
}

export default TransactionLayout
