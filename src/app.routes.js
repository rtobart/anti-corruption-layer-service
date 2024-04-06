import express from 'express'
const router = express.Router()
router.use(express.urlencoded({ extended: true }))
router.use(express.json())

import userRoutes from './modules/users/user.routes.js'

router.use('/service-user', userRoutes)

export default router