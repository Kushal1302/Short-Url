const  mongoose = require("mongoose")
const DATABASE = process.env.DATABASE
const connectToMongoDB = async () => {
    await mongoose.connect(`${DATABASE}`).then(() => {
        console.log("Connection Successfull")
    })
}
module.exports = connectToMongoDB