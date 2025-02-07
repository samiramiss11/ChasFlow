import React from 'react'
import TransactionCard from '../../components/nested_components/TransactionCard'
import Confirm from '../../components/transaction/Confirm'

export const clientAction = () => async ()=>{

  return null
}

const Checkout = () => {
  return (
    <div>Bokning Klar
        <TransactionCard><Confirm/></TransactionCard>
    </div>
  )
}

export default Checkout