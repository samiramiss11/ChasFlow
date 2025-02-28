import React from 'react'

const clientAction = () => async () => {}
import { ReduxStore } from '@/lib/store'

export const clientLoader = (store: ReduxStore) => async () => {
  store.getState().userState.user
  return null
}
import { Button } from '@/components/ui/button'
import FormInput from '@/components/FormInput'
import { Label } from '@/components/ui/label'
const Settings = () => {
  const name = 'null'
  return (
    <div className='m-4 bg-white'>
      <div className='grid grid-cols-2 gap-4'>
        {/** Namn */}
        <div className='flex flex-col'>
          <Label htmlFor='namn'>Namn</Label>
          <FormInput
            type='search'
            label='search course'
            name='search'
            defaultValue={name}
          />
        </div>
      </div>
      <Button
        size='sm'
        variant='default'
        className='self-end mb-2 rounded-full chasBlue'
      >
        SKAPA NYTT LÖSENORD
      </Button>
    </div>
  )
}

export default Settings
