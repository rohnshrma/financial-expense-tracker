// imports / requires
const express = require("express")
const app = express()
const bodyParser = require("body-parser")

// import router from the route.js file
const router = require("./routes/route")

// constants
const PORT = 5000



// custom middleware
// app.use((req,res,next)=>{
//     console.log("hello im in the custom middleware");
//     console.log(req.path);
//     console.log(req.url);
//     next()
// })

// middleware

// ejs
app.set("view engine" , "ejs")
// bodyparser
app.use(bodyParser.urlencoded({extended:true}))
// static files 
app.use(express.static("public"))


app.use(router)







// server setup

app.listen(PORT,()=>{
    console.log("Sever started on Port : " , PORT)
})

