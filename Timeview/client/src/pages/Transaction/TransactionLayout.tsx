import React from 'react'
import { Outlet } from 'react-router-dom'


const clientAction = () => async () =>{

}
import { ReduxStore } from '@/lib/store'
export const clientLoader = (store: ReduxStore) => async () =>{
  store.getState().userState.user
}
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io"
import { JOURNY_LINSK_CONSTANTS } from '@/utils/links'
import { HeroLayout,RoundedHeroWrapper } from '@/components/Shared'
import { useLocation } from 'react-router'
import {RoundedBallSlicePositionWrapper} from '@/components/Shared'

/**
 * the navigation is mostly contained in the page sections, except for one navigation from the index page within the prefix group
 * @returns 
 */
const TransactionLayout = () => {
    const location = useLocation()

    const LinkToOnBoardingPrefix = ()=>{
        return<div className='flex align-items  justify-center items-center'>
            <Link to={'../'+JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1}><IoIosArrowRoundBack/></Link>
          </div>
    }
  return (
  <div>
       <div className="bg-red-300">
        <RoundedBallSlicePositionWrapper>

        
     <RoundedHeroWrapper>
        
       <HeroLayout>
    {   location.pathname==`/${JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP1}` && LinkToOnBoardingPrefix()}
      </HeroLayout>
    </RoundedHeroWrapper>
   </RoundedBallSlicePositionWrapper></div>
     <Outlet/>
     
   </div>
  )
}

export default TransactionLayout