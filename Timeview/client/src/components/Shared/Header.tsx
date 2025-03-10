import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../../features/onboarding/user/userSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { useQueryClient } from '@tanstack/react-query'

import { RootState } from '@/lib/store'
import { links } from '../../utils/links'
import Logo from './Logo'
import { JOURNY_LINSK_CONSTANTS } from '../../utils/links'
import LinksDropdown from './LinksDropdown'
const Header = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const user = useAppSelector((state: RootState) => state.userState.user)
  const queryClient = useQueryClient()


  const handleLogout = () => {
    navigate(
      `/${JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1}/${JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP2}`
    )
    queryClient.removeQueries()

    dispatch(logoutUser())
  }

  return (
    <header className='sticky   w-full bg-neutral py-2 text-neutral-content z-[50]'>
      {/**fixed top-0 w-full  */}
      <nav className='flex flex-col sm:flex-row justify-around'>
        <div className='align-element flex justify-center sm:justify-start '>
          {/* CART LINK*/}
          <div className='flex gap-3'>
            <Logo />
          </div>
        </div>
        <div className='align-element flex justify-center sm:justify-center '></div>
        {/* USER */} {/* LINKS */}
        <div className='align-element flex justify-center sm:justify-end '>
          {user ? (
             <div className='flex gap-x-6 justify-center items-center'>
              {links.map((link, index) => {
                if(links.length -1 > index)
                return (
                  <Link
                    key={link.id}
                    to={link.path}
                    className='link link-hover text-xs sm:text-sm  border-r border-chasBlue pr-6'>
                    {link.text}
                  </Link>
                  );
                else {
                  return <LinksDropdown/>
                }
              })}</div>
          ) : (
            <div className='flex gap-x-6 justify-center items-center'>
              {links.map((link) => {
                return (
                  <Link
                    key={link.id}
                    to={link.path}
                    className='link link-hover text-xs sm:text-sm'>
                    {link.text}
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
export default Header
