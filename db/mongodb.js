const mongoose = require("mongoose")
const CONFIG = require("../config/config");
const logger = require('../logging/logger')

function dbConnect(){
    mongoose.connect(CONFIG.MONGODB_URL)
    mongoose.connection.on("connected", ()=>{
        logger.info('MongoDB connected succesfully..');
    })
    mongoose.connection.on('error', (err) => {
        logger.error( err);
    });

}

module.exports = dbConnect;