//ES5 -> ES6

const http = require("http");

//Primera Implementación
function server(request, response){
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola mundo!");
  response.end();
}

http.createServer(server).listen(8080);
