import { Button } from '@/components/ui/button'
import { JOURNY_LINSK_CONSTANTS } from '../../utils/links'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Link } from 'react-router-dom'
const CheckoutDialog = () => {
  return (
    <Dialog modal={false}>
      <DialogTrigger asChild>
        <Button
          size='sm'
          variant='default'
          className='self-start mb-2 rounded-full chasBlue ml-[100px]'>
          {/* <Link to={'../' + JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1}> */}
          BEKRÄFTA BOKNING
        </Button>
      </DialogTrigger>
      <DialogContent className='bg-slate-200 px-7 max-w-[813px] h-[360px]  rounded-md '>
        <DialogHeader className=' px-7 py-12 flex flex-col gap-5 '>
          <DialogTitle>
            <p>
              <b>din bokning är bekräftad</b>
            </p>
          </DialogTitle>
          <DialogDescription>
            {' '}
            <p>
              Tack för att du bokade i ChasPass. Din bokning har nu registrerats
              och du kan se informationen i systemet.
            </p>
          </DialogDescription>
        </DialogHeader>
        <div className='flex  justify-end'>
          <Link
            to={
              '../../' +
              JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1 +
              '/' +
              JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP3
            }
            className='text-decoration-none'>
            <Button
              size='sm'
              variant='default'
              className='self-end mb-2 rounded-full chasBlue ml-[100px]'>
              TILLBAKA TILL VÄLJ UTBILDARE
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CheckoutDialog
