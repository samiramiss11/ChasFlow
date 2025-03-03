import React, { ReactNode } from 'react'
//import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '@/components/ui/button'
import { JOURNY_LINSK_CONSTANTS } from '../../utils/links'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'
import { Link } from 'react-router-dom'

type ConfirmationProps = {
  textValues: {
    trigger: string | JSX.Element
    title: string | JSX.Element
    description: string | JSX.Element
  }
  confirmButton: JSX.Element
  children?: JSX.Element
}

const ConfirmDialog = ({
  textValues,
  confirmButton,
  children,
}: ConfirmationProps) => {
  return (
    <Dialog modal={false}>
      <DialogTrigger>
        <div className='flex align-items   items-center'>
          {/* <Link to={'../' + JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1}> */}
          {textValues.trigger}
        </div>
      </DialogTrigger>
      <DialogContent className='bg-slate-200 px-7 pt-12 max-w-[813px] h-[462px]  rounded-md '>
        <DialogHeader className=' px-7 py-12 flex flex-col gap-5 '>
          <div className='flex flex-col items-center'>
            <div>
              <DialogTitle className=''>
                <p>
                  <b>{textValues.title}</b>
                </p>
              </DialogTitle>
              <DialogDescription className=''>
                {' '}
                <p>{textValues.description}</p>
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        {children && children}
        <div className='flex  justify-between items-center  mt-12 pt-12'>
          <DialogClose>
            <Button
              size='sm'
              variant='default'
              className=' mb-2 rounded-full chasBlue w-40 px-6 text-center whitespace-nowrap'>
              {/* <Link to={'../' + JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1}> */}
              Avbryt
            </Button>
          </DialogClose>
          {confirmButton}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ConfirmDialog
{
  /* 
// <Dialog.Root>
//       {/**
//        *
//        */
}
//       <Dialog.Trigger asChild>
//         <div className='flex align-items   items-center'>
//           <Button
//             size='sm'
//             variant='default'
//             className='self-start mb-2 rounded-full chasBlue ml-[100px]'
//           >
//             {/* <Link to={'../' + JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1}> */}
//             Byt utbildare
//           </Button>{' '}
//         </div>
//       </Dialog.Trigger>
//       {/** */}
//       <Dialog.Overlay className='DialogOverlay' />
//       <Dialog.Content className='DialogContent bg-white'>
//         <Dialog.Description className='DialogDescription'>
//           <div>
//             <div>
//               {' '}
//               <b>Du har inte sparat din bokningar</b>
//             </div>
//             <div>
//               Är du säker på att du vill byta utbildare utan att spara din
//               bokningar?
//             </div>
//           </div>
//         </Dialog.Description>
//         {/**component */}

//         <div
//           style={{
//             display: 'flex',
//             marginTop: 25,
//             justifyContent: 'flex-end',
//           }}
//         >
//           <Dialog.Close asChild>
//             <button className='Button green'>Save changes</button>
//           </Dialog.Close>
//         </div>
//         <Dialog.Close asChild>
//           <button
//             className='IconButton'
//             aria-label='Close'
//           >
//             sd
//           </button>
//         </Dialog.Close>
//       </Dialog.Content>
//     </Dialog.Root> */}
// [data-state='open'] {
//   overflow: visible !important;
// }
