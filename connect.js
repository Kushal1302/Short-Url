const  mongoose = require("mongoose")

const connectToMongoDB = async () => {
    await mongoose.connect('mongodb://0.0.0.0:27017/short-url').then(() => {
        console.log("Connection Successfull")
    })
}
module.exports = connectToMongoDB