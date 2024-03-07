const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
require('dotenv').config()
app.use(cors())
const router = require('./routes/url.js')
const connectToMongoDB = require('./connect.js')
const staticRouter = require('./routes/StaticRouter.js')
const userRouter = require('./routes/user.js')
const PORT = process.env.PORT || 3000
// file parser = urlencoded
//json parser = express.json()
app.use(express.json())
app.use(express.urlencoded({extended : false}))


//view engine setup
app.set('view engine' , 'ejs')
app.set('views' , path.resolve('./views'))

//router
app.use(staticRouter)
app.use(userRouter)
app.use(router)


//mongoDb Connection
connectToMongoDB()
app.listen(8000 , () => console.log("running"))