var http = require("http")                   // built in module
var server = http.createServer(controller)
server.listen(12000)                        // Default = 80

function controller(request, response ) {

    if (request.url == "/login") return showLogInPage(request, response)
    if (request.url == "/shop") return showShopPage(request, response)
    if (request.url == "/") return showHomePage(request, response)         // "/" ~ "/index"

    var head = {}
    // head.Content-Type = "text/html"
    head["Content-Type"] = "text/html"

    response.writeHead(404, head)
    response.write("Not Found")
    response.end()

}

function showLogInPage(request, response){

    var head = {}
    // head.Content-Type = "text/html"
    head["Content-Type"] = "text/html"

    response.writeHead(200, head)
    response.write("<button>Login</button>")
    response.end()

}

function showShopPage(request, response) {

    var head = {}
    // head.Content-Type = "text/html"
    head["Content-Type"] = "text/html"

    response.writeHead(200, head)
    response.write("<button>Show</button>")
    response.end()

}

function showHomePage(request, response) {

    var head = {}
    // head.Content-Type = "text/html"
    head["Content-Type"] = "text/html"

    response.writeHead(200, head)
    response.write("<button>Home</button>")
    response.end()

}
