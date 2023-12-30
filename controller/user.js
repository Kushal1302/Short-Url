const User = require("../models/user")

const handleUserSignup = async(req ,res) => {
    try {
        const {name , email , password} = req.body
        await User.create({
            name , 
            email,
            password
        })
        return res.redirect('/')
    } catch (error) {
        console.log(error.message)
    }
}
const handleUserLogin = async(req ,res) => {
    try {
        const {email , password} = req.body
        const user = await User.findOne({email , password})
        if(!user) return res.render('login' , {
            error:"Invalid email or Password"
        })
        return res.redirect('/')
    } catch (error) {
        console.log(error.message)
    }
}
module.exports = {
    handleUserSignup,
    handleUserLogin
}