import React from 'react'
import { Outlet } from 'react-router-dom'

const clientAction = () => async () => {}
import { ReduxStore } from '@/lib/store'

export const clientLoader = (store: ReduxStore) => async () => {
  store.getState().userState.user
  return null
}
import BigSidebar from '@/components/admin/BigSidebar'

const AdminLayout = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-[250px_1fr] w-full min-h-screen '>
      {' '}
      <BigSidebar />
      <div className='w-[90vw] lg:w-[90%] mx-auto py-8'>
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout
