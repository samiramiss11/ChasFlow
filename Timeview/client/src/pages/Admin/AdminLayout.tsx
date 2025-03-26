import React from 'react'
import { Outlet ,redirect} from 'react-router-dom'
import { JOURNY_LINSK_CONSTANTS } from '@/utils/links'
const clientAction = () => async () => {}
import { ReduxStore } from '@/lib/store'

export const clientLoader = (store: ReduxStore) => async () => {
  const tokenUser = store.getState().userState.user
 console.log(tokenUser,'load')
  if (!tokenUser) {
   return redirect('../../' + JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1+'/'+JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP2)
  }


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
        <div className='flex-1 bg-adminGrey'>
          <div className='w-full mx-auto '>
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
