import { nanoid } from 'nanoid'

import { LiaMapMarkedAltSolid } from 'react-icons/lia'

export const JOURNY_LINSK_CONSTANTS = {
  ONBOARDING_STEP1: 'user-journey',
  ONBOARDING_STEP2: 'user-onboarding',
  ONBOARDING_STEP3: 'consernd',
  ONBOARDING_ALTERNATIV_STEP2: 'register-konsult',
  TRANSACTION_STEP1: 'boka',
  TRANSACTION_STEP2: 'bokningar',
  TRANSACTION_STEP3: 'checkout',
  ADMIN_STEP0: 'admin-page',
  ADMIN_STEP1: 'Bokningar',
  ADMIN_STEP2: 'Inställningar',
  ADMIN_STEP3: 'Tidsrapportering',
  ADMIN_STEP4: 'utbildare',
}

export const CONFIRMATION_BLOCK_OR_PASS = {
  CONFIRMED_ADMIN: 'confirmed_admin',
}

export const sideBar_links = [
  {
    id: nanoid(),
    label: 'Bokningar',
    path: `/${JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP1}`,
  },
  {
    id: nanoid(),
    label: 'Inställningar',
    path: `/${JOURNY_LINSK_CONSTANTS.ADMIN_STEP0}/${JOURNY_LINSK_CONSTANTS.ADMIN_STEP2}`,
  },
  {
    id: nanoid(),
    label: 'Tidsrapportering',
    path: `/${JOURNY_LINSK_CONSTANTS.ADMIN_STEP0}/${JOURNY_LINSK_CONSTANTS.ADMIN_STEP3}`,
  },
  {
    id: nanoid(),
    label: 'Utbildare',
    path: `/${JOURNY_LINSK_CONSTANTS.ADMIN_STEP0}/${JOURNY_LINSK_CONSTANTS.ADMIN_STEP4}`,
  },
]

export const links = [
  {
    id: nanoid(),
    text: 'CHAS ACADEMY',
    path: '/',
    icon: <LiaMapMarkedAltSolid />,
  },

  {
    id: nanoid(),
    text: 'LOGGA IN',
    path: `/${JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1}/${JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP2}`,
    icon: <LiaMapMarkedAltSolid />,
  },
]


export const dropdownLinks = [
 {
    id: nanoid(),
    label: 'Bokningssida',
    href: `/${JOURNY_LINSK_CONSTANTS.TRANSACTION_STEP1}`,
  },
  {
    id: nanoid(),
    label: 'Inställningar',
    href: `/${JOURNY_LINSK_CONSTANTS.ADMIN_STEP0}/${JOURNY_LINSK_CONSTANTS.ADMIN_STEP2}`,
  },
    {
    id: nanoid(),
    label: 'Tidsrapportering',
    href: `/${JOURNY_LINSK_CONSTANTS.ADMIN_STEP0}/${JOURNY_LINSK_CONSTANTS.ADMIN_STEP3}`,
  },
      {
    id: nanoid(),
    label: 'Utbildare',
    href: `/${JOURNY_LINSK_CONSTANTS.ADMIN_STEP0}/${JOURNY_LINSK_CONSTANTS.ADMIN_STEP4}`,
  },
]