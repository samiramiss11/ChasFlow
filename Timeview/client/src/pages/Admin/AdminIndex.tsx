import React from 'react'
import { useEffect } from 'react'
import { JOURNY_LINSK_CONSTANTS } from '../../utils/links'
import { useNavigate, useLocation } from 'react-router'
const AdminIndex = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // Perform navigation in useEffect to avoid rendering issues
    navigate(
      `/${JOURNY_LINSK_CONSTANTS.ADMIN_STEP0}/${JOURNY_LINSK_CONSTANTS.ADMIN_STEP1}`,
      {
        state: { from: location.pathname }, // Pass serializable state
        replace: true,
      }
    )
  }, [navigate, location.pathname])

  return null // Prevent rendering anything since we're redirecting
}

export default AdminIndex
