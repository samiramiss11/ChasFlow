'use client';


import { logoutUser } from "@/features/onboarding/user/userSlice";
import { useAppDispatch } from "@/lib/hooks";
function SignOutLink() {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
     localStorage.removeItem('token')
  };

  return (
   
      <button className='w-full text-left' onClick={handleLogout}>
        Logout
      </button>

  );
}
export default SignOutLink;