import React, { useState } from 'react'
import { HeroLayout, RoundedHeroWrapper } from '../../components/Shared'
import { Button } from '@/components/ui/button'
import { Link, Form, redirect, useNavigate } from 'react-router-dom'
import { ActionFunction, useLoaderData } from 'react-router'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ReduxStore } from '@/lib/store'

import { JOURNY_LINSK_CONSTANTS } from '../../utils/links'
import { addConsultant } from '@/services/api'
export const clientLoader = (store: ReduxStore) => async () => {
  const tokenUser = store.getState().userState.user
  console.log('token-user', tokenUser)

  if (!tokenUser || tokenUser.role !== 'admin') {
    console.log('Redirecting...')
    return redirect('/' + JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP1)
  }
}

export const clientAction =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<Response | null> => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    console.log('act')
        try {
    const response = await addConsultant(data)
    console.log(data)

      //store.dispatch(addKonsult(data))
    } catch (error) {return new Response('Failed to add consultant', { status: 500 });}
    return redirect(`/${JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1}/${JOURNY_LINSK_CONSTANTS.ONBOARDING_ALTERNATIV_STEP2}`)
  }
import { AiOutlineStop } from 'react-icons/ai'
/**
 * add consultant perform a create request that is posted to some endpoint
 * @returns 
 */
const AddUserSettings = () => {
  const navigate = useNavigate()
  return (
    <RoundedHeroWrapper>
      <HeroLayout>
         <Form
            method='POST'
            action={`/${JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1}/${JOURNY_LINSK_CONSTANTS.ONBOARDING_ALTERNATIV_STEP2}`} 

          >
        <div className='flex align-items justify-center'>
         
            <div className='grid grid-cols-2 gap-4'>
              {/** Namn */}
              <div className='flex flex-col'>
                <Label htmlFor='firstName'>Namn</Label>
                <Input
                  id='konsult'
                  name='firstName'
                  type='text'
                />
              </div>

              {/** Lösenord */}
              <div className='flex flex-col'>
                <Label htmlFor='lastName'>Efternamn</Label>
                <Input
                  id='search'
                  name='lastName'
                  type='text'
                />
              </div>

              {/** Lösenord (Duplicate Field, Consider Removing or Changing Name) */}
              <div className='flex flex-col'>
                <Label htmlFor='mobile'>telefonnummber</Label>
                <Input
                  id='search2'
                  name='mobile'
                  type='text'
                />
              </div>

              {/** Mejl */}
              <div className='flex flex-col'>
                <Label htmlFor='email'>Mejl</Label>
                <Input
                  id='mejl'
                  name='email'
                  type='email'
                />
              </div>

              {/** Företag */}
              <div className='flex flex-col'>
                <Label htmlFor='companyName'>Företag</Label>
                <Input
                  id='företag'
                  name='companyName'
                  type='text'
                />
              </div>
            </div>
        
        </div>
        <div className='flex justify-between p-8'>
          <Button
            type='button'
            onClick={() => {
              navigate(-1)
            }}
            size='sm'
            variant='destructive'
            className='ml-6 mb-2 rounded-full'>
            <AiOutlineStop className='mr-2' />
            Avbryt
          </Button>
          <Button
            type='submit'
            // onClick={() => {
            //   return null
            // }}
            size='sm'
            variant='default'
            className=' mr-6 mb-2 rounded-full'>
            LÄGG TILL KONSULT
          </Button>
        </div>
          </Form>
      </HeroLayout>
    </RoundedHeroWrapper>
  )
}

export default AddUserSettings
