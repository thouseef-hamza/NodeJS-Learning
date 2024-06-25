const express = require("express")
const app = express()
const path = require("path")
const token = require('./middleware/token')
const validation = require("./middleware/validation")

// app.use(express.static("views"))
const middleware = [token,validation]

app.get("/template",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","index.html"))
})

app.get("/",middleware,(req,res)=>{
    res.send("<h1>Home</h1>");
})

app.get("/contact",(req,res)=>{
    res.json("Home");
})

app.get("*",(req,res)=>{
    res.status(404).send("404 Not Found");
})

const PORT = process.env.PORT || 3001

app.listen(PORT,()=>console.log(`Server is running on ${PORT}`));