import React, { ReactNode } from 'react'
import main from 'assets/chas-academy-logo.png'
import { Link } from 'react-router-dom'
import { JOURNY_LINSK_CONSTANTS } from '@/utils/links'

const Logo = ({...props}) => {
  return (
      <div>
        <Link to={'/'+JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1}> <img src={ '/assets/assets/chas_logo_280x60_white.png'} alt='Chas Academy Logo'  {...props} className='img'  />  </Link>
      </div>
)
}

export default Logo