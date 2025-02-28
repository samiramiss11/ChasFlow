import React from 'react'

const ChassStamp = ({...props}) => {
   return (
<div className="flex justify-end items-center pr-4">
  <img 
    src={'/assets/assets/chas-academy-logo.png'} 
    alt='Chas Academy Logo' 
   {...props}    className="w-[30vw] max-w-xs"
  />
</div>)}

export default ChassStamp