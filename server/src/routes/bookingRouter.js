import { Router } from 'express'
import {
  createBookReport
} from '../controllers/roomController.js'

const router = Router()

router.post('/booking', createBookReport)


export default router
