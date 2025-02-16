import React from 'react'

import HeroFactory from '@/utils/factories/HeroFactory'
import { useLocation } from 'react-router'
type HeroLayoutProps = {
  children: React.ReactNode
  confirm_success?: boolean
}

/**
 * 2025-01-28
 * started developing in onboarding specific heroes, later added in transaction layout.
 * Onboarding: 2nd page had a confirm logged in, now there is non
 * transaction: the checkout could possibly have a validation message
 * @param param0
 * @returns
 */
const HeroLayout = ({ children, confirm_success }: HeroLayoutProps) => {
  const location = useLocation()
  const wonderwhatContentNeededForPageHero = location.pathname

  const Vertical_Horizontal_Next_Page = () => {
    if (confirm_success)
      return { location: wonderwhatContentNeededForPageHero, confirm_success }
    return { location: wonderwhatContentNeededForPageHero }
  }

  const PageSectionToRender = HeroFactory(Vertical_Horizontal_Next_Page())

  return (
    <div className='px-8'>
      <h1 className='text-center'>{PageSectionToRender.header}</h1>
      <div className='px-8 text-center'>
        {PageSectionToRender.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div>{children}</div>
    </div>
  )
}

export default HeroLayout
