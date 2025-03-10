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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='flex gap-4 max-w-[100px]'>
          Log in
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-52' align='start' sideOffset={10}>
      
          <DropdownMenuItem>
          
             <UserProfile/>
          
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        
       
       
          {dropdownLinks.map((link) => {
           // if (link.label === 'admin' && !isAdminUser) return null;
            return (
              <DropdownMenuItem key={link.href}>
                <Link to={link.href} className='capitalize w-full'>
                  {link.label}
                </Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>
      
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default LinksDropdown;