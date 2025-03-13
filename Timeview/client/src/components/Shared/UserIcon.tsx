import { LuUser } from 'react-icons/lu';
//async; (possible in next.js)
import { FaUser } from "react-icons/fa";
function UserIcon() {
//   const profileImage = await fetchProfileImage();
//   if (profileImage) {
//     return (
//       <img src={profileImage} className='w-6 h-6 rounded-full object-cover' />
//     );
//   }
  return <FaUser className='h-24 rounded-full  text-white' />;}
export default UserIcon;