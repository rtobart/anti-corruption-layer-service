import express from 'express'
import { UserController } from './user.controller.js'
const router = express.Router()
const userController = new UserController()

router.get('/all', userController.getUsers)

export default router
