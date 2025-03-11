import React from 'react'
import { FOOT_CONSTANTS } from '@/utils/constants'

const Address = () => {
  return (
    <div className="space-y-1 min-w-[202px] ">
      <h3 className="text-lg font-semibold">{FOOT_CONSTANTS.HEADER}</h3>
       <p className="text-sm">{FOOT_CONSTANTS.LOCATION}</p>
      <p className="text-sm">{FOOT_CONSTANTS.ADRESS}</p>
      <p className="text-sm">{FOOT_CONSTANTS.LAND}</p>
     {/* <p className="text-sm">{FOOT_CONSTANTS.TELEFON}</p>*/}
      <p className="text-sm">
        <b>Mejl:</b> <span className="text-[#52A1CF]">{FOOT_CONSTANTS.MEJL}</span>
      </p>
    </div>
  );
};


export default Address
