//jshint esversion:6

const { response } = require('express')
const express = require('express')
const app = express()
app.listen(3000, function () {
  console.log("Server is running in port 3000")
})
// app.get("/", function (request, response) {
//   response.send("hello, Valentina")
// })
app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html")
})