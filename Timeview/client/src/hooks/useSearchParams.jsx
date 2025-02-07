import { useState, useEffect } from 'react'

function useSearchParams() {
  const [searchParams, setSearchParams] = useState(
    new URLSearchParams(window.location.search)
  )

  useEffect(() => {
    function handlePopState() {
      setSearchParams(new URLSearchParams(window.location.search))
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  return searchParams
}

export default useSearchParams
