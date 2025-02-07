import React, {useEffect} from 'react'
import { redirect,useLoaderData,useNavigate,useLocation } from 'react-router'
import { ReduxStore } from '@/lib/store';
import { loginUser } from '@/features/onboarding/user/userSlice';

import { populateKonsultants, selectedUser } from '@/features/onboarding/users/usersSlice';
import {USER} from '@/features/onboarding/user/userSlice'
import { PRIVILAGED_USERS } from '@/features/onboarding/users/usersSlice';
/**
 * 
 * @param store create a default user
 * @returns 
 */
export const clientLoader = (store:ReduxStore) => async () => {

   store.dispatch(loginUser(USER))
   store.dispatch(populateKonsultants(PRIVILAGED_USERS))
   store.dispatch(selectedUser(PRIVILAGED_USERS[1])) //employe
  // Perform any meta or auth check
  const shouldRedirect = true;

  if (shouldRedirect) {
    return redirect('/dashboard');
  }

  return { meta: { public: true } }; // Example return for loader data
}

/**
 * can redirect on server if we upgrade to react router v7 in clientLoader 
 * currently the component is bundled and sent to client before redirect
 * @returns 
 */
import {JOURNY_LINSK_CONSTANTS} from '@/utils/links'
const Landing = () => {
   const { meta } = useLoaderData() as any
     const navigate = useNavigate();
  const location = useLocation();

   useEffect(() => {
    // Perform navigation in useEffect to avoid rendering issues
  navigate(`/${JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1}/${JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP2}`, {
      state: { from: location.pathname }, // Pass serializable state
      replace: true,
    });
  }, [navigate, location.pathname]);

  return null; // Prevent rendering anything since we're redirecting

}

export default Landing