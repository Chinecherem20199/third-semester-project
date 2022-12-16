const mongoose = require("mongoose")
const CONFIG = require("../config/config");

function dbConnect(){
    mongoose.connect(CONFIG.MONGODB_URL)
    mongoose.connection.on("connected", ()=>{
        console.log("MongoDB connected succesfully..")
    })
    mongoose.connection.on('error', (error) => {
        console.log("An error occured ",error);
    });

}

module.exports = dbConnect;