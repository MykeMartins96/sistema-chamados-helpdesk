import { Router } from 'express'
import {
  register,
  login
} from '../controllers/authController.js'

import authMiddleware from '../middleware/authMiddleware.js'

const router = Router()

router.post('/register', register)
router.post('/login', login)

router.get('/profile', authMiddleware, (req, res) => {
  return res.status(200).json({
    message: 'Rota protegida acessada com sucesso!',
    userId: req.user.id
  })
})

export default router