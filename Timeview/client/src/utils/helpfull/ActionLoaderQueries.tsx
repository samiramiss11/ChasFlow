export interface Request extends Body {
  readonly cache: RequestCache
  readonly credentials: RequestCredentials
  readonly destination: RequestDestination
  readonly headers: Headers
  readonly integrity: string
  readonly keepalive: boolean
  readonly method: string
  readonly mode: RequestMode
  readonly redirect: RequestRedirect
  readonly referrer: string
  readonly referrerPolicy: ReferrerPolicy
  readonly signal: AbortSignal
  readonly url: string
  readonly id: string

  public_id?: string
}

import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

export const toastError = (error: any) => {
  const errorMessage =
    error instanceof AxiosError
      ? error?.response?.data?.msg
      : 'no data for you!'
  toast.error(errorMessage)
}

import { type QueryClient } from '@tanstack/react-query'
import customFetch from '@/utils/customFetch'

type sharedAction = {
  crudOperationPart: String
  data: any
  idPart: string
  endPoint: String
  invalidationString?: string
  queryClient?: QueryClient
}

/**
 * HandStatus, Orientation, Prefix, Reference, Words, AllSection, Help
 * @param dataToEndPoint
 * @returns
 */
export const sharedAction = async (dataToEndPoint: sharedAction) => {
  const {
    crudOperationPart,
    data,
    idPart,
    endPoint,
    invalidationString,
    queryClient,
  } = dataToEndPoint
  switch (crudOperationPart) {
    case 'create':
      try {
        await customFetch.post(String(endPoint), data)

        toast.success(`${endPoint} added successfully`)
        if (queryClient && invalidationString) {
          queryClient.invalidateQueries({ queryKey: [invalidationString] })
        }

        return null
      } catch (error) {
        toastError(error)
        return error
      }
    case 'patch':
      //const nanoidRegex = /^[a-zA-Z0-9_-]{21}$/
      const mongooseObjectIdRegex = /^[0-9a-fA-F]{24}$/

      if (mongooseObjectIdRegex.test(idPart)) {
        try {
          await customFetch.patch(`/${String(endPoint)}/${idPart}`, data)

          toast.success(`${idPart}`)
          return null
        } catch (error) {
          toastError(error)
          return error
        }
      }
      toast.error('sad developer')
      return null

    default:
      toast.success('default')
      return null
  }
}
