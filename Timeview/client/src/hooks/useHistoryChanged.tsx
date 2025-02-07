import { useEffect } from 'react'

const useHistoryChange = (onHistoryChange: any) => {
  useEffect(() => {
    const handleHistoryChange = () => {
      onHistoryChange()
    }

    // Listen for 'popstate' event
    window.addEventListener('popstate', handleHistoryChange)

    // Override the history methods to listen for changes
    const originalPushState = window.history.pushState
    const originalReplaceState = window.history.replaceState

    window.history.pushState = function (...args) {
      originalPushState.apply(this, args)
      handleHistoryChange()
    }

    window.history.replaceState = function (...args) {
      originalReplaceState.apply(this, args)
      handleHistoryChange()
    }

    return () => {
      window.removeEventListener('popstate', handleHistoryChange)

      // Restore the original methods
      window.history.pushState = originalPushState
      window.history.replaceState = originalReplaceState
    }
  }, [onHistoryChange])
}

export default useHistoryChange
