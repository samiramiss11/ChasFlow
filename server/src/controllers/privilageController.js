import 'express-async-errors'
import { StatusCodes } from 'http-status-codes'
export const createLessonDetailMeta = (req,res)=>{

        res.status(StatusCodes.OK).json({ msg: 'created lesson details' })

}

export const readAllPrivilaged = (req,res)=>{
    res.status(StatusCodes.OK).json({msg:'created lesson w details'})
}