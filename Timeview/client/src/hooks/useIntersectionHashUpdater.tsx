import { useEffect, useRef, useCallback } from 'react'
import { debounce } from 'lodash'

const useIntersectionHashUpdater = (smooth_scroll_id: string) => {
  const targetRef = useRef(null)

  const updateURLHash = useCallback(() => {
    const newUrl = `${window.location.origin}${window.location.pathname}#${smooth_scroll_id}`
    if (window.location.href !== newUrl) {
      window.history.replaceState(null, '', newUrl)
    }
  }, [smooth_scroll_id])

  const handleIntersection = useCallback(
    debounce(([entry]) => {
      if (entry.isIntersecting) {
        updateURLHash()
      }
    }, 200),
    [updateURLHash]
  )

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 1.0,
    })

    if (targetRef.current) {
      observer.observe(targetRef.current)
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current)
      }
    }
  }, [handleIntersection])

  return targetRef
}

export default useIntersectionHashUpdater
