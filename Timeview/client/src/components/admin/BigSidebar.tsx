// import NavLinks from './NavLinks'
// import Logo from '../Logo'
// import Wrapper from '@/assets/wrappers/BigSidebar'
import { useDashboardContext } from '@/pages/shared/DashboardLayout'
import AdminLinks from './AdminLinks'
const BigSidebar = () => {
  // const { showSidebar } = useDashboardContext()
  return (
    <div className=' min-h-full  py-12 grid grid-rows-[auto,1fr] bg-white'>
      {/* first row */}

      {/* second row */}
      <AdminLinks />
    </div>
  )
}

export default BigSidebar
