import React from 'react'
import { FOOT_CONSTANTS } from '@/utils/constants'

const Address = () => {
  return (
    <div>
      <h4>{FOOT_CONSTANTS.HEADER}</h4>
      <p>{FOOT_CONSTANTS.ADRESS}</p>
      <p>{FOOT_CONSTANTS.LAND}</p>
      <p>
        <b>Tel:</b>{' '}
        <span className='text-primary-400'>{FOOT_CONSTANTS.TEL}</span>
      </p>
      <p>
        <b>Mejl:</b>
        <span className='text-primary-400'>{FOOT_CONSTANTS.MEJL}</span>
      </p>
    </div>
  )
}

export default Address
