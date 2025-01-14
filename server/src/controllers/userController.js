import { StatusCodes } from 'http-status-codes'
import 'express-async-errors'

export const getCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'update user' })
}

export const getApplicationStats = async (req, res) => {
 res.status(StatusCodes.OK).json({ msg: 'update user' })

}

export const updateUser = async (req, res) => {
   res.status(StatusCodes.OK).json({ msg: 'update user' })
  
  }

