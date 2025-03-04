import React from 'react'

type dynamicFooterContainer = {
  children: React.ReactNode
}

const TransactionCard = ({ children }: dynamicFooterContainer) => {
  return (
    <div className='space-y-4 flex justify-center '>
      <div className='max-w-[1000px] lg:min-w-[1000px] mt-4  py-12  '>
        <div className=''>{children}</div>
      </div>
    </div>
  )
}

export default TransactionCard
