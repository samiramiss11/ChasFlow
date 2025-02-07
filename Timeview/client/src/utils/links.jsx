

import { nanoid } from 'nanoid'

export const links = [
  {  id: nanoid(),text: 'CHAS ACADEMY', path: 'add-achievement', icon: <LiaMapMarkedAltSolid /> },
  { id: nanoid(),
    text: 'RUMSKARTA',
    path: 'LOGG IN',
    icon: <LiaMapMarkedAltSolid />,
  },
  {  id: nanoid(),text: 'LOGG IN', path: 'stats', icon: <LiaMapMarkedAltSolid /> },
  
]

import { LiaMapMarkedAltSolid } from 'react-icons/lia'

export const JOURNY_LINSK_CONSTANTS = {
  ONBOARDING_STEP1: 'user-journey',
  ONBOARDING_STEP2: 'user-onboarding',
  ONBOARDING_STEP3: 'consernd',
  ONBOARDING_ALTERNATIV_STEP2: 'register-konsult',
  TRANSACTION_STEP1:'boka',
  TRANSACTION_STEP2:'bokningar',
  TRANSACTION_STEP3:'checkout'
}

export const CONFIRMATION_BLOCK_OR_PASS = {
  CONFIRMED_ADMIN: 'confirmed_admin'
}