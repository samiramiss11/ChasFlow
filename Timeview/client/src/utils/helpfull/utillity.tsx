import { ChangeEvent, FormEvent } from 'react'

export const debounce = (onChange: (form: HTMLFormElement) => void) => {
  let timeout: ReturnType<typeof setTimeout>
  return (e: ChangeEvent<HTMLInputElement>) => {
    const form = e.currentTarget.form as HTMLFormElement
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      onChange(form)
    }, 2000)
  }
}

export const shortenUrl = (url: string) => {
  const maxLength = 30 // Define the max length for the URL display
  if (url.length > maxLength) {
    return url.slice(0, maxLength) + '...'
  }
  return url
}

const hasForeign = <T,>(data: any): boolean => {
  if (
    data.item &&
    typeof data.item === 'object' &&
    'referencesid' in data.item
  ) {
    const referencesid = data.item.referencesid
    if (Array.isArray(referencesid)) {
      return referencesid.length === 1
    }
  }
  return false
}

const hasCandidate = <T,>(data: any): boolean => {
  return (
    data.item &&
    typeof data.item === 'object' &&
    'word' in data.item &&
    data.item.length
  ) //length is a bad idea since immer in rdk use Proxy object
}

export { hasForeign, hasCandidate }

import { type Theme } from '@/features/theme/themeSlice'

export function applyTheme(theme: Theme) {
  const root = window.document.documentElement

  root.classList.remove('light', 'dark')

  if (theme === 'system') {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'

    root.classList.add(systemTheme)
    return
  }

  root.classList.add(theme)
}
