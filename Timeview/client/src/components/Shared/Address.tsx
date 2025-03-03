import React from 'react'
import { FOOT_CONSTANTS } from '@/utils/constants'

const Address = () => {
  return (
    <div className="space-y-1 ">
      <h4 className="text-lg font-semibold">{FOOT_CONSTANTS.HEADER}</h4>
      <p className="text-sm">{FOOT_CONSTANTS.ADRESS}</p>
      <p className="text-sm">{FOOT_CONSTANTS.LAND}</p>
      <p className="text-sm">
        <b>Tel:</b> <span className="text-primary-400">{FOOT_CONSTANTS.TEL}</span>
      </p>
      <p className="text-sm">
        <b>Mejl:</b> <span className="text-primary-400">{FOOT_CONSTANTS.MEJL}</span>
      </p>
    </div>
  );
};


export default Address
