require('dotenv').config()
const express = require("express");
const app = express()

app.get("/", (request,response) => {
    response.send("hello, world")
})
app.use("/static", express.static('public'))
app.listen(process.env.PORT || 3000, () => {
    console.log(`blog running on port ${process.env.PORT || 3000}`)
} )