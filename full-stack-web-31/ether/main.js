var express = require("express")
var server = express()
server.listen(32000)
server.use(express.static("public"))