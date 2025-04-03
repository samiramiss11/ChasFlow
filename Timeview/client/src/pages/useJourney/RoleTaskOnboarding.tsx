/// <reference types="react" />
import React, { useState,useEffect } from 'react'
import {
  HeroLayout,
  RoundedHeroWrapper,
  ResponsiveBallContent,
  ConfirmDialog,
} from '../../components/Shared'
import { JOURNY_LINSK_CONSTANTS } from '../../utils/links'
import { Button } from '@/components/ui/button'
import { Link, Form, useActionData } from 'react-router-dom'
import { ActionFunction, useLoaderData } from 'react-router'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ReduxStore } from '@/lib/store'
import { ComplexUserPrivilage } from '@/features/onboarding/users/usersSlice'
import { loginUser as remoteLogin } from '@/services/api'
export const clientLoader = (store: ReduxStore) => async () => {
  const tokenUser = store.getState().userState.user

  return { userExistInStore: tokenUser }
}
import { loginUser, USER } from '@/features/onboarding/user/userSlice'
export const clientAction =
  (store: ReduxStore): ActionFunction =>
  async ({ request }) => {
    const formData = await request.formData()

    const data = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >
    const { email, password } = data

    // Call remoteLogin with the correct type
    const user: string = await remoteLogin({ email, password })
   // console.log(user, 'user response') //just a token using axios api default

    // store.dispatch(
    //   loginUser({ user: USER, jwt: user ? ':)' : '...', token: user })
    // )
    return user ? { success: true } : { success: false }
  }

// export const clientAction = ()=>{
//     return redirect(JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP3)
// }
import { useNavigate } from 'react-router'
/**
 * Login with heavy refracturing to enable multiple functionallities
 * - forgot password: reusable confirm dialog for a primary button that open a dialog opposed to a link button
 * - the ball shaped HeroWrapper always display 2 columns. the first column contain a confirmation button that redirect bassed on role.
 * -
 * @returns
 */
const RoleTaskOnboarding = () => {
  const { userExistInStore } = useLoaderData() as {
    userExistInStore: ComplexUserPrivilage | boolean
  }
  //from load or login
  const [user, toggleUser] = useState<ComplexUserPrivilage | boolean>(
    userExistInStore
  )

   const actionData = useActionData() as { success: boolean }
  const navigate = useNavigate()

  useEffect(() => {
    if (actionData?.success) {
      navigate('../' + JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP3, { replace: true })
    }
  }, [actionData, navigate])


  const columnOne = () => {
    return (
      <div className=''>
        <div className='flex flex-col w-full gap-2 max-w-[200px]'>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='pass'
            name='email'
            type='text'
          />
        </div>

        <div className='mt-8'>
          <Button
            type='submit' // Changed from "submit" since it's handling navigation
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
              //navigate('../' + JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP3)
            }}>
            Logga in
          </Button>
        </div>
      </div>
    )
  }
  const forgotPassword = ({ linkChild }: { linkChild: React.JSX.Element }) => {
    const textValues = {
      trigger: (
        <button className='text-inherit'>
          {/* <Link
          to={`/user-journey/${JOURNY_LINSK_CONSTANTS.ONBOARDING_ALTERNATIV_STEP2}`}
          clasasName=''
        > */}
          <b>
            <u>Glömt lösenord?</u>
          </b>{' '}
          <span className='text-gray-300'>Klicka här för att ange din e-post och få en återställningslänk
          skickad till dig</span>
        </button>
      ),
      title: 'Har du glömt ditt lösenord?',
      description: (
        <div>
          <div>
            <p>Ingen fara vi hjälper dig!</p>
          </div>
          <div>
            <p>
              Vänligen skriv in din mejladress så skickar vi ett mejl till dig
              med mer information om hur vi går tillväga för att lösa problemet
            </p>
          </div>
        </div>
      ),
    }
    const confirmButton = (
      <Link
        to={
          '../../' +
          JOURNY_LINSK_CONSTANTS.ADMIN_STEP0 +
          '/' +
          JOURNY_LINSK_CONSTANTS.ADMIN_STEP2
        }>
        <Button
          size='sm'
          variant='default'
          className='mb-2 rounded-full chasBlue w-40 text-center whitespace-nowrap'>
          SKICKA MEJL
        </Button>
      </Link>
    )

    return (
      <>
        <ConfirmDialog
          textValues={textValues}
          confirmButton={confirmButton}>
          {linkChild}
        </ConfirmDialog>
      </>
    )
  }
  return (
    <RoundedHeroWrapper>
      <HeroLayout>
        <Form
          className=' pt-8'
          method='POST'>
          <ResponsiveBallContent>
            {/** column 1:  grid-cols-1 md:grid-cols-2 : did not take equal width*/}
            <div className='flex flex-col w-full'>{columnOne()}</div>
            {/**column 2 */}
            <div className=''>
              <div className='flex flex-col w-full gap-2  max-w-[200px]'>
                <Label htmlFor='lösenord'>Lösenord</Label>
                <Input
                  id='search'
                  name='password'
                  type='password'
                 
                />
              </div>
            </div>
            {/* Wrap the "Glömt lösenord?" text */}
            <div className='pt-4 col-span-2  max-w-[72ch] mx-auto break-words'>
              {forgotPassword({
                linkChild: (
                  <div className='flex flex-col w-40 gap-2'>
                    <Label htmlFor='lösenord'>Lösenord</Label>
                    <Input
                      id='search'
                      name='password'
                      type='text'
                    />
                  </div>
                ),
              })}
            </div>
          </ResponsiveBallContent>
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
