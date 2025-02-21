import React from 'react'

type dynamicFooterContainer = {
  children: React.ReactNode
}

const TransactionCard = ({children}:dynamicFooterContainer) => {
  return (
    <div className="space-y-4">
    <div>
      <h2 className="text-2xl font-bold">Tack för din Bokning</h2>
    </div>

    <div className="container mt-4">
      {children}
    </div>
  </div>
  )
}

export default TransactionCard