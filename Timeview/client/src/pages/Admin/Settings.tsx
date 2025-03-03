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

/**
 * kan enbart admin byta lösenord eller ska andra personer också ha ingång till admin sidebar? + denna sida?
 * @returns 
 */
const Settings = () => {
  const name = 'förnamn'
  const efternamn = 'förnamn'
  const email = 'förnamn'
  const nuvarande = 'förnamn'
  const nytt_lösen = 'förnamn'
  const bekräfta = 'bekräfta'

  const columnOne = () => {
    return <div>  <div className='flex flex-col '>
          <Label htmlFor='namn'>Namn</Label>
          <FormInput
            type='search'
            label='search course'
            name='search'
            defaultValue={name}
          />
        </div>
        <div className='flex flex-col '>
          <Label htmlFor='namn'>Namn</Label>
          <FormInput
            type='search'
            label='search course'
            name='search'
            defaultValue={name}
          />
      </div>
      { }
     <div>
          <div className='flex flex-col'>
          <Label htmlFor='namn'>Namn</Label>
          <FormInput
            type='search'
            label='search course'
          
            name='search'
            defaultValue={name}
          />
        </div>
        <div className='flex flex-col'>
          <Label htmlFor='namn'>Namn</Label>
          <FormInput
            type='search'
            label='search course'
            name='search'
            defaultValue={name}
          />
        </div></div>
    </div>
  }
  return (
    <div className="m-4 bg-white rounded-lg p-8 flex flex-col h-[490px]">
  <h4>Skapa nytt lösenord</h4>

  {/** ✅ Grid takes up remaining space */}
  <div className="grid grid-cols-2 gap-4 w-[60%] flex-grow">
    {columnOne()}

    <div className="flex flex-col">
      <div className="flex flex-col">
        <Label htmlFor="namn">Namn</Label>
        <FormInput type="search" label="search course" name="search" defaultValue={name} />
      </div>

      <div className="flex flex-col">
        <Label htmlFor="namn">Namn</Label>
        <FormInput type="search" label="search course" name="search" defaultValue={name} />
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
