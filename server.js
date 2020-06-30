const express = require("express")
const app = express()

// Giving static content
app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.get("/data", (req, res) => {
  // Giving a JSON whit Express, simple and fast
  let exit = {
    name: "Julián",
    lastName: "Grisales",
    age: 40,
    url: req.url
  }
  res.send(exit) // Express makes all the work whit JSON parsing, see app-old to compare
})

app.listen(3000, () => {
  console.log("Listening requests on port 3000")
})
