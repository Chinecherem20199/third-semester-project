const express = require("express")
const bodyParser = require("body-parser")
const config = require("./config/config")
const dbConnect = require("./db/mongodb")
const bookRoute = require("./routes/books.route")
const authorRoute = require('./routes/authors.route');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const logger = require('./logging/logger')
const app = express();

//Connect to Mongodb Database
dbConnect();

// Add Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//Route to use as the main entry point
app.use("/api/v1/books", bookRoute)
app.use('/api/v1/authors', authorRoute);

//Rate limit middle ware
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false // Disable the `X-RateLimit-*` headers
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

//Security middleware
app.use(helmet());

app.get("/", (req, res)=>{
    res.send("Welcome to Book Store");
})
// Error handler middleware
app.use((err, req, res, next) =>{
    logger.error(err.message);
    const errorStatus = err.status || 500
    res.status(errorStatus).send(err.message)
    next()
})
app.listen(config.PORT, ()=> {
    logger.info(`server started listering on http://localhost:${config.PORT}`)
})