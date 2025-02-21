/**
 * this is the last step in onboarding process.
 * -
 */
import React from 'react'
import {
  HeroLayout,
  RoundedHeroWrapper,
  ResponsiveBallContent,
} from '@/components/Shared'
import { useLoaderData, Form, Link, redirect } from 'react-router-dom'

import { type ReduxStore } from '@/lib/store'
import { populateKonsultants } from '@/features/onboarding/users/usersSlice'
import {
  PRIVILAGED_USERS,
  SetComplexUserPrivilages,
} from '@/features/onboarding/users/usersSlice'

export const clientLoader =
  (store: ReduxStore, queryClient: any) => async () => {
    const tokenUser = store.getState().userState.user
    console.log('token-user', tokenUser)
    //1. fetch endpoint and put in store for later use (or just here)
    store.dispatch(populateKonsultants(PRIVILAGED_USERS))

    if (!tokenUser || tokenUser.role !== 'admin') {
      console.log('Redirecting...')
      return redirect('/' + JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP1)
    }
    // const response = await queryClient.ensureQueryData(featuredProductsQuery)
    // const products = response.data.data

    //{ products }
    return { user: PRIVILAGED_USERS }
  }
import FormSelect from '@/components/SelectInput'
import { Button } from '@/components/ui/button'
import { JOURNY_LINSK_CONSTANTS } from '@/utils/links'

/**
 * note user is not used for map operation
 * @returns
 */
const ConsernedUserSetting = () => {
  const { user } = useLoaderData() as { user: SetComplexUserPrivilages }

  if (!user) {
    return (
      <div>
        what if if i insert an url to skip previous steps. i am a spd runner
      </div>
    )
  }
  console.log(user)

  const meta = {
    konsultants: [
      { label: 'John Doe', value: 'john' },
      { label: 'Jane Smith', value: 'jane' },
    ],
  }
  const konsultantNames =
    user.map((userWithRole) => userWithRole.name) ||
    meta.konsultants.map((konsultant) => konsultant.label)
  return (
    <RoundedHeroWrapper>
      <HeroLayout>
        <div>
          <div>
            <Form
              className='pt-8'
              action='POST'
            >
              <ResponsiveBallContent>
                {/* col 1 */}
                <div className='flex flex-col gap-4'>
                  <FormSelect
                    labelText='select category'
                    name='category'
                    list={konsultantNames}
                    defaultValue={konsultantNames[0]}
                  />
                  <Button
                    type='submit'
                    size='sm'
                    variant='default'
                    className='self-start mb-2 rounded-full'
                    asChild
                  >
                    <Link
                      to={'../../' + JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP1}
                    >
                      Bekräfta
                    </Link>
                  </Button>
                </div>

                {/* col 2 */}
                <div className='flex flex-col'>
                  <FormSelect
                    labelText='Skriv in kurskoden'
                    name='kurskod'
                    list={konsultantNames}
                    defaultValue={konsultantNames[0]}
                  />
                </div>
                <div className='pt-4 col-span-2  max-w-[72ch] mx-auto break-words'>
                  <Link
                    to={
                      '../' + JOURNY_LINSK_CONSTANTS.ONBOARDING_ALTERNATIV_STEP2
                    }
                    className=''
                  >
                    <b>
                      <u> Lägg till ny utbildare?</u>
                    </b>{' '}
                    Klicka här för att registrera en ny utbildare
                  </Link>
                </div>
              </ResponsiveBallContent>
            </Form>
            {/**bekräfta*/}
          </div>
        </div>
      </HeroLayout>
    </RoundedHeroWrapper>
  )
}

export default ConsernedUserSetting
