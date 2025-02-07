import { useState } from 'react'

const useToggleEditContent = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const toggleIsEdit = () => {
    setIsEdit((prevIsEdit) => !prevIsEdit)
  }

  return { isEdit, toggleIsEdit }
}

export default useToggleEditContent
