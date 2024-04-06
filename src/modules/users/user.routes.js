import express from 'express'
import { UserController } from './user.controller.js'
const router = express.Router()
const userController = new UserController()

router.get('/all', userController.getUsers)
router.post('/validate', userController.validateUser)


export default router
