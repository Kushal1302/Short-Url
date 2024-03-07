const shortid = require('shortid')
const Url = require("../models/url")


const generateNewShortUrl = async (req,  res) => {
    try {
        const {url} = req.body
        
        if(!url) return res.render('home' , {
            id : "Url required"
        })
        const shortID = shortid()
        const data = await  Url.findOne({redirectUrl : url})
        
        if(data) return res.redirect('/')
        await Url.create({
            shortId:shortID,
            redirectUrl:url,
            visitHistory:[]
        })
        res.render('home' , {
            id : shortID
        })
    } catch (error) {
        console.log(error)
    }
}

const redirectToGenerateUrl =  async (req ,res) => {
    try {
        const shortId = req.params.shortId
        const entry =  await Url.findOneAndUpdate({shortId} , {
            $push : {
                visitHistory :{
                    timestamp: Date.now()
                }
            }
        })
        
        entry && res.redirect(entry.redirectUrl)
    } catch (error) {
        console.log(error)
    }
}
const getAnalytics = async (req , res) => {
    try {
        const shortId = req.params.shortId
        const entry = await Url.findOne({shortId})

        res.json({clicks:entry.visitHistory.length , visitHistory:entry.visitHistory})

    } catch (error) {
        
    }
}
const justForTest = async (req ,res) => {
    
    
    
}
module.exports ={
    generateNewShortUrl,
    redirectToGenerateUrl,
    getAnalytics,
    justForTest
}