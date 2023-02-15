const express = require('express')
const router = express.Router()
const ProfileController = require('../controllers/profileController')

router.get('/profile', ProfileController.getAll)
router.post('/profile', ProfileController.create)
router.put('/profile/:id', ProfileController.update)
router.delete('/profile/:id', ProfileController.delete)

module.exports = router