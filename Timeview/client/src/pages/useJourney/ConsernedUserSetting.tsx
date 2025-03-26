/**
 * this is the last step in onboarding process.
 * -
 */
import React from 'react'
import {
  HeroLayout,
  RoundedHeroWrapper,
  ResponsiveBallContent,
} from '../../components/Shared'
import {
  useLoaderData,
  useFetcher,
  Link,
  redirect,
  ActionFunction,
} from 'react-router-dom'

import { type ReduxStore } from '@/lib/store'
import { populateKonsultants,populateCourseCodes } from '@/features/onboarding/users/usersSlice'
import {
  PRIVILAGED_USERS,
  selectedUser,
  setSelectedCourseCode,setCourseCodes
} from '@/features/onboarding/users/usersSlice'
import { removeLastTimeIntervall } from '@/features/transaction/booking/setBookings'
import { clearIntervals } from '@/features/transaction/booking/booking'
import { fetchConsultants, fetchCourses } from '@/services/api'
import { USER_ROLE } from '@/utils/types'
export const clientLoader =
  (store: ReduxStore, queryClient: any) => async () => {
    const tokenUser = store.getState().userState.user
    //console.log('token-user', tokenUser)
    //1. fetch endpoint and put in store for later use (or just here)
    store.dispatch(removeLastTimeIntervall())
    store.dispatch(clearIntervals())
    //console.log('cleared')
    store.dispatch(populateKonsultants(PRIVILAGED_USERS))

    let konsultantNamesMeta = []
    let courseCode = []
    try {
      const [consultantsRemote, courseCodeRemote] = await Promise.all([
        fetchConsultants({}),
        fetchCourses(),
      ])
     // const consultants = consultantsRemote
      courseCode = courseCodeRemote
      konsultantNamesMeta = consultantsRemote.map(
        (userWithRole: any) => userWithRole.name
      )
     // console.log('complete')
      store.dispatch(populateKonsultants(consultantsRemote))
      store.dispatch(populateCourseCodes(courseCodeRemote))
    } catch (error) {
      console.error('Failed to fetch data. Backend may be offline.', error)
      konsultantNamesMeta = ['Nan']
      courseCode = ['Nan']
      //         errors.msg = error.response.data.msg
      //     return errors
      //   }
      // }
      // const AccessHookInComponentFromCatchBlock = () => {
      //   const errors = useActionData()
      // Keep consultants and courseCode empty if API calls fail
    }
    if (
      !tokenUser ||
      (tokenUser.role !== USER_ROLE.Manager &&
        tokenUser.role !== USER_ROLE.Employee2 &&
        true)
    ) {
      //console.log('Redirecting...')
      //return redirect('/' + JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP1)
    }
    // const response = await queryClient.ensureQueryData(featuredProductsQuery)
    // const products = response.data.data

    //{ products }

    return {
      userMeta: konsultantNamesMeta,
      courseCodeMeta: courseCode,
    }
  }

export const clientAction =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<Response | null> => {
    const formData = await request.formData()
    const valdKonsultant = formData.get('valdKonsultant') as string | null
    const kurskod = formData.get('kurskod') as string | null

    store.dispatch(setSelectedCourseCode(Number(kurskod)))
    store.dispatch(selectedUser(valdKonsultant))
    // const tokenUser = store.getState().userState.user
    // if (!tokenUser || tokenUser.role !== 'admin') {
    //   return redirect('/' + JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP1)
    // }
    return redirect('../../' + JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP1)
  }

import FormSelect from '@/components/SelectInput'
import { Button } from '@/components/ui/button'
import { JOURNY_LINSK_CONSTANTS } from '../../utils/links'

/**
 * note user is not used for map operation
 * @returns
 */
type DataConformedMetaOfDatabase = {
  userMeta: string[] | null
  courseCodeMeta: setCourseCodes
}
/**
 * within a hero section display optional selection for a current user that will own a batch of bookigs.
 * there is a link for crud of relevant selection list if there is any need of create operations.
 * otherwise navigate programmatically
 * @returns
 */
const ConsernedUserSetting = () => {
  const { userMeta, courseCodeMeta } =
    useLoaderData() as DataConformedMetaOfDatabase
  console.log(courseCodeMeta)
  //console.log(userMeta)
  let fetcher = useFetcher()
  if (!userMeta) {
    return (
      <div>
        what if if i insert an url to skip previous steps. i am a spd runner
      </div>
    )
  }
  //console.log(user)

  const meta = {
    konsultants: [
      { label: 'John Doe', value: 'john' },
      { label: 'Jane Smith', value: 'jane' },
    ],
  }

  return (
    <RoundedHeroWrapper>
      <HeroLayout>
        <div>
          <div>
            <fetcher.Form
              className='pt-8'
              method='POST'>
              <ResponsiveBallContent>
                {/* col 1 */}
                <div className='flex flex-col gap-4 max-w-[200px]'>
                  <FormSelect
                    labelText='select category'
                    name='valdKonsultant'
                    list={userMeta.map((meta) => {
                      return{ label: meta, value: meta }
                    })}
                    defaultValue={userMeta[0]}
                  />
                  <Button
                    type='submit'
                    size='sm'
                    variant='default'
                    className='self-start mb-2 rounded-full  py-2 px-6"'
                    // asChild
                  >
                    Bekräfta
                    {/* <Link
                      to={'../../' + JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP1}
                    > */}
                    {/* </Link> */}
                  </Button>
                </div>

                {/* col 2 */}
                <div className='flex flex-col max-w-[200px] gap-2'>
                  <FormSelect
                    labelText='Skriv in kurskoden'
                    name='kurskod'
                    list={courseCodeMeta.map(meta => ({
                      value: meta.courseID,  // the underlying value
                      label: meta.courseCode // the displayed text
                    }))}
                    defaultValue={courseCodeMeta[0].courseID}
                  />
                </div>
                <div className='pt-4 col-span-2  max-w-[72ch] mx-auto break-words'>
                  <Link
                    to={
                      '../' + JOURNY_LINSK_CONSTANTS.ONBOARDING_ALTERNATIV_STEP2
                    }
                    className=''>
                    <b>
                      <u> Lägg till ny utbildare?</u>
                    </b>{' '}
                    Klicka här för att registrera en ny utbildare
                  </Link>
                </div>
              </ResponsiveBallContent>
            </fetcher.Form>
            {/**bekräfta*/}
          </div>
        </div>
      </HeroLayout>
    </RoundedHeroWrapper>
  )
}

export default ConsernedUserSetting
