import React from 'react'
import { useLocation } from 'react-router'
import { JOURNY_LINSK_CONSTANTS } from '../../utils/links'

type SectionLayoutProps = {
  confirm_success?: boolean
}

type Batch = {
  buttons: { text: string; icon: string | null }[]
  linkDestination: string
}
const NextLinkToBodyFactory = ({
  confirm_success,
}: SectionLayoutProps): Batch => {
  const listToBatch = {
    buttons: [{ text: 'Fortsätt till bekräftelse sidan', icon: null }],
    linkDestination: JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP2,
  }

  const batchToOrder = {
    buttons: [
      { text: 'BEKRÄFTA BOKNING', icon: null },
      { text: 'TILLBAKA TILL VÄLJA RUM', icon: null },
    ],
    linkDestination: JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP3,
  }

  const completeGroupTransactionStep = {
    buttons: [{ text: 'TILL START SIDAN', icon: null }],
    linkDestination: JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1,
  }

  const BadDeveloper = {
    buttons: [{ text: 'TILL START SIDAN', icon: null }],
    linkDestination: JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1,
  }

  const location = useLocation()

  const getPageContent = () => {
    const pageInTransactionGroup = location.pathname
    const bookingprefixPageIsVisited =
      `/` + JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP1
    //const indexPageisVisitedOrBacklinked = indexPageIsVisited||`/` + JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP1+'/'
    switch (pageInTransactionGroup) {
      case bookingprefixPageIsVisited:
        return listToBatch
      case `${bookingprefixPageIsVisited}/` +
        JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP2:
        return batchToOrder
      case `${bookingprefixPageIsVisited}/` +
        JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP3:
        return completeGroupTransactionStep
      default:
        return BadDeveloper
    }
  }
  return getPageContent() as Batch
}

export default NextLinkToBodyFactory
