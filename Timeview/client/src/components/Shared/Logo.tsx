import React, { ReactNode } from 'react'
import main from 'assets/chas-academy-logo.png'
import { Link } from 'react-router-dom'
import { JOURNY_LINSK_CONSTANTS } from '../../utils/links'

const Logo = ({ isTextBased, ...props }: any) => {
  return (
    <div>
      <Link
        to={
          `/${JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1}/` +
          JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP2
        }>
        {' '}
        {!isTextBased ? (
          <img
            src={'/assets/assets/chas_logo_280x60_white.png'}
            alt='Chas Academy Logo'
            {...props}
            className='img'
          />
        ) : (
          <h4 className='text-black'>ChassPass</h4>
        )}
      </Link>
    </div>
  )
}

export default Logo
