const HeroFeatureHome_StaticContent = {
  header: 'välkommen att boka rum hos oss!',
  paragraphs: [
    'Här kan du söka utifrån vilket rum du önskar eller utifrån vilket datum du önskar.',
    'Önskar du överblicka vilket rum som är lediga just nu kan du klicka på översikt',
  ],
  buttons: [
    { text: 'Boka Rum', icon: 'O' },
    { text: 'Redigera Bokade rum', icon: 'O' },
  ],
}

const RoleTaskOnBoarding = {
  header: 'Vänligen logga in för att kunna redigera',
  paragraphs: [
    'Här kan du söka utifrån vilket rum du önskar eller utifrån vilket datum du önskar',
  ],
}

const BadDeveloper = {
  header: 'See HeroFactory.tsx',
  paragraphs: [
    'Här kan du söka utifrån vilket rum du önskar eller utifrån vilket datum du önskar',
  ],
}

const pickConsultant = {
  header: 'Välj konsult och kurskod för din bokning',
  paragraphs: [
    "Välj konsultens namn och kurskod för att boka ett rum. Om konsulten inte finns med i listan kan du klicka på länken 'Lägg till ny konsult' för att skapa en ny",
  ],
}

const TransactionPage = {
  header: 'Planera enkelt din bokning här',
  paragraphs: ['import redux store to extract the targeted consultant'],
}

const confirmed_Identity = {
  header: 'Hantera alla dina bokningar här',
  paragraphs: [
    'Här kan du skapa en ny bokning av rum eller radera en befintlig bokning för |Konsultens namn ++ kurskod|',
    "Önskar du byta konsult, kan du enkelt göra det genom att trycka på knappen 'Gå tillbaka för att byta konsult'",
  ],
}

const user_settings = {
  header: 'Planera enkelt din bokning här!',
  paragraphs: [
    'Här anger du utbildarens namn och kurskod för att boka ett runMain. Välj sedan en dataTagSymbol, ett rum och en tid som passar bäst',
  ],
}

const add_konsultant = {
  header: 'Registrera ny konsult',
  paragraphs: [
    "Fyll i fälten för att registrera en ny konsult. Klicka på  'Lägg till ny konsult' för att spara, eller välj 'Avbryt' för att återgå till att välja en befintlig konsu",
  ],
}

import React from 'react'
import { JOURNY_LINSK_CONSTANTS, CONFIRMATION_BLOCK_OR_PASS } from '../links'

type HeroStateInformation = {
  location: string
  confirm_success?: boolean
}

const HeroFactory = ({ location, confirm_success }: HeroStateInformation) => {
  if (confirm_success) {
    return confirmed_Identity
  }
  console.log(
    'hero determine step location:',
    location,
    'is a confirm step',
    confirm_success
  )
  switch (location) {
    case '/' + JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1:
      return HeroFeatureHome_StaticContent
    case `/${JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1}/` +
      JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP2:
      return RoleTaskOnBoarding
    case `/${JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1}/` +
      JOURNY_LINSK_CONSTANTS.ONBOARDING_ALTERNATIV_STEP2:
      return add_konsultant
    case `/${JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1}/` +
      JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP3:
      return pickConsultant
    case '/' + JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP1:
      return TransactionPage
    case `/${JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP1}/` +
      JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP2:
      return TransactionPage
    case `/${JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP1}/` +
      JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP3:
      return TransactionPage
    case '/' + CONFIRMATION_BLOCK_OR_PASS.CONFIRMED_ADMIN:
      return confirmed_Identity

    default:
      return BadDeveloper
  }
}

export default HeroFactory
