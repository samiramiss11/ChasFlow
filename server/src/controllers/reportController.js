import 'express-async-errors'
import { StatusCodes } from 'http-status-codes'
export const getUserReports = (req,res)=>{

    res.status(StatusCodes.OK).json({ msg: 'update user' })
}