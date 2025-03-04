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
    <div className='w-full min-h-screen flex flex-col'>
      <AdminNavbar />
      <div className='flex flex-grow'>
        {/* Sidebar */}
        <div className='w-[170px] lg:w-[170px] '>
          <BigSidebar />
        </div>
        {/* Main Content bg-[#EFF4FA] */}
        <div className='flex-1 bg-slate-300 '>
          <div className='w-full mx-auto'>
            <Outlet />
          </div>
          <div className='-mt-32'>
            <ChassStamp />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
