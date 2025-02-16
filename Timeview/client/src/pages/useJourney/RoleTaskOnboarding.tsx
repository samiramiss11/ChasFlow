import React, { useState } from 'react'
import { HeroLayout, RoundedHeroWrapper } from '@/components/Shared'
import { JOURNY_LINSK_CONSTANTS } from '@/utils/links'
import { Button } from '@/components/ui/button'
import { Link, Form, redirect } from 'react-router-dom'
import { ActionFunction, useLoaderData } from 'react-router'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ReduxStore } from '@/lib/store'
import { ComplexUserPrivilage } from '@/features/onboarding/users/usersSlice'
export const clientLoader = (store: ReduxStore) => async () => {
  const tokenUser = store.getState().userState.user

  return { userExistInStore: tokenUser }
}
import { loginUser, USER } from '@/features/onboarding/user/userSlice'
export const clientAction =
  (store: ReduxStore): ActionFunction =>
  async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    console.log(data)

    store.dispatch(loginUser({ user: USER, jwt: '...', token: '...' }))
    return null
  }

// export const clientAction = ()=>{
//     return redirect(JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP3)
// }
import { LuPencil, LuCalendar } from 'react-icons/lu'
import { useNavigate } from 'react-router'
const RoleTaskOnboarding = () => {
  const { userExistInStore } = useLoaderData() as {
    userExistInStore: ComplexUserPrivilage | boolean
  }
  //from load or login
  const [user, toggleUser] = useState<ComplexUserPrivilage | boolean>(
    userExistInStore
  )

  const navigate = useNavigate()

  const columnOne = () => {
    return (
      <div>
        <Label htmlFor='namn'>Namn</Label>
        <Input
          id='search'
          name='name'
          type='text'
        />

        <div className='pt-4'>
          <Button
            type='button' // Changed from "submit" since it's handling navigation
            size='sm'
            variant='default'
            className='mb-2 w-24 justify-self-end rounded-full'
            onClick={() => {
              if (
                userExistInStore &&
                typeof userExistInStore !== 'boolean' &&
                userExistInStore.role === 'admin'
              ) {
                toggleUser(true)
              }
              navigate('../' + JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP3)
            }}
          >
            Bekräfta
          </Button>
        </div>
      </div>
    )
  }
  return (
    <RoundedHeroWrapper>
      <HeroLayout>
        <Form
          className=''
          method='POST'
        >
          <div className='flex align-items pt-3 justify-center gap-4'>
            <div className='flex align-items pt-3 justify-center gap-4'>
              {/** column 1*/}
              <div className='flex flex-col'>
                {columnOne()}

                <Link
                  to={`/user-journey/${JOURNY_LINSK_CONSTANTS.ONBOARDING_ALTERNATIV_STEP2}`}
                  className='underline'
                >
                  Lägg till konsult
                </Link>
              </div>
              {/**column 2 */}
              <div className='flex flex-col'>
                <Label htmlFor='lösenord'>Lösenord</Label>
                <Input
                  id='search'
                  name='password'
                  type='text'
                />
              </div>
            </div>
          </div>
        </Form>
      </HeroLayout>
    </RoundedHeroWrapper>
  )

  //   return (
  //  <RoundedHeroWrapper>

  //       <HeroLayout  confirm_success= {true}>
  //       <div className='align-baseline'>
  //          <div className='flex align-items pt-3 justify-center gap-4' >
  //        <div  className='flex align-items pt-3 justify-center gap-4'>
  //           <div className='flex flex-col'>
  //  <Button  type="button"
  //       asChild
  //       size="sm"
  //       variant="default"
  //       className="mb-2 rounded-full"><Link to= {'../'+JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP3}> <LuCalendar className="mr-2"/>  Boka Tid</Link></Button>
  //           </div>

  //        <Button  type="button"
  //       asChild
  //       size="sm"
  //       variant="default"
  //       className=" mb-2 rounded-full"><Link to={`../../${JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP1}`}><LuPencil className="mr-2"/>  Redigera Rokade Rum</Link></Button>
  //         </div></div>

  //       </div>
  //     </HeroLayout></RoundedHeroWrapper>
  // )
}

export default RoleTaskOnboarding
