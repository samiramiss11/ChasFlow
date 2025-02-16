import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { Error, DashboardLayout, NoMatch } from '@/pages/shared'
import { clientLoader as dashboardLoader } from '@/pages/shared/DashboardLayout'
import {
  Landing,
  FeatureHome,
  ConsernedUserSetting,
  RoleTaskOnboarding,
  UserJourneyLayout,
  AddUserSettings,
} from '@/pages/useJourney'
import {
  ViewBookings,
  TransactionLayout,
  Checkout,
  Bookings,
} from '@/pages/Transaction'

import { clientLoader as featureLoader } from '@/pages/shared/DashboardLayout'
import { clientLoader as ConsernedUserLoader } from './pages/useJourney/ConsernedUserSetting'
import { clientLoader as OnboardingLoader } from './pages/useJourney/RoleTaskOnboarding'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})
import { store } from './lib/store'
import { JOURNY_LINSK_CONSTANTS } from './utils/links'
import { clientAction as addKonsultAction } from './pages/useJourney/AddUserSettings'

import { clientLoader as staticRoomLoader } from './pages/Transaction/Bookings'
import { clientAction as batchAction } from './pages/Transaction/Bookings'
import { clientLoader as combineBatch } from './pages/Transaction/ViewBookings'
import { clientAction as sendCombinedBatch } from './pages/Transaction/Checkout'
import { clientLoader as populateLoader } from './pages/useJourney/Landing'
import { clientAction as LoginAction } from './pages/useJourney/RoleTaskOnboarding'
import { clientLoader as viewBatchLoader } from './pages/Transaction/Checkout'
/**
 * -2025-01-28
 * the landing page navigate or redirect to 2 optional prefixes (onboarding, transaction),
 * onboarding: 3 pages to inform and set user and set of users that is of interesst in the room
 * // the layout displayed has different children on every page, there are no sections beside the main hero
 * transaction: the hero is mostly informative and shared between pages.
 *
 * overview:
 * each page consist of one hero + one section
 * hero: informative in the transaction prefix
 * section:
 */

const onboardingPrefix = {
  path: JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1,
  element: <UserJourneyLayout />,
  loader: featureLoader(store, queryClient),
  children: [
    {
      index: true,
      element: (
        <div>
          {/**the component is old and opsolete */}
          <FeatureHome />
        </div>
      ),
    },
    {
      path: JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP2,
      element: <RoleTaskOnboarding />,
      loader: OnboardingLoader(store),
      action: LoginAction(store),
    },
    {
      path: JOURNY_LINSK_CONSTANTS.ONBOARDING_ALTERNATIV_STEP2,
      element: <AddUserSettings />,
      action: addKonsultAction(store),
    },
    {
      path: JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP3,
      element: <ConsernedUserSetting />,
      loader: ConsernedUserLoader(store),
    },
  ],
}
const transactionPrefix = {
  path: JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP1,
  element: <TransactionLayout />,
  children: [
    {
      index: true,
      element: <Bookings />,
      loader: staticRoomLoader,
      action: batchAction(store),
    },
    {
      path: JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP2,
      element: <ViewBookings />,
      loader: combineBatch(store),
    },
    {
      path: JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP3,
      element: <Checkout />,
      loader: viewBatchLoader(store),
      action: sendCombinedBatch,
    },
  ],
}
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <DashboardLayout />,
      errorElement: <Error />,
      loader: dashboardLoader(store),
      children: [
        {
          index: true,
          loader: populateLoader(store, queryClient),
          element: <Landing />,
        },
        onboardingPrefix,
        transactionPrefix,
      ],
    },
    {
      path: '*', // Catch-all route
      element: <NoMatch />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_startTransition: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
    },
  }
)

const App = () => {
  // fallbackElement={<p>Initial Load...</p>}
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
export default App
// if (import.meta.hot) {
//   import.meta.hot.dispose(() => router.dispose())
// }
