const http = require("http")
// Creating a simple webserver
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" })
    let exit = {
      name: "Julián",
      lastName: "Grisales",
      age: 40,
      url: req.url
    }
    res.write(JSON.stringify(exit))
    // res.write("Hello World")
    res.end()
  })
  .listen(3000)

console.log("Listening on port 3000")
