const express = require("express")
const bodyParser = require("body-parser")
const config = require("./config/config")
const dbConnect = require("./db/mongodb")

const app = express();
dbConnect();


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/", (req, res)=>{
    res.send("Welcome to Book Store");
})

app.listen(config.PORT, ()=> {
    console.log(`server started listering on http://localhost:${config.PORT}`)
})