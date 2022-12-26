const express = require("express")
const bodyParser = require("body-parser")
const config = require("./config/config")
const dbConnect = require("./db/mongodb")
const bookRoute = require("./routes/books")

const app = express();

//Connect to Mongodb Database
dbConnect();

// Add Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//Route to use as the main entry point
app.use("/api/v1/books", bookRoute)

app.get("/", (req, res)=>{
    res.send("Welcome to Book Store");
})
// Error handler middleware
app.use((err, req, res, next) =>{
    console.log(err)
    const errorStatus = err.status || 500
    res.status(errorStatus).send(err.message)
    next()
})
app.listen(config.PORT, ()=> {
    console.log(`server started listering on http://localhost:${config.PORT}`)
})