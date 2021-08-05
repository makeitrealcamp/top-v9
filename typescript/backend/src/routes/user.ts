import express from 'express'
import { create, list } from '../controllers/user.controller'

const router = express.Router()

router.route('/').post(create)
router.route('/').get(list)

export default router
