import { Outlet, useNavigation } from 'react-router'

import { Footer } from '../../components/Shared'
//Navbar ,
import { createContext, useContext } from 'react'

import { Loading, Header } from '../../components/Shared'
import { useLocation } from 'react-router'
import { fetchAdminProfile } from '@/services/api'
export const clientLoader = (store: ReduxStore) => async () => {
  const tokenUser = store.getState().userState.user
  console.log('tokenUser',tokenUser)
  if (!tokenUser) {
    const token = localStorage.getItem('token') || null
    console.log('pre',token)
    if (token) {
      const newTokenUser = fetchAdminProfile()

      
      console.log('fetch admin',newTokenUser)
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
        <main className='dashboard max-w-full '>
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
