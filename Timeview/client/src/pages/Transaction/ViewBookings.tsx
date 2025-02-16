import React from 'react'
import TransactionCard from '@/components/nested_components/TransactionCard'
import Confirm from '../../components/transaction/Confirm'

/**
 *
 * @returns combine the onboarding and transaction objects and
 * send to backend for further processing
 */
export const clientLoader = () => async () => {
  return null
}

const ViewBookings = () => {
  return (
    <div>
      <TransactionCard>
        <Confirm />
      </TransactionCard>
    </div>
  )
}

export default ViewBookings
