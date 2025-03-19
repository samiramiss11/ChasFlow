import React from 'react'

const FeatureItem = ({ title, description }: { title: string, description: string }) => (
  <li>
    <b>{title}:</b><div className='max-w-[52ch]'><p> {description}</p></div>
  </li>
)


export default FeatureItem