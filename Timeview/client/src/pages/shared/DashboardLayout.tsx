import { Outlet, useNavigation } from 'react-router'

import { Footer } from '../../components/Shared'
//Navbar ,
import { createContext, useContext } from 'react'

import { Loading, Header } from '../../components/Shared'
import { useLocation } from 'react-router'
import { fetchAdminProfile } from '@/services/api'
import { loginUser } from '@/features/onboarding/user/userSlice'
export const clientLoader = (store: ReduxStore) => async () => {
  const tokenUser = store.getState().userState.user
 
  if (!tokenUser) {
    const token = localStorage.getItem('token') || null
   
    if (token) {
      const newTokenUser = await fetchAdminProfile()
      const Username = `${newTokenUser.firstNamd} ${newTokenUser.lastName}`
      store.dispatch(loginUser({ user: {id:'meh-we-dont-do-that-over-here',name:Username,role:'admin'}, jwt: token, token: token }))

    }
  }

  return null
}
interface DashboardContextType {
  // Define properties when needed
}

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
)
import { JOURNY_LINSK_CONSTANTS } from '../../utils/links'
import { ReduxStore } from '@/lib/store';
const DashboardLayout = () => {
  const navigation = useNavigation()
  const location = useLocation()
  const doNotDisplayDefaultHeader = location.pathname.includes(
    `/${JOURNY_LINSK_CONSTANTS.ADMIN_STEP0}`
  )

  const isPageLoading = navigation.state === 'loading'

  return (
    <DashboardContext.Provider value={{}}>
      <div className='overflow-x-hidden min-h-screen'>
        <main className='dashboard max-w-full bg-[#FAFAFA}] '>
          {/* Sidebar (Visible on large screens) */}

          {/* Main Content */}
          <div className='w-full'>
            {doNotDisplayDefaultHeader ? null : <Header />}
            <div className=''>{isPageLoading ? <Loading /> : <Outlet />}</div>
          </div>
        </main>
        {doNotDisplayDefaultHeader ? null : <Footer />}
      </div>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => {
  const context = useContext(DashboardContext)
  if (!context) {
    throw new Error(
      'useDashboardContext must be used within a DashboardContextProvider'
    )
  }
  return context
}

export default DashboardLayout
