import React from 'react'
import Logo from './Logo'
import { useLoaderData } from 'react-router'
import Address from './Address'
import ChassStamp from './ChassStamp'
const clientLoader = async ()=>{

  return null
}
/**
 * components: Address, Logo,ChasStamp
 * footer with min-hight in px?, 1 div has 3 columns. the img is not optimized, just slice with css. 
 * put an extra div to push the content 10vw
 * 1. the adress is a constant
 * 2. the images recieve flexible props with spread and destructing props pattern (eventually load and inject instead of constant )
 * 3. 
 * @returns 
 */
const Footer = () => {

  return (
     <footer className=' bg-neutral py-2 text-neutral-content  min-h-[463px] flex flex-col justify-between vertical-align pt-9'>
      {/*colums*/}
      
      <div className='flex flex-col sm:flex-row justify-between pt-12'>
          <div className="w-[10vw]"></div>
        <div className='align-element flex justify-center sm:justify-start '>
          {/* address*/}
          <div className='justify-center items-center flex gap-3'>
           <Address/>
          </div>
        </div>
         {/*Logo*/}
        <div className='align-element flex justify-items-end sm:justify-center '>
         <Logo/>
        </div>
        {/*Logo*/}
        <div className='align-element flex justify-center sm:justify-end w-1/2'>
        
            <div className='flex gap-x-6 relative'>
             <ChassStamp   className=" h-auto relative -mr-12" />
            </div>
        
        </div>
       
      </div>
      {/** */}
      <div className="flex  gap-8 justify-center">
        <p>@ 2025 Chas Vissual Managment.se</p>
                <p>Läs mer om vår Tillgänglighetsåtgärder</p>

      </div>
    </footer>
  )
}

export default Footer