import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { ReduxStore } from '@/lib/store'

export const clientLoader = (store: ReduxStore) => async () => {
  store.getState().userState.user
  return null
}

export const clientAction = (store: ReduxStore) => async () => {
  
  return null
}

import { Button } from '@/components/ui/button'
import FormInput from '@/components/FormInput'

/**
 * kan enbart admin byta lösenord eller ska andra personer också ha ingång till admin sidebar? + denna sida?
 * @returns 
 */
const Settings = () => {
  
  const name = 'Förnamn';
  const efternamn = 'Efternamn';
  const email = 'E-post';
  const nuvarande = 'Nuvarande lösenord';
  const nytt_lösen = 'Nytt lösenord';
  const bekräfta = 'Bekräfta lösenord';

  const columnOne = () => {
    return <div>  <div className='flex flex-col '>
          <FormInput
            type='text'
            label='Förnamn'
            name='name'
        defaultValue={name}
        className=''
          />
        </div>
        <div className='flex flex-col '>
          <FormInput
            type='text'
            label='E-post'
            name='email'
            defaultValue={email}
          />
      </div>
      { }
     <div>
          <div className='flex flex-col'>
          <FormInput
            type='text'
            label='Efternamn'
          
            name='lastname'
            defaultValue={efternamn}
          />
        </div>
        <div className='flex flex-col'>
          
          <FormInput
            type='text'
            label='Nuvarande lösenord'
            name='search'
            defaultValue={name}
          />
        </div></div>
    </div>
  }
  return (
    <div className="m-4 bg-white rounded-lg p-8 flex flex-col -min-h-[490px]">
  <h4>Skapa nytt lösenord</h4>

  {/** ✅ Grid takes up remaining space */}
  <div className="grid grid-cols-2 gap-4 w-[60%] flex-grow">
    {columnOne()}

    <div className="flex flex-col">
      <div className="flex flex-col">
        <FormInput type="text" label="Nytt lösenord" name="search" defaultValue={name} />
      </div>

      <div className="flex flex-col">
        <FormInput type="text" label="Bekräfta lösenord" name="search" defaultValue={name} />
          </div>
           {/** ✅ Button pushed to bottom */}
  <div className="flex justify-end mt-auto pb-12">
    <Button size="sm" variant="default" className="rounded-full chasBlue">
      SKAPA NYTT LÖSENORD
    </Button>
  </div>
        </div>
        
  </div>

 
</div>

  )
}

export default Settings
