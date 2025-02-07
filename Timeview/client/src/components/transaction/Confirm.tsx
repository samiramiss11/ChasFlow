import React from 'react'
import { NavLink } from 'react-router-dom'

import { useLocation } from 'react-router'
import NextLinkToBodyFactory from '@/utils/NextLinkToBodyFactory'
import { JOURNY_LINSK_CONSTANTS } from '@/utils/links'



/**
 * 25-01-28
 * use the factory to access static constants displayed for different pages.
 * the object is ordered to link page within or outside prefix grouping(left=prev) and (right=next). the container take 100& and is justified accordingly.
 * the factory know whether there exist a prev page in an intermediet page between the first and last page.
 * the component consider how to navigate between route objects that ignore trailing slash with absolute paths when necessary
 * the purpose of the component is to confirm the batch of information to compute booked roomes for users, different weeks and days.
 * @returns 
 */
const Confirm = () => {
const location = useLocation()
     const nextPageInfo = NextLinkToBodyFactory({})
    const firstPageWOTrailing = `/${JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP1}` 
    //consider url prefix composition
     const isGroupIndex = location.pathname  == firstPageWOTrailing
     const isFinalPage = location.pathname == `${firstPageWOTrailing}/${JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP3}`
    
    //navigation considering url prefix
    const nextPageForIndexedGroupedUrl= isGroupIndex? './':'../' //relative path inside group must navigate child->parent->child
    const startLinkInAnotherGroup = `../../${nextPageInfo.linkDestination}` //grouped nodes = 2 layers
    const finalLink = isFinalPage? startLinkInAnotherGroup : nextPageForIndexedGroupedUrl+nextPageInfo.linkDestination
  return (
    <div className='flex flex-row-reverse justify-between  mb-4 container'>
        <div className='col-auto'>
          <div className='flex gap-2 justify-end'>
            {/**
             *
             */}
            <NavLink
              to={finalLink}
              className='text-decoration-none'
            >
              <button className='btn btn-primary'>{nextPageInfo.buttons[0].text}</button>
            </NavLink>
            </div>
            
                        </div>

                        <div className="flex gap-2">
                  {nextPageInfo.buttons?.[1] &&
                  
           <div className='flex-end'>
            {/**don't to='../', its good to avoid relative path to avoid trailing path => reduce checks */}
              <NavLink
              to={'/'+JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP1}
              className='text-decoration-none'
            >
              <button className='btn btn-primary'>{nextPageInfo.buttons[1].text}</button>
            </NavLink>
           </div>

            }
            </div>

            </div>

  )
}

export default Confirm