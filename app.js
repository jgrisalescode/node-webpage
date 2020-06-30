const http = require("http")
// Creating a simple webserver
http
  .createServer((req, res) => {
    res.write("Hello World")
    res.end()
  })
  .listen(3000)

console.log("Listening on port 3000")
