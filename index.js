const express= require('express')
const app = express()

app.get("/", (req,res) => res.send("Hello World"))
app.get("/", (req,res) => res.json({response:"Connected"}))
app.get("/", (req,res) => res.cookie("Username","Flavio",{domain:'.flaviocopes.com'}))
app.listen(3000, () => console.log("Server Connected"))
