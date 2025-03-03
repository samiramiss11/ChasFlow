import React, { useState } from 'react'
import { HeroLayout, RoundedHeroWrapper } from '../../components/Shared'
import { Button } from '@/components/ui/button'
import { Link, Form, redirect, useNavigate } from 'react-router-dom'
import { ActionFunction, useLoaderData } from 'react-router'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ReduxStore } from '@/lib/store'

import { JOURNY_LINSK_CONSTANTS } from '../../utils/links'
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
    console.log(data)
    try {
      //store.dispatch(addKonsult(data))
    } catch (error) {}
    return null
  }
import { AiOutlineStop } from 'react-icons/ai'
const AddUserSettings = () => {
  const navigate = useNavigate()
  return (
    <RoundedHeroWrapper>
      <HeroLayout>
        <div className='flex align-items justify-center'>
          <Form
            className='w-full max-w-lg'
            action='POST'>
            <div className='grid grid-cols-2 gap-4'>
              {/** Namn */}
              <div className='flex flex-col'>
                <Label htmlFor='namn'>Namn</Label>
                <Input
                  id='konsult'
                  name='name'
                  type='text'
                />
              </div>

              {/** Lösenord */}
              <div className='flex flex-col'>
                <Label htmlFor='lösenord'>Lösenord</Label>
                <Input
                  id='search'
                  name='password'
                  type='text'
                />
              </div>

              {/** Lösenord (Duplicate Field, Consider Removing or Changing Name) */}
              <div className='flex flex-col'>
                <Label htmlFor='lösenord2'>Lösenord</Label>
                <Input
                  id='search2'
                  name='password2'
                  type='text'
                />
              </div>

              {/** Mejl */}
              <div className='flex flex-col'>
                <Label htmlFor='mejl'>Mejl</Label>
                <Input
                  id='mejl'
                  name='email'
                  type='email'
                />
              </div>

              {/** Företag */}
              <div className='flex flex-col'>
                <Label htmlFor='företag'>Företag</Label>
                <Input
                  id='företag'
                  name='company'
                  type='text'
                />
              </div>
            </div>
          </Form>
        </div>
        <div className='flex justify-between p-8'>
          <Button
            type='button'
            onClick={() => {
              navigate(-1)
            }}
            size='sm'
            variant='outline'
            className='ml-6 mb-2 rounded-full'>
            <AiOutlineStop className='mr-2' />
            Avbryt
          </Button>
          <Button
            type='button'
            onClick={() => {
              return null
            }}
            size='sm'
            variant='default'
            className=' mr-6 mb-2 rounded-full'>
            LÄGG TILL KONSULT
          </Button>
        </div>
      </HeroLayout>
    </RoundedHeroWrapper>
  )
}

export default AddUserSettings
