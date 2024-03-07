const  mongoose = require("mongoose")
const DATABASE = process.env.DATABASE
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(DATABASE);
        console.log("Connection Successful");
    } catch (error) {
        console.error("Connection Failed", error);
    }
};
module.exports = connectToMongoDB