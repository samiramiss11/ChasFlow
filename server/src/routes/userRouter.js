import { Router } from 'express'
import {
  getCurrentUser,
  getApplicationStats,
  updateUser,
} from '../controllers/userController.js'

const router = Router()

router.get('/current-user', getCurrentUser)
router.post('/admin/app-stats',  getApplicationStats)

router.patch('/update-user', updateUser)

export default router
