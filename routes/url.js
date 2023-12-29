const express = require('express')
const router = express.Router()
const {generateNewShortUrl}  = require('../controller/url.js')
const {redirectToGenerateUrl} = require('../controller/url.js')
const {getAnalytics , justForTest} = require('../controller/url.js')

router.post('/url' , generateNewShortUrl)
router.get("/test" , justForTest)
router.get('/url/:shortId' ,redirectToGenerateUrl)
router.get('/analytics/:shortId' , getAnalytics)
module.exports = router