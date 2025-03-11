import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { LuAlignLeft } from 'react-icons/lu';
import SignOutLink from './SignOutLink';
import { Button } from '../ui/button';
import UserIcon from './UserIcon';
import { dropdownLinks } from '@/utils/links';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';
function LinksDropdown() {
  // const { userId } = auth();
  // const isAdminUser = userId === process.env.ADMIN_USER_ID;
  return (
    <DropdownMenu 
     modal={false}>
      <DropdownMenuTrigger asChild className='flex items-c'>
       <Button variant='ghost' className='flex items-center gap-2 max-w-[100px]'>
    Logga in
    <UserIcon />
  </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-[218px] mt-1 overflow-hidden rounded bg-white/75 p-2 text-left shadow  ' align='start' sideOffset={10}>
      
          <DropdownMenuItem>
          
             <UserProfile/>
          
          </DropdownMenuItem>
          {/* <DropdownMenuSeparator /> */}
        
      <div className="flex flex-col items-center bg-white hover:bg-gray-100 border rounded-lg shadow-md mx-2 py-4 h-[220px]">
  <div className="   flex flex-col justify-around m-auto h-[220px]">
    {dropdownLinks.map((link) => (
      <DropdownMenuItem key={link.href} className="">
        <div className="w-full flex justify-center">
          <Link to={link.href} className="capitalize w-full underline text-left">
            <p className="text-left w-full">{link.label}</p>
          </Link>
        </div>
      </DropdownMenuItem>
    ))}
  </div>
</div>
          {/* <DropdownMenuSeparator /> */}
          <DropdownMenuItem className='flex justify-center p-6'>
            <SignOutLink />
          </DropdownMenuItem>
      
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default LinksDropdown;