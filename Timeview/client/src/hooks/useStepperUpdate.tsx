import { useState, useCallback, useEffect } from 'react'

const useStepperUpdate = (categories: string[]) => {
  const [activeStepperLeft, setActiveStepperLeft] = useState<boolean>(true)

  const handleStepperUpdate = useCallback(() => {
    if (categories.length > 4) {
      setActiveStepperLeft((prevState) => !prevState)
    }
  }, [categories.length])

  useEffect(() => {
    handleStepperUpdate()
  }, [categories, handleStepperUpdate])

  return activeStepperLeft
}

export default useStepperUpdate
