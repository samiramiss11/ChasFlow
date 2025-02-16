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
}

export const CONFIRMATION_BLOCK_OR_PASS = {
  CONFIRMED_ADMIN: 'confirmed_admin',
}

export const links = [
  {
    id: nanoid(),
    text: 'CHAS ACADEMY',
    path: '/',
    icon: <LiaMapMarkedAltSolid />,
  },

  {
    id: nanoid(),
    text: 'LOGG IN',
    path: `/${JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1}/${JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP2}`,
    icon: <LiaMapMarkedAltSolid />,
  },
]
