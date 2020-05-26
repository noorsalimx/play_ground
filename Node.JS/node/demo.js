const http = require("http");
var server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.write("Hello");
    res.end();
  }
  if (req.url === "/api/no") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  } else {
    res.write("404, page not found");
    res.end();
  }
});

server.listen(3000);

console.log("Server is listening to port", 3000);
