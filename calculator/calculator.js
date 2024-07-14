const express = require('express')
// const bodyParser = require("body-Parser")
const app = express()
const port = 3000
// app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req,res) {
    res.send("Thanks for posting the data")
})


// console.log(req.body)



app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})