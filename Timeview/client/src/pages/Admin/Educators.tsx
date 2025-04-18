import React from 'react'
import { JOURNY_LINSK_CONSTANTS } from '@/utils/links'

import { ReduxStore } from '@/lib/store'
import { fetchConsultants,deleteConsultant } from '@/services/api'
import { useLoaderData,Form,redirect } from 'react-router-dom'
export const clientLoader = (store: ReduxStore)=> async (): Promise<{ konsultants: Educator[] }>  => {
    const consultants:Educator[]  = await fetchConsultants({isEducatorConvertion: true})
 const konsultants =  store.getState().konsultantState.users
  return {konsultants: consultants}
}



import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { LiaSortNumericDownAltSolid } from 'react-icons/lia';

type Educator = {
  id: number;
  firstName: string;
  lastName: string;
  email: string | null;
  role: "teacher";
};
const Educators = () => {
  const  {konsultants} = useLoaderData() as { konsultants: Educator[] };
  //console.log(konsultants)

  const orders = [
    {
      id: 1,
      attributes: {
        firstName: 'Alice',
        lastName: 'Johnson',
        email: 'alice.johnson@example.com',
      },
    },
    {
      id: 2,
      attributes: {
        firstName: 'Bob',
        lastName: 'Smith',
        email: 'bob.smith@example.com',
      },
    },
    {
      id: 3,
      attributes: {
        firstName: 'Charlie',
        lastName: 'Brown',
        email: 'charlie.brown@example.com',
      },
    },
  ]
  return (
    <div className='m-4 bg-white -min-h-[699px] p-5 flex justify-center shadow-md rounded-3xl'>
    
        <Table className='w-full'>
          <TableHeader>
            <TableRow className='grid grid-cols-5 gap-4'>
              <TableHead>Namn</TableHead>
              <TableHead>Efternamn</TableHead>
              <TableHead className='w-[100px]'>Email</TableHead>
              <TableHead
                className={`w-1/5 'pl-12'} `}
                colSpan={2}></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className='w-full'>
            {konsultants.map((konsultant) => {
              const { id,firstName, lastName, email } = konsultant// order.attributes
              return (
                <TableRow
                  key={konsultant.id}
                  className='grid grid-cols-5 gap-4 bg-white shadow-md rounded-3xl px-4 mb-2 items-center'>
                  <TableCell>{firstName}</TableCell>
                  <TableCell>{lastName}</TableCell>
                  <TableCell className='text-center'>{email}</TableCell>
                  <TableCell className='col-span-2 pl-9'>
                        <Form method="POST" action={`/${JOURNY_LINSK_CONSTANTS.ADMIN_STEP0}/${JOURNY_LINSK_CONSTANTS.ADMIN_STEP4}/${id}`}>
                    
          <Button type='submit'  size='sm'
                variant='outline'  className='self start mb-2 rounded-full text-chasBlue hover:text-white'> INAKTIVERA UTBILDARE FRÅN LISTA</Button>
        </Form>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
   
    </div>
  )
}

export default Educators
