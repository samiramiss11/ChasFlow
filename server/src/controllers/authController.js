import { StatusCodes } from "http-status-codes"
import 'express-async-errors'

export const register = async (req,res) => {

      res.status(StatusCodes.CREATED).json({ msg: 'user created' })
}

export const login = async (req,res) =>{

    res.status(StatusCodes.CREATED).json({msg:'user logged in'})
}

export const logout = (req,res)=> {

    res.status(StatusCodes.OK).json({msg: 'user logged out!'})
}