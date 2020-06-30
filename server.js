const express = require("express")
const app = express()
const hbs = require("hbs")
require("./hbs/helpers/helpers")

const port = process.env.PORT || 3000

// Giving static content
app.use(express.static(__dirname + "/public"))

// Express HBS engine
hbs.registerPartials(__dirname + "/views/partials")
app.set("view engine", "hbs")

app.get("/", (req, res) => {
  res.render("home", {
    name: "Julián",
    year: new Date().getFullYear()
  })
})

app.get("/about", (req, res) => {
  res.render("about", {
    name: "julián",
    year: new Date().getFullYear()
  })
})

app.listen(port, () => {
  console.log(`Listening requests on port ${port}`)
})
