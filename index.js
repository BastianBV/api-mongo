require("dotenv").config()
const mongoose = require("mongoose")
const express = require("express")
const app = express()



mongoose.connect(URL)

.then(()=>{
    console.log("Conectado a la base de datos de mongo")
    app.listen(5050, ()=>{
        console.log("Server listening...")
    })
})
.catch((err)=>{
    console.log("error", err)
})
console.log("process env", process.env)
//^URL 
const URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}${DB_NAME}`