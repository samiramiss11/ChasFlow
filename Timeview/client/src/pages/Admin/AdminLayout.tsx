import React from 'react'
import { Outlet } from 'react-router-dom'

const clientAction = () => async () => {}
import { ReduxStore } from '@/lib/store'

export const clientLoader = (store: ReduxStore) => async () => {
  store.getState().userState.user
  return null
}
import ChassStamp from '../../components/Shared/ChassStamp'
import BigSidebar from '@/components/admin/BigSidebar'
import AdminNavbar from '@/components/admin/AdminNavbar'
/**
 * admin has a sidebar compare to other users that only get a hero +1 section
 * @returns 
 */
const AdminLayout = () => {
  return (
    <div>
      <AdminNavbar />
      <div className='bg-slate-200 grid grid-cols-1 lg:grid-cols-[250px_1fr] '>
        <BigSidebar />
        <div className='w-full min-h-screen flex flex-col '>
          <Outlet />

          <div className='mt-[calc(100vh-90%)]'>
            <ChassStamp />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
