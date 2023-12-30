const express = require('express')
const router = express.Router()
const {handleUserLogin , handleUserSignup} = require('../controller/user')
router.post('/user/signup' , handleUserSignup)
router.post('/user/login' , handleUserLogin)
module.exports = router