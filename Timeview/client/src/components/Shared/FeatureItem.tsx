import React from 'react'

const FeatureItem = ({ title, description }: { title: string, description: string }) => (
  <li>
    <b>{title}:</b> {description}
  </li>
)


export default FeatureItem