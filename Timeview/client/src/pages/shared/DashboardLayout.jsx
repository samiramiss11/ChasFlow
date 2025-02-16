import { Outlet, useNavigation } from 'react-router'

import { Footer } from '@/components/Shared'
//Navbar ,
import { createContext, useContext } from 'react'

import { Loading, Header } from '@/components/Shared'

export const clientLoader = () => async () => {
  return null
}
const DashboardContext = createContext()
const DashboardLayout = () => {
  const navigation = useNavigation()

  const isPageLoading = navigation.state === 'loading'

  return (
    <DashboardContext.Provider value={{}}>
      <div>
        <Header />
        <main className='dashboard max-w-full'>
          <div>
            {/**  <Navbar /> */}
            <div className=''>
              {' '}
              {/**not css: dashboard-page, bc margain is set in a nested div */}
              {isPageLoading ? <Loading /> : <Outlet />}
            </div>
          </div>
        </main>
        <Footer />
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
