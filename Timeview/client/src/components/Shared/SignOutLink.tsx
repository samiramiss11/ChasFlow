'use client';


import { logoutUser } from "@/features/onboarding/user/userSlice";
import { useAppDispatch } from "@/lib/hooks";
import { Button } from "@/components/ui/button";
function SignOutLink() {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
     localStorage.removeItem('token')
  };

  return (
   
      <Button className='w-[115px] text-left rounded-full ' onClick={handleLogout}>
        LOGGA UT
      </Button>

  );
}
export default SignOutLink;