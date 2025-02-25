import React from 'react'
import { Logo } from '../Shared'
import { useLocation } from 'react-router'

const AdminNavbar = () => {
  const location = useLocation()

  const pathParts = decodeURIComponent(location.pathname).split('/')

  // Get the last part of the path (e.g., "Inställningar")
  const pageTitle = pathParts[pathParts.length - 1] || 'Dashboard'
  return (
    <div className='flex gap-11 items-center p-3 bg-white'>
      {' '}
      <Logo isTextBased />
      <h6 className='justify-self-end'>{pageTitle}</h6>
    </div>
  )
}

export default AdminNavbar
