'use client';


import { logoutUser } from "@/features/onboarding/user/userSlice";
import { useAppDispatch } from "@/lib/hooks";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { JOURNY_LINSK_CONSTANTS } from "@/utils/links";
function SignOutLink() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem('token')
    localStorage.removeItem('setOfbatches'); 
    localStorage.removeItem('selectedCourseCode'); 
    localStorage.removeItem('selectedUser'); 

     navigate('/' + JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1+'/'+JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP2, { replace: true })
  };

  return (
   
      <Button className='w-[115px] text-left rounded-full ' onClick={handleLogout}>
        LOGGA UT
      </Button>

  );
}
export default SignOutLink;