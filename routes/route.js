// require router from express

// app - 1
// const express = require("express")
// const router = express.Router()

// app - 2 
const router = require("express").Router()

router.get("/", (req, res) => {
    // render dashboard.ejs file
    res.render("dashboard.ejs")
})
router.get("/add", (req, res) => {
    res.send("<h1>hello welcome to the Add Expense Page</h1>")
})

// post request for "/add"
// read and console the text from the form

// export router to be used in app.js
module.exports = router