const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
app.use(cors())
const router = require('./routes/url.js')
const connectToMongoDB = require('./connect.js')
const staticRouter = require('./routes/StaticRouter.js')

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(staticRouter)
app.set('view engine' , 'ejs')
app.set('views' , path.resolve('./views'))
app.use(router)
connectToMongoDB()
app.listen(8000 , () => console.log("running"))