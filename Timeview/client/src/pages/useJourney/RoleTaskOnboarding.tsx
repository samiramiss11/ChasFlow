import React, { useState } from 'react'
import { HeroLayout ,RoundedHeroWrapper} from '@/components/Shared'
import { JOURNY_LINSK_CONSTANTS } from '@/utils/links'
import { Button } from '@/components/ui/button'
import { Link, Form, redirect } from 'react-router-dom'
import { ActionFunction, useLoaderData } from 'react-router'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ReduxStore } from '@/lib/store'
export const clientLoader =
  (store:ReduxStore) =>
  async () => {
    
      const user = store.getState().userState.user
  
  return {userExistInStore:user}
}
import { loginUser,USER } from '@/features/onboarding/user/userSlice'
export const clientAction = (store:ReduxStore): ActionFunction => async({request}) =>{
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  console.log(data)

  store.dispatch(loginUser(USER))
}

// export const clientAction = ()=>{
//     return redirect(JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP3)
// }
import { LuPencil,LuCalendar } from "react-icons/lu";
const RoleTaskOnboarding = () => {
        const {userExistInStore} = useLoaderData() as any

        const [user, toggleUser] = useState(userExistInStore)

    if(!user)
  return (
<RoundedHeroWrapper>
        <HeroLayout>
      
       <Form className='' action='POST'>
        <div className='flex align-items pt-3 justify-center gap-4' >
         <div  className='flex align-items pt-3 justify-center gap-4'>
          {/** column 1*/}
           <div className='flex flex-col'>
            <Label htmlFor="namn">Namn</Label>
            <Input id="search" name="name" type="text" />
            <div className='pt-4'>  <Button
          type="button"
          onClick={()=>{toggleUser(true)}}
          size="sm"
          variant="default"
          className=" mb-2 w-24 justify-self-end rounded-full"
        >
          Bekräfta
        </Button></div>
        <Link to={`/user-journey/${JOURNY_LINSK_CONSTANTS.ONBOARDING_ALTERNATIV_STEP2}`} className='underline'>Lägg till konsult</Link>
          </div>
          {/**column 2 */}
          <div className='flex flex-col'>
            <Label htmlFor="lösenord">Lösenord</Label>
            <Input id="search" name="password" type="text" />
          </div>

         </div>
     
         
         </div>
    
         </Form>
      </HeroLayout>
      </RoundedHeroWrapper>
  )

    return (
   <RoundedHeroWrapper>

        <HeroLayout  confirm_success= {true}>
        <div className='align-baseline'>
           <div className='flex align-items pt-3 justify-center gap-4' >
         <div  className='flex align-items pt-3 justify-center gap-4'>
            <div className='flex flex-col'>
   <Button  type="button"
        asChild
        size="sm"
        variant="default"
        className="mb-2 rounded-full"><Link to= {'../'+JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP3}> <LuCalendar className="mr-2"/>  Boka Tid</Link></Button> 
            </div>
             
         <Button  type="button"
        asChild
        size="sm"
        variant="default"
        className=" mb-2 rounded-full"><Link to={`../../${JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP1}`}><LuPencil className="mr-2"/>  Redigera Rokade Rum</Link></Button>
          </div></div>
     
        </div>
      </HeroLayout></RoundedHeroWrapper>
  )
}

export default RoleTaskOnboarding