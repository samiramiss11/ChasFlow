import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { OwnedBatch } from '@/features/transaction/booking/setBookings'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
const OrdersList = () => {
  const { allbooking } = useLoaderData() as OwnedBatch

  const { day, week, rooms } = allbooking || {}

  console.log(allbooking)
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  )
  return (
    <div>
      <ScrollArea className='h-72 w-48 rounded-md border'>
        <div className='p-4'>
          <h4 className='mb-4 text-sm font-medium leading-none'>Tags</h4>
          {tags.map((tag) => (
            <div key={tag}>
              <div className='flex items-center justify-between'>
                <div className='text-sm'>{tag}</div>
                <Button
                  size='sm'
                  variant='outline'
                  className='self-end mb-2 rounded-full '
                >
                  <span className='px-1'> Välj</span>
                </Button>
              </div>
              <Separator className='my-2' />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

export default OrdersList
